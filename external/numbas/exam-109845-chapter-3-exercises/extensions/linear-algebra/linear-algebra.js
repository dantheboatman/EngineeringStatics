Numbas.addExtension('linear-algebra',['jme','jme-display'],function(extension) {

var math = Numbas.math;
var vectormath = Numbas.vectormath;
var matrixmath = Numbas.matrixmath;

var Fraction = math.Fraction;

var fraction_matrix = extension.fraction_matrix = function(matrix) {
    var o = matrix.map(function(r){return r.map(function(c){ return c instanceof Fraction ? c : new Fraction(c)})});
    o.rows = matrix.rows;
    o.columns = matrix.columns;
    return o;
}
var unfraction_matrix = extension.unfraction_matrix = function(matrix) {
    var o = matrix.map(function(r){return r.map(function(c){return c.numerator/c.denominator})});
    o.rows = matrix.rows;
    o.columns = matrix.columns;
    return o;
}

function wrap_fraction_matrix(fn,unwrap_res) {
    return function(matrix) {
        matrix = fraction_matrix(matrix);
        var res = fn(matrix);
        if(unwrap_res) {
            res = res.matrix;
        }
        return unfraction_matrix(res);
    }
}

function logger(operations,matrix) {
    return function log(message,include_matrix,options) {
        include_matrix = include_matrix===undefined ? true : include_matrix;
        var lmatrix;
        if(include_matrix) {
            lmatrix = matrix.map(function(r){return r.slice()});
            lmatrix.rows = matrix.rows;
            lmatrix.columns = matrix.columns;
        }
        var l = {message:message, matrix: lmatrix};
        for(var key in options) {
            l[key] = options[key];
        }
        operations.push(l);
    }
}

var row_echelon_form = function(matrix) {
    /** Put a matrix representing a system of equations in row-echelon form.
    * Can:
    * * Swap two rows
    * * Multiply a row by a scalar
    * * Subtract a multiple of one row from another
    * For each row of the output, the first non-zero entry is 1, and strictly to the right of the first non-zero entry in the row above.
    * Works over the rationals: input is a matrix of objects {n: numerator,d: denominator}.
    * Output is an object {matrix, operations}, where operations is a list of descriptions of each step of the process, of the form {message: string, matrix: the state of the matrix after the operation}.
    */
    matrix = matrix.map(function(r){return r.slice()});
    var rows = matrix.length;
    var columns = matrix[0].length;
    matrix.rows = rows;
    matrix.columns = columns;
    
    var operations = [];
    var log = logger(operations,matrix);

    var current_row = 0;
    // for each column, there should be at most one row with a 1 in that column, and every other row should have 0 in that column
    for(var leader_column=0;leader_column<columns;leader_column++) {
        // find the first row with a non-zero in that column
        for(var row=current_row;row<rows;row++) {
            if(!matrix[row][leader_column].is_zero()) {
                break;
            }
        }
        // if we found a row with a non-zero in the leader column 
        if(row<rows) {
            // swap that row with the <current_row>th one
            if(row!=current_row) {
                var tmp = matrix[row];
                matrix[row] = matrix[current_row];
                matrix[current_row] = tmp;
                log("Row "+(row+1)+" has a non-zero entry in column "+(leader_column+1)+", so it should go before row "+(current_row+1)+". Swap row "+(row+1)+" with row "+(current_row+1)+".",true,{determinant_scale:new Fraction(-1)});
            }

            // multiply this row so the leader column has a 1 in it
            var leader = matrix[current_row][leader_column];
            if(!leader.is_one()) {
                matrix[current_row] = matrix[current_row].map(function(c){ return c.divide(leader)});
                log("Divide row "+(current_row+1)+" by \\("+leader+"\\), so that the first non-zero entry is \\(1\\).",true, {determinant_scale:leader.reciprocal()});
            }

            // subtract multiples of this row from every other row so they all have a zero in this column
            var sub = function(a,b){ return a.subtract(b); };
            var add = function(a,b){ return a.add(b); };
            for(var row=current_row+1;row<rows;row++) {
                if(row!=current_row && !matrix[row][leader_column].is_zero()) {
                    var scale = matrix[row][leader_column];
                    var op = sub;
                    if(scale.n<0) {
                        scale = new Fraction({n:-scale.n,d:scale.d});
                        op = add;
                    }
                    matrix[row] = matrix[row].map(function(c,i) { 
                        var res = op(c,matrix[current_row][i].multiply(scale));
                        return res;
                    });
                    var mop = op==sub ? "Subtract" : "Add";
                    var mverb = op==sub ? "from" : "to";
                    log(mop+" "+(scale.is_one() ? "" : "\\("+scale+"\\) times ")+"row "+(current_row+1)+" "+mverb+" row "+(row+1)+".");
                }
            }
            current_row += 1;
        }
    }
    if(operations.length>0) {
        log("The matrix is now in row echelon form.",false);
    }
    return {
        matrix: matrix,
        operations: operations
    };
}
extension.row_echelon_form = wrap_fraction_matrix(row_echelon_form,true);

var reduced_row_echelon_form = function(matrix) {
    /** Put a matrix representing a system of equations in reduced row-echelon form.
     * Can:
     * * Swap two rows
     * * Multiply a row by a scalar
     * * Subtract a multiple of one row from another
     * As well as being in row-echelon form, the matrix has the property that the first non-zero entry in each row is also the only non-zero entry in its column.
     * Works over the rationals: input is a matrix of objects {n: numerator,d: denominator}.
     * Output is an object {matrix, operations}, where operations is a list of descriptions of each step of the process, of the form {message: string, matrix: the state of the matrix after the operation}.
     */
    matrix = matrix.map(function(r){return r.slice()});
    var res = row_echelon_form(matrix);
    matrix = res.matrix;
    var operations = res.operations.slice();

    var rows = matrix.length;
    var columns = matrix[0].length;
    matrix.rows = rows;
    matrix.columns = columns;

    var log = logger(operations,matrix);

    var sub = function(a,b){ return a.subtract(b); };
    var add = function(a,b){ return a.add(b); };

    for(var row=0;row<rows;row++) {
        for(var column=0;column<columns && matrix[row][column].is_zero();column++) {}
        
        if(column==columns) {
            continue;
        }
        for(var vrow = 0;vrow<rows;vrow++) {
            if(vrow!=row && !matrix[vrow][column].is_zero()) {
                
                var scale = matrix[vrow][column];
                if(!scale.is_zero()) {
                    var op = sub;
                    if(scale.n<0) {
                        op = add;
                        scale = new Fraction({n:-scale.n, d:scale.d});
                    }
                    matrix[vrow] = matrix[vrow].map(function(c,i) { 
                        return op(c,matrix[row][i].multiply(scale));
                    });

                    var mop = op==sub ? "subtract" : "add";
                    var mverb = op==sub ? "from" : "to";
                    log("We want a zero in column "+(column+1)+" of row "+(vrow+1)+": "+mop+" "+(scale.is_one() ? "" : "\\("+scale+"\\) times ")+"row "+(row+1)+" "+mverb+" row "+(vrow+1)+".");
                }
            }
        }
    }
    if(operations.length>0) {
        log("The matrix is now in reduced row echelon form.",false);
    }
    return {
        matrix: matrix,
        operations: operations
    };
}
extension.reduced_row_echelon_form = wrap_fraction_matrix(reduced_row_echelon_form,true);

function rref_without_zero(matrix) {
    var rref = reduced_row_echelon_form(matrix).matrix;
    return rref.filter(function(row) { return !vectormath.is_zero(row); });
}

function rank(matrix) {
    return rref_without_zero(matrix).length;
}
extension.rank = function(matrix) {
    matrix = fraction_matrix(matrix);
    return rank(matrix);
}

function is_linearly_independent(vectors) {
    return rref_without_zero(vectors).length==vectors.length;
}
extension.is_linearly_independent = function(vectors) {
    vectors = fraction_matrix(vectors);
    return is_linearly_independent(vectors);
}

var adjoin = extension.adjoin = function(matrix,vector) {
    var o = [];
    for(var i=0;i<matrix.length;i++) {
        var row = matrix[i].slice();
        row.push(vector[i] || 0);
        o.push(row);
    }
    o.rows = matrix.rows;
    o.columns = matrix.columns+1;
}

/** Subset of the given vectors, with the given dimension.
 * Not always possible - if the vectors have length k, you can't have d>k. 
 * If the input list has dimension less than d, it can't be done.
 * Likewise with extra dependent vectors - if there aren't enough, it'll fail.
 * The vectors are processed in order, so if you want a random subset you should shuffle the list first.
 *
 * @param {Array.<vector>} vectors 
 * @param {Number} n - number of vectors to return
 * @param {Number} d - dimension of the set (the first d vectors will be linearly independent, and any others will be multiples of those.
 * @returns {Array.<vector>}
 */
function subset_with_dimension(vectors,n,d) {
    vectors = vectors.filter(function(v){ return !vectormath.is_zero(v); });
    var independent = [];
    var combos = [];
    for(var i=0; i<vectors.length && (independent.length<d || combos.length<n-d); i++) {
        var v = vectors[i];
        if(is_linearly_independent(independent.concat([v]))) {
            independent.push(v);
        } else {
            combos.push(v);
        }
    }
    if(independent.length<d || combos.length<n-d) {
        throw(new Error("Couldn't generate a subset of the required size and dimension"));
    }
    return independent.slice(0,d).concat(combos.slice(0,n-d));
}

extension.subset_with_dimension = function(vectors,n,d) {
    vectors = fraction_matrix(vectors);
    var subset = subset_with_dimension(vectors,n,d);
    return unfraction_matrix(subset);
}

/** Span of vectors in Z^n, with no element bigger than max
 */
function span(vectors,max) {
    var dim = vectors[0].length;
    var zero = [];
    for(var i=0;i<dim;i++) {
        zero.push(0);
    }
    var out = [zero];
    vectors.forEach(function(v) {
        var biggest = v.reduce(function(best,x){ return Math.max(best,Math.abs(x)); },0);
        var lim = vectors.length*max/biggest;
        var mults = [];
        for(var i=0;i<=lim;i++) {
            mults.push(vectormath.mul(i,v));
            mults.push(vectormath.mul(-i,v));
        }
        
        var nout = [];
        out.forEach(function(v2) {
            mults.forEach(function(m) {
                var s = vectormath.add(m,v2);
                if(!nout.find(function(v3){return vectormath.eq(v3,s)})) {
                    nout.push(s);
                }
            });
        });
        out = nout;
    })
    out = out.filter(function(v){ return v.every(function(x){return Math.abs(x)<=max}) });
    return out;
}
extension.span = span;

function as_sum_of_basis(basis,v) {
    basis.rows = basis.length;
    basis.columns = basis.rows>0 ? basis[0].length : 0;
    var matrix = matrixmath.transpose(basis);
    var augmented_matrix = matrix.map(function(row,i) {
        row = row.slice();
        row.push(v[i] || 0);
        return row;
    });
    augmented_matrix = fraction_matrix(augmented_matrix);
    augmented_matrix.rows = matrix.rows;
    augmented_matrix.columns = matrix.columns;
    var rref = reduced_row_echelon_form(augmented_matrix).matrix;
    rref = unfraction_matrix(rref);
    return rref.map(function(row){return row[matrix.columns]});
}
extension.as_sum_of_basis = as_sum_of_basis;

/** Is the given matrix in row echelon form?
 * If not, throws an error with an explanation why it isn't.
 */
var is_row_echelon_form = extension.is_row_echelon_form = function(matrix) {
    var leader = -1;
    var rows = matrix.length;
    var columns = matrix[0].length;
    for(var row=0;row<rows;row++) {
        for(var column=0;column<columns;column++) {
            var cell = matrix[row][column];
            if(column<=leader) {
                if(!cell.is_zero()) {
                    throw(new Error("The first non-zero entry in row "+(row+1)+" is not strictly to the right of the first non-zero entries in the rows above."));
                } 
            } else {
                leader = column;
                break;
            }
        }
    }
    return true;
}
extension.is_row_echelon_form = function(matrix) {
    matrix = fraction_matrix(matrix);
    return is_row_echelon_form(matrix);
}

/** Is the given matrix in row echelon form?
 * If not, throws an error with an explanation why it isn't.
 */
var is_reduced_row_echelon_form = extension.is_reduced_row_echelon_form = function(matrix) {
    is_row_echelon_form(matrix); // this will throw an error if the matrix is not in row echelon form

    for(var row=0;row<matrix.rows;row++) {
        for(var column=0;column<matrix.columns;column++) {
            var cell = matrix[row][column];
            if(!cell.is_zero()) {
                if(!cell.is_one()) {
                    throw(new Error("The first non-zero entry in row "+(row+1)+" is not 1."))
                }
                for(var vrow=0;vrow<matrix.rows;vrow++) {
                    if(vrow!=row && !matrix[vrow][column].is_zero()) {
                        throw(new Error("There is more than one non-zero value in column "+(column+1)+"."));
                    }
                }
                break;
            }
        }
    }
    return true;
}
extension.is_reduced_row_echelon_form = function(matrix) {
    matrix = fraction_matrix(matrix);
    return is_reduced_row_echelon_form(matrix);
}

var scope = extension.scope;
var jme = Numbas.jme;
var funcObj = jme.funcObj;
var TNum = jme.types.TNum;
var TList = jme.types.TList;
var TVector = jme.types.TVector;
var TMatrix = jme.types.TMatrix;
var TString = jme.types.TString;
var THTML = jme.types.THTML;
var TBool = jme.types.TBool;

function element(name,attrs,content) {
    var e = document.createElement(name);
    for(var k in attrs) {
        e.setAttribute(k,attrs[k]);
    }
    if(content!==undefined) {
        e.innerHTML = content;
    }
    return e;
}

scope.addFunction(new funcObj('row_echelon_form',[TMatrix],TMatrix,function(matrix) {
    matrix = fraction_matrix(matrix);
    var res = row_echelon_form(matrix);
    var omatrix = unfraction_matrix(res.matrix);
    return omatrix;
}, {random: false}));

function show_steps(steps,describe_determinant) {
    var ops = element('ul');
    if(describe_determinant) {
        var li = element('li',{},'Let the determinant of the matrix be \\(d\\)');
    }
    var d = new Fraction(1);
    steps.map(function(o) {
        var li = element('li');
        li.appendChild(element('span',{},o.message));
        if(o.matrix) {
            var m = new TMatrix(unfraction_matrix(o.matrix));
            li.appendChild(element('span',{},'\\['+jme.display.texify({tok:m},{fractionnumbers:true})+'\\]'));
            if(describe_determinant && o.determinant_scale) {
                d = d.multiply(o.determinant_scale);
                li.appendChild(element('p',{},'The determinant of this matrix is \\('+(Math.abs(d.n)==d.d ? d.n<0 ? '-' : '' : d.toLaTeX())+' d\\).'));
            }
        }
        ops.appendChild(li);
    });
    return new THTML(ops);
}

scope.addFunction(new funcObj('row_echelon_form_display',[TMatrix],THTML,function(matrix) {
    matrix = fraction_matrix(matrix);
    var res = row_echelon_form(matrix);
    return show_steps(res.operations);
},{unwrapValues:true, random: false}));

scope.addFunction(new funcObj('row_echelon_form_display_determinant',[TMatrix],THTML,function(matrix) {
    matrix = fraction_matrix(matrix);
    var res = row_echelon_form(matrix);
    return show_steps(res.operations,true);
},{unwrapValues:true, random: false}));

scope.addFunction(new funcObj('is_row_echelon_form',[TMatrix],TBool,function(matrix) {
    matrix = fraction_matrix(matrix);
    try {
        return is_row_echelon_form(matrix);
    } catch(e) {
        return false;
    }
}, {random: false}));

scope.addFunction(new funcObj('describe_why_row_echelon_form',[TMatrix],TString,function(matrix) {
    matrix = fraction_matrix(matrix);
    try {
        is_row_echelon_form(matrix);
        return "The matrix is in row echelon form.";
    } catch(e) {
        return e.message;
    }
}, {random: false}));

scope.addFunction(new funcObj('reduced_row_echelon_form',[TMatrix],TMatrix,function(matrix) {
    matrix = fraction_matrix(matrix);
    var res = reduced_row_echelon_form(matrix);
    var omatrix = unfraction_matrix(res.matrix);
    return omatrix;
}, {random: false}));

scope.addFunction(new funcObj('reduced_row_echelon_form_display',[TMatrix],THTML,function(matrix) {
    matrix = fraction_matrix(matrix);
    var res = reduced_row_echelon_form(matrix);
    return show_steps(res.operations);
},{unwrapValues:true, random: false}));

scope.addFunction(new funcObj('is_reduced_row_echelon_form',[TMatrix],TBool,function(matrix) {
    matrix = fraction_matrix(matrix);
    try {
        return is_reduced_row_echelon_form(matrix);
    } catch(e) {
        return false;
    }
}, {random: false}));

scope.addFunction(new funcObj('describe_why_reduced_row_echelon_form',[TMatrix],TString,function(matrix) {
    matrix = fraction_matrix(matrix);
    try {
        is_reduced_row_echelon_form(matrix);
        return "The matrix is in reduced row echelon form.";
    } catch(e) {
        return e.message;
    }
}, {random: false}));

scope.addFunction(new funcObj('rank',[TMatrix],TNum,extension.rank, {random: false}));

scope.addFunction(new funcObj('is_linearly_independent',[TList],TBool,extension.is_linearly_independent,{unwrapValues:true, random: false}));

scope.addFunction(new funcObj('adjoin',[TMatrix,TVector],TMatrix,adjoin,{unwrapValues:true, random: false}));

scope.addFunction(new funcObj('subset_with_dimension',[TList,TNum,TNum],TList,function(vectors,n,d) {
    var out = extension.subset_with_dimension(vectors,n,d);
    return out.map(function(v){return new TVector(v); });
},{unwrapValues:true, random: false}));

scope.addFunction(new funcObj('as_sum_of_basis',[TList,TVector],TList,extension.as_sum_of_basis,{unwrapValues:true, random: false}));

});