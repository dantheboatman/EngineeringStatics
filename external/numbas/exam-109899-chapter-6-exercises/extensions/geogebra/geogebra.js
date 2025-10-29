Numbas.addExtension('geogebra',['jme','math','jme-display'],function(extension) {
    window.geogebraIdAcc = window.geogebraIdAcc || 0;

    var jme = Numbas.jme;
    var sig = jme.signature;

	var types = jme.types;
	var funcObj = jme.funcObj;
    var TString = types.TString;
    var TVector = types.TVector;
    var TNum = types.TNum;
    var TDict = types.TDict;
    var TBool = types.TBool;
    var THTML = types.THTML;

    var delay = 10;
    var containerPromise = Promise.withResolvers();
	Numbas.util.document_ready(function() {
        const container = document.createElement('div');
        container.setAttribute('id','numbasgeogebracontainer');
        container.setAttribute('class','invisible');
        document.body.appendChild(container);

        containerPromise.resolve(container);
	});

    var TGGBApplet = function(data) {
        var a = this;
        this.app = null;
        this.id = null;
        this.value = data;
        this.promise = data.promise;
        this.container = data.element;
        this.cache = {};
        
        this.promise.then(function(d) {
            a.app = d.app;
            a.id = d.id;
        });

    }
    TGGBApplet.prototype = {
        cache_set: function(section, name, value) {
            if(this.cache[section]===undefined) {
                this.cache[section] = {};
            }
            this.cache[section][name] = value;
        },
        cache_get: function(section, name) {
            return this.cache[section] ? this.cache[section][name] : undefined;
        }
    }
    jme.registerType(
        TGGBApplet,
        'ggbapplet',
        {
            'html': function(v) {
                return new jme.types.THTML(v.container);
            }
        }
    );
    jme.display.registerType(
        TGGBApplet,
        {
            tex: function(v) {
                return '\\text{GeoGebra applet}';
            },
            jme: function(v) {
                if(v.tok._to_jme) {
                    throw(new Numbas.Error("A GeoGebra applet refers to itself in its own definition."));
                }
                v.tok._to_jme = true;
                var data = v.tok.value.suspendData();
                var options = jme.wrapValue(data.options);
                var replacements = jme.wrapValue(data.replacements);
                var parts = jme.wrapValue(data.parts);
                var base64 = jme.wrapValue(data.base64);
                var cache = {};
                Object.keys(v.tok.cache).forEach(function(section) {
                    cache[section] = new TDict(v.tok.cache[section]);
                });
                var f = new jme.types.TFunc('resume_geogebra_applet');
                var tree = {
                    tok: f,
                    args: [
                        {tok: options},
                        {tok: replacements},
                        {tok: parts},
                        {tok: base64},
                        {tok: new TDict(cache)}
                    ]
                };
                var s = jme.display.treeToJME(tree);
                v.tok._to_jme = false;
                return s;
            },
            displayString: function(v) {
                return 'GeoGebra applet';
            }
        }
    );

    Numbas.util.equalityTests.ggbapplet = function(a,b) {
        return a.container == b.container;
    };

    var injectedDeployScript = false;

    /** Load the GeoGebra code from geogebra.org.
     *
     * @returns {Promise} - resolves to the `GGBApplet` constructor.
     */
    var loadGGB = new Promise(function(resolve,reject) {
        if(window.GGBApplet) {
            resolve(GGBApplet);
        } else {
            if(!injectedDeployScript) {
                var s = document.createElement('script');
                s.setAttribute('type','text/javascript');
                s.setAttribute('src','https://cdn.geogebra.org/apps/deployggb.js');
                document.head.appendChild(s);
                injectedDeployScript = true;
            }
            var int = setInterval(function() {
                if(window.GGBApplet) {
                    clearInterval(int);
                    resolve(GGBApplet);
                }
            },delay);
        }
    });

    /** Inject a GeoGebra applet in the document. Creates a `<div>` element to contain it.
     *
     * @param {Object} options - options for `GGBApplet`.
     * @returns {Promise} - resolves to an object `{app, el}` - `app` is the GGBApplet object, `el` is the container element.
     */
    var injectApplet = function(options) {
        return containerPromise.promise.then((container) => {
            return new Promise(function(resolve,reject) {
                var applet;
                var element = document.createElement('div');
                container.appendChild(element);
                options.id = 'numbasGGBApplet'+(window.geogebraIdAcc++);
                options.appletOnLoad = function(api) {
                    resolve({app: api, element: element, id:options.id});
                };
                applet = new GGBApplet(options, true);
                applet.inject(element, 'preferHTML5');
            });
        });
    }

    /** Returns a promise which resolves when the given app has finished loading.
     *
     * @param {Object} d
     * @returns {Promise}
     */
    var constructionFinished = function(d) {
        return new Promise(function(resolve,reject) {
            setTimeout(function() {
                if(!d.app.exists) {
                    reject("app.exists does not exist");
                }
                // Resize the app according to the size that the wrapper element has been given.
                // GeoGebra seems to set the size of the wrapper to match the applet, but as of 2022-03-17, the inner applet gets height 0 when loaded from a file.
                var box = d.element.getBoundingClientRect();
                d.app.setSize(box.width,box.height);
                resolve(d);
            },delay);
        });
    }

    var replacement_properties = {
        'caption': 'setCaption',
        'color': 'setColor',
        'visible': 'setVisible',
        'label_visible': 'setLabelVisible',
        'label_style': 'setLabelStyle',
        'fixed': 'setFixed',
        'trace': 'setTrace',
        'rename': 'renameObject',
        'layer': 'setLayer',
        'line_style': 'setLineStyle',
        'line_thickness': 'setLineThickness',
        'point_style': 'setPointStyle',
        'point_size': 'setPointSize',
        'display_style': 'setDisplayStyle',
        'filling': 'setFilling'
    };

    /** Unescape braces in a string
     * 
     * @param {string} string
     * @returns {string}
     */
    function unescape_braces(s) {
        return (s+'').replace(/\\\{/g,'{').replace(/\\\}/g,'}');
    }

    /** Convert a CSS color literal to red, green, blue.
     * 
     * @param {string} color
     * @returns {Array}
     */
    function parse_color(color) {
        var el = document.createElement('geogebra-color-placeholder');
        document.body.appendChild(el);
        el.style['color'] = color;
        var cs = getComputedStyle(el);
        var m = cs['color'].match(/rgb\((\d+), (\d+), (\d+)\)/);
        return m.slice(1,4);
    }

    function replace_geogebra_object(app,name,definition) {
        try {
            definition = tokToGeoGebra(definition);
        } catch(e) {
            reject("Error in replacement of GeoGebra object "+name+" - "+e.message);
        }
        var cmd = unescape_braces(name+' = '+definition);
        var ok = app.evalCommand(cmd);
        return ok;
    }

    /** Evaluate a list of object replacements on an app
     *
     * @param {Array.<Array>} replacements - an array of replacements in the form `[object name, command]`
     * @returns {function} - a function which takes an object from {@link createGeogebraApplet} and returns a `Promise` resolving to the same object after variables have been replaced.
     */
    function eval_replacements(replacements) {
        return function(d) {
            return new Promise(function(resolve,reject) {
                var app = d.app;
                replacements.forEach(function(r) {
                    if(!r.name) {
                        reject("This GeoGebra object replacement doesn't specify the name of the object.");
                    }
                    var name = jme.unwrapValue(r.name);
                    if(r.definition) {
                        var ok = replace_geogebra_object(app,name,r.definition);
                        if(!ok) {
                            // try unfixing the object - if the command succeeds this time, the object was just fixed and the command is fine
                            app.setFixed(name,false);
                            if(replace_geogebra_object(app,name,r.definition)) {
                                app.setFixed(name,true);
                            } else {
                                reject("GeoGebra command '"+name+' = '+tokToGeoGebra(r.definition)+"' failed.")
                            }
                        }
                    }
                    Object.keys(r).forEach(function(key) {
                        var v = r[key];
                        switch(key) {
                            case 'name':
                            case 'definition':
                                break;
                            case 'color':
                                var v = jme.unwrapValue(r[key]);
                                var color = parse_color(v);
                                app.setColor(name,color[0],color[1],color[2]);
                                break;
                            default:
                                if(!key in replacement_properties) {
                                    return;
                                }
                                var v = jme.unwrapValue(r[key]);
                                app[replacement_properties[key]](name,v);
                        }
                    });
                });
                resolve(d);
            });
        }
    }

    /* Link GeoGebra exercises to Numbas question parts.
     * When anything about the construction changes, the corresponding parts are marked as dirty. Their marking method is replaced with one which applies the credit from the GeoGebra exercise.
     *
     * @param {Object} parts - a dictionary of the form `{toolName: partID}` specifying which tools to link to which parts.
     * @returns {function} - a function which takes an object from {@link createGeogebraApplet} and resolves to the same object after tools have been linked.
     */
    function link_exercises_to_parts(parts) {
      return function(d) {

        return new Promise(function(resolve,reject) {
          var app = d.app;

          // link geogebra tools to part marking (not sure if this still works, or even if geogebra still does exercises)
          var tools = [];
          if(app.isExercise()) {
            function make_marker(toolName) {
              return function() {
                var results = app.getExerciseResult();
                var result = results[toolName];
                this.answered = true;
                this.setCredit(result.fraction,result.hint);
              }
            }

            var results = app.getExerciseResult();
            for(var toolName in parts) {
              var part = parts[toolName];

              if(results[toolName] && part.type=='extension') {
                tools.push(toolName);
                part.mark = make_marker(toolName);
                part.validate = function() {
                  return true;
                }
                part.createSuspendData = function() {
                  return {
                    base64: app.getBase64()
                  }
                }

                var data = part.loadSuspendData();
                if(data) {
                  var base64 = data.base64;
                  if(base64) {
                    result.promise.then(function(d) {
                      d.app.setBase64(base64);
                      var p = part;
                      while(p.parentPart) {
                        p = p.parentPart;
                      }
                      p.submit();
                    });
                    break;
                  }
                }
              }
            }

            var check_debounce = Numbas.util.debounce(100);
            function check() {
              check_debounce(function() {
                tools.forEach(function(tool) {
                  parts[tool].setDirty(true);
                });
              });
            }
            app.registerAddListener(check);
            app.registerUpdateListener(check);
            app.registerRemoveListener(check);
            app.registerStoreUndoListener(check);
          }


          resolve(d);
        });
      }
    }
  
    /** Link GeoGebra object values to part answers.
     * When the construction is updated, the corresponding parts's answer fields are filled with the values of the given objects.
     * 
     * @param {Object} - a dictionary of the form `{object name: part path}`, specfiying which objects feed to which parts.
     * @see geoGebraToTok
     * @see set_part_answer
     */
    function link_objects_to_parts(parts) {
        return function(d) {
            return new Promise(function(resolve,reject) {
                var app = d.app;
                var objects = [];

                // link geogebra object values to part answers
                for(var name in parts) {
                    if(app.exists(name)) {
                        objects.push(name);
                    }
                }
                objects.forEach(function(name) {
                    var part = parts[name];
                    var html_part = part;
                    while(html_part.parentPart) {
                        html_part = html_part.parentPart;
                    }
                    html_part.signals.on('HTMLAttached',function() {
                        html_part.display.html.addEventListener('focusout',function(e) {
                            setTimeout(function() {
                                var focused = document.activeElement;
                                var answer_tok = get_part_answer(part,app,name);
                                if(answer_tok!==undefined) {
                                    var current_tok = geoGebraToTok(app,name);
                                    if(!Numbas.util.eq(answer_tok,current_tok)) {
                                        replace_geogebra_object(app,name,answer_tok);
                                        if(focused) {
                                            focused.focus();
                                        }
                                    }
                                }
                            },1);
                        })
                    });
                });
                var check_debounce = Numbas.util.debounce(100);
                function check() {
                    check_debounce(function() {
                        objects.forEach(function(name) {
                            var part = parts[name];
                            set_part_answer(part,app,name);
                        });
                    });
                }
                app.registerAddListener(check);
                app.registerUpdateListener(check);
                app.registerRemoveListener(check);
                app.registerStoreUndoListener(check);
                check();

                resolve(d);
            });
      }
    }

    /** Get the student's answer from a part and update a corresponding GeoGebra object.
     *
     * @param {Numbas.parts.Part} part
     * @param {GGBApplet} app
     * @param {string} name
     */
    function get_part_answer(part,app,name) {
        var dirty = part.isDirty;
        var stagedAnswer = part.stagedAnswer;
        var os = part.studentAnswer;
        part.setStudentAnswer();
        var raw_answer = part.rawStudentAnswerAsJME();
        var answer;
        (function() {
            try {
                var result = part.mark_answer(raw_answer,part.getScope());
            } catch(e) {
                return;
            }
            if(!result || !result.values || !result.state_valid['interpreted_answer']) {
                return;
            }
            answer = result.values['interpreted_answer'];
            if(answer.type=='matrix') {
                answer = new TVector([answer.value[0][0], answer.value[1][0]]);
            }
        })();
        part.storeAnswer(os);
        part.setStudentAnswer();
        part.storeAnswer(stagedAnswer);
        part.setDirty(dirty);
        return answer;
    }
  
    /** Set the student's answer to a part with the value of a GeoGebra object.
     * 
     * @param {Numbas.parts.Part} part
     * @param {GGBApplet} app
     * @param {string} name - the name of the GeoGebra object
     */
    function set_part_answer(part,app,name) {
        if(!app.exists(name)) {
            return;
        }
        var tok = geoGebraToTok(app,name);
        function assert_type(type) {
            if(!jme.isType(tok,type)) {
                part.error("The answer for this part should be of type "+type+", but the GeoGebra object "+name+" is of type "+tok.type);
            }
            return jme.castToType(tok,type);
        }
        var answer;
        switch(part.type) {
            case 'numberentry':
                var val = assert_type('number');
                answer = Numbas.math.niceNumber(val.value);
                break;
            case 'matrix':
                if(tok.type=='vector') {
                    var m = tok.value.map(function(c){ return [c]; });
                    m.rows = tok.value.length;
                    m.columns = 1;
                    tok = new types.TMatrix(m);
                }
                var val = assert_type('matrix');
                answer = val.value.map(function(r) {
                    return r.map(function(c){
                        return Numbas.math.niceNumber(c);
                    });
                })
                break;
            case 'jme':
                var val = assert_type('string');
                answer = val.value.replace(/(?:^\w.*?(?: =|:))? (.*)/,'$1');
                break;
            case 'patternmatch':
                var val = assert_type('string');
                answer = val.value;
                break;
        }
        if(!Numbas.util.objects_equal(answer,part.stagedAnswer)) {
            part.storeAnswer(answer);
        }
        part.display.restoreAnswer(part.stagedAnswer);
    }

    function clean_material_id(material_id) {
        var m;
        if(m=material_id.match(/(?:(?:beta.)?geogebra.org\/(?:[a-zA-Z0-9]+)|ggbm.at)\/([a-zA-Z0-9]+)$/)) {
            material_id = m[1];
        }
        return material_id;
    }

    function GeogebraApplet(options,replacements,parts,question) {
        var ggbapp = this;
        // create a container element, which we'll return
        // when the applet has been loaded, we'll attach it to the container element
        var element = this.element = document.createElement('div');
        element.className = 'numbas-geogebra-applet numbas-geogebra-loading';
        element.innerHTML = 'GeoGebra applet loading...';
        element.style['text-align'] = 'start';

        var promise = new Promise(function(resolve,reject) {
            var interval = setInterval(function() {
                if(element.parentNode) {
                    clearInterval(interval);
                    resolve();
                }
            },delay);
        });

        options = this.options = options || {};
        replacements = this.replacements = replacements || [];
        parts = this.parts = parts || {};

        promise = promise
            .then(function() {
                return loadGGB;
            })
            .then(function() { 
                return injectApplet(options); 
            })
            .then(constructionFinished)
            .then(eval_replacements(replacements))
        ;
        this.promise = promise;
        if(parts && question) {
            question.signals.on('partsGenerated',function() {
                Object.keys(parts).forEach(function(key) {
                    var path = parts[key];
                    var part = question.getPart(path);
                    if(!part) {
                        throw(new Numbas.Error("The GeoGebra object "+key+" is supposed to link to the part with path "+parts[key]+", but that doesn't exist."));
                    }
                    parts[key] = part;
                });
                promise
                    .then(link_exercises_to_parts(parts))
                    .then(link_objects_to_parts(parts))
                ;
            });
        }

        if(!options.material_id) {
            promise.then(function(d) {
                var app = ggbapp.app = d.app;
                app.showToolBar(false);
                app.setPerspective("G");
                app.showMenuBar(false);
                app.showAlgebraInput(false);
                app.enableRightClick(false);
                app.setGridVisible(true);
                app.setUndoPoint();
            });
        }

        promise.then(function(d) {
            element.innerHTML = '';
            element.className = 'numbas-geogebra-applet numbas-geogebra-loaded';
            element.appendChild(d.element);
        })
        .catch(function(e) {
            var msg = "Problem encountered when creating GeoGebra applet: "+e;
            element.className = 'numbas-geogebra-applet numbas-geogebra-error';
            element.innerHTML = msg;
            throw(new Numbas.Error(msg));
        });

        this.used_to_mark_parts = {};
    }
    GeogebraApplet.prototype = {
        used_to_mark_part: function(path) {
            this.used_to_mark_parts[path] = true;
        },
        suspendData: function() {
            var options = {};
            for(var name in this.options) {
                if(typeof(this.options[name]) != 'function') {
                    options[name] = this.options[name];
                }
            }
            var parts = {};
            for(var name in this.parts) {
                parts[name] = this.parts[name].path;
            }
            var data = {
                options: options,
                replacements: this.replacements,
                parts: parts
            }
            if(this.app) {
                data.base64 = this.app.getBase64();
            }
            return data;
        }
    }

    /** Create a GeoGebra applet with the given options
     *
     * @param {Object} options - Options for `GGBApplet`.
     * @param {Array} replacements - Object replacements to make.
     * @param {Object} parts - Links between GeoGebra objects or tools and question parts.
     * @param {Numbas.Question} question - The question the app is embedded in.
     * @returns {Promise} - Resolves to `{app, element, id}`, where `app` is the `GGBApplet` object, `element` is a container element, and `id` is the ID of the app.
     */
    createGeogebraApplet = extension.createGeogebraApplet = function(options,replacements,parts,question) {
        return new GeogebraApplet(options,replacements,parts,question);
    }

    var unwrap = jme.unwrapValue;

    /** Convert a JME token to a GeoGebra command
     *
     * @param {Numbas.jme.token}
     * @returns {string}
     */
    var tokToGeoGebra = extension.tokToGeoGebra = function(tok) {
        var known_types = ['vector','list','number','string'];
        for(var i=0;i<known_types.length;i++) {
            if(jme.isType(tok,known_types[i])) {
                tok = jme.castToType(tok,known_types[i]);
                break;
            }
        }
        switch(tok.type) {
            case 'string':
                definition = tok.value;
                break;
            case 'number':
                definition = Numbas.math.niceNumber(tok.value);
                break;
            case 'vector':
                var vec = tok.value.map(Numbas.math.niceNumber);
                definition = '('+vec[0]+','+vec[1]+')';
                break;
            case 'list':
                var list = tok.value.map(tokToGeoGebra);
                definition = '{'+list.join(',') +'}';
                break;
            default:
                throw(new Error("Replaced value should be a number, string, vector or list, instead it's a "+tok.type));
        }
        return definition;
    }
  
    /** Get the value of an object from a GeoGebra applet and convert it to a JME token.
     *
     * Points are converted to vectors, numeric values are converted to numbers, and everything else just returns the value string.
     *
     * @param {GGBApplet} app
     * @param {string} name - the name of the object
     * @returns {Numbas.jme.token}
     */
  	var geoGebraToTok = extension.geoGebraToTok = function(app,name) {
      	if(!app.exists(name)) {
       	    return new types.TNothing();
        }
      	var type = app.getObjectType(name);
        switch(type) {
            case 'point':
                var x = app.getXcoord(name);
                var y = app.getYcoord(name);
                return new TVector([x,y]);
            case 'numeric':
                var v = app.getValue(name);
                return new TNum(v);
            case 'boolean':
                var v = app.getValue(name);
                return new TBool(!!v);
            default:
                var s = app.getValueString(name);
                return new TString(s);
        }
    }

    /** Unwrap a list or dictionary of object replacements to GeoGebra commands
     *
     * @param {Numbas.jme.token} replacements - either a dictionary mapping object names to values, or a list of pairs of the form `[name, value]`.
     * @returns {Array} - a list of paris of the form `[name, GeoGebra command]`.
     */
    function jme_unwrap_replacements(replacements) {
        if(jme.isType(replacements,'list')) {
            return replacements.value.map(function(v) {
                var def;
                if(jme.isType(v,'dict')) {
                    v = jme.castToType(v,'dict');
                    def = v.value;
                } else if(jme.isType(v,'list')) {
                    v = jme.castToType(v,'list');
                    if(v.value[0].type!='string') {
                        throw(new Error("Error in replacement - first element should be the name of an object; instead it's a "+v.value[0].type));
                    }
                    var name = v.value[0].value;
                    def = {
                        name: v.value[0],
                        definition: v.value[1]
                    };
                } else {
                    throw(new Error("GeoGebra replacement <code>"+jme.display.treeToJME({tok:v})+"</code> is not an array - it should be an array of the form <code>[name,definition]</code>."));
                }
                return def;
            });
        } else if(jme.isType(replacements,'dict')) {
            var v = jme.castToType(replacements,'dict');
            return Object.keys(replacements.value).map(function(name) {
                var def = v.value[name];
                if(jme.isType(def,'dict')) {
                    def = def.value;
                } else {
                    def = {
                        definition: def
                    };
                }
                def.name = new TString(name);
                return def;
            });
        }
    }

    var sig_ggbapplet = sig.sequence(
        sig.or(
            sig.label('material_id', sig.type('string')),
            sig.sequence(
                sig.label('width',sig.type('number')),
                sig.label('height',sig.type('number'))
            )
        ),
        sig.optional(
            sig.or(
                sig.type('list'),
                sig.type('dict')
            )
        ),
        sig.optional(
            sig.type('list')
        )
    );

    /** Load a GeoGebra applet from a geogebra.org material ID, or a blank applet with the given width and height.
     */
    extension.scope.addFunction(new funcObj('geogebra_applet', [sig_ggbapplet], TGGBApplet, null, {
        random: false,
        evaluate: function(args, scope) {
            var match = sig_ggbapplet(args);

            var options = {};
            var i = 0;
            if(match[0].name=='material_id') {
                var material_id = clean_material_id(args[0].value);
                if(material_id) {
                    options.material_id = material_id;
                }
                i = 1;
            } else if(match[0].name == 'width') {
                options.width = args[0].value;
                options.height = args[1].value;
                i = 2;
            }

            var replacements = [];
            if(!match[i].missing) {
                replacements = jme_unwrap_replacements(args[i]);
                i += 1;
            }

            var parts = {};
            if(!match[i].missing) {
                var partrefs = unwrap(args[i]);
                partrefs.forEach(function(d) {
                    parts[d[0]] = d[1];
                });
            }
            return new TGGBApplet(createGeogebraApplet(options,replacements,parts,scope.question));
        }
    },{unwrapValues:true}));

    var sig_ggbbase64 = sig.sequence(
        sig.type('string'),
        sig.type('number'),
        sig.type('number'),
        sig.optional(
            sig.or(
                sig.type('list'),
                sig.type('dict')
            )
        ),
        sig.optional(
            sig.type('list')
        )
    );

    /** Load a GeoGebra applet from a base-64 string.
     */
    extension.scope.addFunction(new funcObj('geogebra_base64',[sig_ggbbase64],TGGBApplet,null,{
        random: false,
        evaluate: function(args,scope) {
            var match = sig_ggbbase64(args);

            var options = {};
            options.ggbBase64 = args[0].value;
            options.width = args[1].value;
            options.height = args[2].value;

            var replacements = [];
            if(!match[3].missing) {
                replacements = jme_unwrap_replacements(args[3]);
            }

            var parts = {};
            if(!match[4].missing) {
                var partrefs = unwrap(args[4]);
                partrefs.forEach(function(d) {
                    parts[d[0]] = d[1];
                });
            }
            return new TGGBApplet(createGeogebraApplet(options,replacements,parts,scope.question));
        }
    }));

    var sig_ggbfilename = sig.sequence(
        sig.type('string'),
        sig.optional(
            sig.or(
                sig.type('list'),
                sig.type('dict')
            )
        ),
        sig.optional(
            sig.type('list')
        )
    );

    /** Load a GeoGebra applet from a file. The filename can be relative to `resources/question-resources/`, or absolute.
     */
    extension.scope.addFunction(new funcObj('geogebra_file',[sig_ggbfilename],TGGBApplet, null, {
        random: false,
        evaluate: function(args,scope) {
            var match = sig_ggbfilename(args);

            var filename = args[0].value;
            if(!filename.match(/\//)) {
                filename = 'resources/question-resources/'+filename;
            }
            var options = {
                filename: filename
            };

            var replacements = [];
            if(!match[1].missing) {
                replacements = jme_unwrap_replacements(args[1]);
            }

            var parts = {};
            if(!match[2].missing) {
                var partrefs = unwrap(args[2]);
                partrefs.forEach(function(d) {
                    parts[d[0]] = d[1];
                });
            }
            return new TGGBApplet(createGeogebraApplet(options,replacements,parts,scope.question));
        }
    }));

    extension.scope.addFunction(new funcObj('resume_geogebra_applet',['dict','list of dict','dict','string','[dict]'],TGGBApplet, null, {
        random: false,
        evaluate: function(args,scope) {
            var q = scope.question;
            var options = jme.unwrapValue(args[0]);
            var replacements = args[1].value.map(function(d) { return d.value; });
            var parts = jme.unwrapValue(args[2]);
            var base64 = jme.unwrapValue(args[3]);
            var dcache = args[4];
            var applet = createGeogebraApplet(options,replacements,parts,q);
            var paths = {};
            for(var name in parts) {
                paths[parts[name]] = true;
            }
            q.signals.on('partsResumed',function() {
                applet.promise.then(function(d) {
                    setTimeout(function() {
                    if(base64) {
                        d.app.setBase64(base64);
                    }
                    for(var path in applet.used_to_mark_parts) {
                        paths[path] = true;
                    }

                    setTimeout(function() {
                    for(var path in paths) {
                        var p = q.getPart(path);
                        if(p.answered) {
                            p.submit();
                        }
                    }
                    },50);
                    },50);
                });
            });
            var tapp = new TGGBApplet(applet);
            Object.keys(dcache.value).forEach(function(section) {
                var section_cache = {};
                Object.keys(dcache.value[section].value).forEach(function(name) {
                    section_cache[name] = dcache.value[section].value[name];
                });
                tapp.cache[section] = section_cache;
            });
            return tapp;
        }
    }));

    function app_required(section, fn) {
        return function(args,scope) {
            var tapp = args[0];
            var app = tapp.app;
            var name = args[1].value;
            if(!app) {
                cached = tapp.cache_get(section,name);
                if(cached!==undefined) {
                    return cached;
                }
                var ggb = args[0].value;
                var part_path = scope.getVariable('part_path');
                if(part_path) {
                    ggb.used_to_mark_part(jme.unwrapValue(part_path));
                }
                throw(new Numbas.Error("You can not access a GeoGebra app before it has loaded."));
            }
            var value = fn(args,scope);
            tapp.cache_set(section,name,value);
            return value;
        };
    }
      
    /** Get the value of an object in a GeoGebra applet.
     */
    extension.scope.addFunction(new funcObj('value',[TGGBApplet,TString],'?',null,{
        random: false,
        evaluate: app_required('value',function(args,scope) {
            var app = args[0].app;
            var name = args[1].value;
            return geoGebraToTok(app,name);
        })
    }));

    /** Get the LaTeX string corresponding to an object in a GeoGebra applet.
     */
    extension.scope.addFunction(new funcObj('latex',[TGGBApplet,TString],'?',null,{
        random: false,
        evaluate: app_required('latex',function(args,scope) {
            var app = args[0].app;
            var name = args[1].value;
            var s = new TString(app.getLaTeXString(name));
            s.latex = true;
            return s;
        })
    }));

    var object_property_getters = [
        ['x', 'getXcoord', TNum],
        ['y', 'getYcoord', TNum],
        ['z', 'getZcoord', TNum],
        ['color', 'getColor', TString],
        ['visible', 'getVisible', TBool],
        ['value_string', 'getValueString', TString],
        ['definition_string', 'getDefinitionString', TString],
        ['command_string', 'getCommandString', TString],
        ['type', 'getObjectType', TString],
        ['exists', 'exists', TBool],
        ['defined', 'isDefined', TBool],
        ['layer', 'getLayer', TNum],
        ['line_style', 'getLineStyle', TNum],
        ['line_thickness', 'getLineThickness', TNum],
        ['point_style', 'getPointStyle', TNum],
        ['point_size', 'getPointSize', TNum],
        ['caption', 'getCaption', TString],
        ['label_style', 'getLabelStyle', TNum]
    ];

    object_property_getters.forEach(function(def) {
        var jme_name = def[0];
        var ggb_name = def[1];
        var outtype = def[2];
        extension.scope.addFunction(new funcObj(jme_name, [TGGBApplet,TString],outtype,null,{
            random: false,
            evaluate: app_required(jme_name, function(args,scope) {
                var app = args[0].app;
                var name = args[1].value;
                return new outtype(app[ggb_name](name));
            })
        }));
    });

});
