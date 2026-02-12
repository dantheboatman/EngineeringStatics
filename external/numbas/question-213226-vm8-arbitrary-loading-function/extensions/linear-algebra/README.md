# Linear algebra extension for Numbas

This extension provides a few functions which make working with linear algebra easier.

The three kinds of permitted row operation are:

* Swap two rows.
* Multiply a row by a scalar.
* Subtract `k` times one row from another.

This extension works with matrices over the rationals: before any operations are performed, the matrix's cells are converted to fractions.

## JME functions

### `row_echelon_form(matrix)`

Uses row operations to put the given matrix in row echelon form. A matrix is in row echelon form if the leading non-zero entry in each row is strictly to the right of the leading non-zero entries in all of the rows above.

### `row_echelon_form_display(matrix)`

Returns a passage of HTML describing the steps involved in transforming the given matrix into row echelon form.

### `row_echelon_form_display_determinant(matrix)`

Returns a passage of HTML describing the steps involved in transforming the given matrix into row echelon form, while describing how the determinant of the matrix changes at each step.

### `is_row_echelon_form(matrix)`

Returns `true` if the matrix is in row echelon form.

### `describe_why_row_echelon_form(matrix)`

Returns a string describing why the matrix is not in row echelon form, or "The matrix is in row echelon form." if it is.

### `reduced_row_echelon_form(matrix)`

Uses row operations to put the given matrix in reduced row echelon form. A matrix in row echelon form is reduced if every leading non-zero entry is 1 and is the only non-zero entry in its column.

### `reduced_row_echelon_form_display(matrix)`

Returns a passage of HTML describing the steps involved in transforming the given matrix into reduced row echelon form.

### `is_reduced_row_echelon_form(matrix)`

Returns `true` if the matrix is in reduced row echelon form.

### `describe_why_reduced_row_echelon_form(matrix)`

Returns a string describing why the matrix is not in reduced row echelon form, or "The matrix is in reduced row echelon form." if it is.

### `rank(matrix)`

Computes the rank of the matrix, by returning the number of rows of the reduced row echelon form of the matrix, with all zero rows removed.

### `is_linearly_independent(matrix)`

Returns `true` if the rows of the matrix are linearly independent.

### `adjoin(matrix,vector)`

Add the given column vector to the right of the given matrix.

### `subset_with_dimension(vectors,n,d)`

Return a subset of `n` of the given vectors, with dimension `d`.

This is not always possible - if the vectors have length `k`, you can't have `d>k`. 
This is not If the input list has dimension less than `d`, it can't be done.
This is not Likewise with extra dependent vectors - if there aren't enough, it'll fail.

The vectors are processed in order, so if you want a random subset you should shuffle the list first.

### `as_sum_of_basis(basis,v)`

Express the vector `v` as the sum of the given list of basis vectors.
Returns a list of coefficients corresponding to the basis vectors.

## JavaScript functions

All JavaScript functions are members of the `Numbas.extensions.linearalgebra` object.

### `Fraction(n)`

A constructor for a fraction. `n` is either a number, in which case a rational approximation is computed, or an object `{n: numerator, d:denominator}`.

Example:

```
var two = new Fraction(2);
var third = new Fraction(1/3);
var two_thirds = two.mul(third);
```

### `fraction_matrix(matrix)`

Convert all the entries in the given matrix to `Fraction` objects. Returns a new matrix - doesn't modify the original.

### `unfraction_matrix(matrix)`

Convert all the entries in the given matrix from `Fraction` objects to normal numbers. Returns a new matrix - doesn't modify the original.

### `row_echelon_form(matrix)`

Transforms the given matrix into row echelon form. Returns an object `{matrix: matrix, operations: [list of descriptions of the steps]}`.

### `reduced_row_echelon_form(matrix)`

Transforms the given matrix into reduced row echelon form. Returns an object `{matrix: matrix, operations: [list of descriptions of the steps]}`.

### `is_row_echelon_form(matrix)`

Returns `true` if the given matrix is in row echelon form. If not, throws an error whose message is an explanation of why the matrix isn't in row echelon form.

### `is_reduced_row_echelon_form(matrix)`

Returns `true` if the given matrix is in reduced row echelon form. If not, throws an error whose message is an explanation of why the matrix isn't in reduced row echelon form.

### `rank(matrix)`

Returns the rank of the given matrix.

### `is_linearly_independent(vectors)`

Returns `true` if the given list of vectors is linearly independent.

### `adjoin(matrix,vector)`

Add the given column vector to the right of the given matrix.

### `subset_with_dimension(vectors,n,d)`

Returns a subset of `n` of the given vectors with dimension `d`.

### `as_sum_of_basis(basis,v)`

Express the vector `v` as the sum of the given basis vectors.
Returns a list of coefficients corresponding to the basis vectors.