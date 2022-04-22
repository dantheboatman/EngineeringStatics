Polynomials extension for Numbas
==========================

This extension provides a new data type and some functions to deal with polynomials

JME data type
-------------

This extension adds a new JME data type `Numbas.jme.types.polynomial`, representing a polynomial in a given variable.

JME functions
-------------

### `polynomial(expression in one variable)`

Create a polynomial, automatically detecting the variable name from the expression. 
This is quite strict about what it accepts - only one variable name, and coefficients and degrees have to be literal numbers, not calculations or references to other variables.

You can either write a literal expression, or pass a string.
Note that if you use a literal expression, variables defined in the scope are substituted in. It's safer to use a string.

#### Examples

* `polynomial(x^2-2x+3)`
* `polynomial("5*x^4 + 2*x")`

### `polynomial(variable_name,coefficients)`

Create a polynomial in the given variable, with the given coefficients (`coefficients[i]` is the coefficient of `variable_name^i`). Example: `polynomial(x,[-1,0,1])` represents the polynomial `x^2-1`.

### `mod_polynomial(expression,m)` or `mod_polynomial(variable_name,coefficients,m)`

As above, but all operations on this polynomial will be calculated modulo `m`. 

### `p1+p2`

Add two polynomials

### `p1+n` or `n+p1`

Add a constant to a polynomial - more convenient than `p+polynomial(n)`.

### `p1-p2`

Subtract `p2` from `p1`

### `p1-n` or `n-p1`

Subtract a constant from a polynomial (or vice versa) - more convenient than `p-polynomial(n)`.

### `p1*p2`

Multiply two polynomials

### `p1*n or n*p1`

Multiply a polynomial by a constant - more convenient than `p*polynomial(n)`.

### `p^n`

Take polynomial `p` to the `n`th (integer, non-negative) power.

### `quotient(p1,p2)`

Divide `p1` by `p2`, and throw away the remainder (polynomial quotient of `p1` and `p2`)

### `remainder(p1,p2)`

Remainder when dividing `p1` by `p2`.

### `mod(p,n)`

Take each coefficient of `p` mod `n`.

### `degree(p)`

Degree of `p` - highest power of the variable with a non-zero coefficient.

### `p1=p2`

Are `p1` and `p2` equal? True if all the coefficients match.

### `p[d]`

Coefficient of `x^d` in `p`.

### `eval(p,x)`

Evaluate the polynomial at the given point.

### `expr(p)`

A JME expression equivalent to the given polynomial; you can substitute this into the correct answer for a "Mathematical expression" part, for example.

### `string(p)`

A string representation of the polynomial.

### `latex(p)`

A LaTeX representation of the polynomial.

### `long_division(p1,p2)`

LaTeX rendering of the long division of `p1` by `p2`.

JavaScript functions
--------------------

**Base object: `Numbas.extensions.polynomials.Polynomial`** 

(set it to a more convenient name, e.g. `var poly = Numbas.extensions.polynomials.Polynomial`)

### `new Polynomial(variable_name,coefficients,[modulo])`

`coefficients` is a dictionary of `degree → coefficient`. If `modulo` is given, all coefficients will be reduced modulo that number in any calculations using this polynomial.

### `Polynomial.from_tree(tree,[modulo])`

Create a polynomial object from a compiled JME tree

### `Polynomial.from_string(expr,[modulo])`

Create a polynomial object from a JME string

## `Polynomial` object methods

### `p.evaluate(x)`

Evaluate at point `x` to a number

### `p.toLaTeX()`

Render as a LaTeX string

### `p.isZero()`

Is this polynomial zero?

### `p.degree()`

Degree of highest power term in `p` with a non-zero coefficient

### `p.negate()`

Negate every coefficient of `p` (returns a new polynomial)

### `p1.add(p2)`

Add `p1` to `p2`

### `p1.sub(p2)`

Subtract `p2` from `p1`

### `p1.mul(p2)`

Mutliply `p1` by `p2`

### `p.pow(n)`

`n`th power of `p`

### `p.scale(n)`

Multiply `p` by constant `n`

### `p.add_degree(n)`

Add `n` to the degree of each term of `p`

### `p1.div(p2)`

Divide `p1` by `p2`. Returns an object `{quotient: <polynomial>, remainder: <polynomial>}`

### `p.mod(n)`

Take each coefficient of `p` mod `n` (returns a new polynomial object)

### `p1.eq(p2)`

Are `p1` and `p2` equal?

### `p.coefficient(d)`

Coefficient of `x^d` in `p`.