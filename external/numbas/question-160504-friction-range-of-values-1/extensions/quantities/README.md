# Quantities extension for Numbas

This extension wraps the [js-quantities](https://github.com/gentooboontoo/js-quantities) library to provide a "quantity with units" data type to Numbas.

It provides a `quantity` data type, which represents a scalar *amount* and a list of *units*.

**A note about precision:** Amounts are represented with JavaScript floating-point numbers, which are only precise to around 30 decimal places. 
It's our intention to add support for more precise number representations to Numbas; when that happens, this extension could be updated to use that.

## JME functions

### `quantity([number], units)` or `qty([number], units)`

Create a quantity with the given units. If the number is not given, the returned quantity represents 1 of the given units.
Use `*` and `/` to combine units, and `^` for powers of units.
An empty `units` string will produce a unitless quantity.

**Examples:**

* `quantity("kg")`
* `qty("kg")`
* `quantity(1.2, "kg")`
* `quantity("kg*m/s^2")`
* `quantity("1/s")`
* `quantity("kg*m^-2")`

### `units_of_kind(kind)`

Returns a list of [recognised units](#recognised-units) of the given kind.

**Example:**

* `units_of_kind("length")` → `[ "angstrom", "AU", "datamile", "fathom", "foot", "furlong", "inch", "league", "light-minute", "light-second", "light-year", "meter", "mil", "mile", "naut-mile", "parsec", "pica", "point", "redshift", "rod", "yard", "m" ]`

### `aliases(unit)`

Returns a list of accepted names for the given unit.

**Example:**

* `aliases("meter")` → `[ "m", "meter", "meters", "metre", "metres" ]`

### `compatible(q1, q2)`

Are the two given quantities compatible? That is, are they of the same kindm, so one can be converted to the other?

**Examples:**

* `compatible(qty("m"), qty("ft"))` → `true`
* `compatible(qty("m"), qty("kg"))` → `false`

### `kind(quantity)`

What [kind of unit](#recognised-units) is `quantity` measured in? 
Returns a string code corresponding to the kind.
For combinations of units that don't correspond to a built-in kind, an empty string is returned.

**Examples:**

* `kind(qty("m"))` → `"length"`
* `kind(qty("N*s"))` → `"momentum"`
* `kind(qty("W/s"))` → `""`

### `unitless(quantity)`

Does the given quantity have no associated units?
Note that a *dimensionless* quantity is **not necessarily** unitless - for example, a quantity measured in meters per foot has no dimension but is not unitless.

* `unitless(qty(1,""))` → `true`
* `unitless(qty(1,"m"))` → `false`
* `unitless(qty(1,"m/ft"))` → `false`

### `isbase(quantity)`

Is the given quantity in base units, as defined in the International System of Units (SI)?

**Examples:**

* `isbase(qty("kg"))` → `true`
* `isbase(qty("lb"))` → `false`

### `tobase(quantity)`

Convert the given quantity to base SI units.

**Example**:

* `tobase(qty(1, "inch"))` → `quantity(0.0254, "m")`

### `q_from in units` or `q_from in q_to`

Convert quantity `q_from` to the units specified by the given string, or the same units as `q_to`.
If the desired units are not compatible with `q_from`, an error is thrown.

**Examples**:

* `qty(1.5, "m") in "cm"` → `quantity(150, "cm")`
* `qty(100,"g") in qty("kg")` → `quantity(0.1, "kg")`

### `as_si(quantity)`

Convert quantity to SI units.

**Example:**

* `as_si(quantity(1, "lb*ft"))` → `quantity(0.1382549544, "m*kg")`

### `inverse(quantity)`

Return the reciprocal of the given quantity.

**Example:**

* `inverse(qty(2, "m/s"))` → `quantity(0.5, "s/m")`

### `same(a, b)`

Are `a` and `b` both exactly the same quantity, measured in the same units?

**Examples:**

* `same(qty(1, "m"), qty(100, "cm"))` → `false`
* `same(qty(1, "m"), qty(2, "m"))` → `false`
* `same(qty(1, "m"), qty(1, "m"))` → `true`

### `a < b`, `a <= b`, `a > b`, `a >= b`

Compare quantities `a` and `b`. If their units are not compatible, an error is thrown.

**Examples:**

* `qty(1, "cm") < qty(1, "m")` → `true`
* `qty(4, "feet") > qty(1, "m")` → `true`
* `qty(1, "cm") > qty(1, "cm")` → `false`
* `qty(1, "cm") >= qty(1, "cm")` → `true`

### `a = b`

Quantities `a` and `b` are equal if their units are compatible and they represent exactly the same amount.

**Examples:**

* `qty(2.54, "cm") = qty(1, "inch")` → `true`
* `qty(1, "cm") = qty(1, "second")` → `false`

### `a + b`, `a - b`, `a * b`, `a / b`

Arithmetic on units is supported. When adding or subtracting units, the result is given in the same units as the left-hand argument, and if the two quantities being combined are in incompatible units an error is thrown.
When multiplying or dividing, units are not automatically converted to their common names. For example, The division of a quantity in `Newtons` by a quantity in `m^2` returns a quantity in `N/m^2`, not in `Pa`.

**Examples:**

* `qty(1, "cm") + qty(1, "m")` → `quantity(101, "cm")`
* `qty(100, "cm") - qty(1, "m")` → `quantity(0, "cm")`
* `qty(100, "cm") * qty(1, "s")` → `quantity(100, "cm*s")`
* `qty(100, "N") / qty(4, "m^2")` → `quantity(25, "N/m^2")`

### `-q`

The negative of the given quantity.


**Example:**

* `-qty(1,"N")` → `quantity(-1, "N")`

### `n * quantity` or `quantity * n`

Multiply a quantity by a scalar.

**Example:**

* `5 * quantity(6, "g")` → `quantity(30, "g")`

### `round(quantity, precision)`

Round `quantity` to the nearest multiple of `precision`, given either as a string in the form `"amount units"`, or another quantity.
If precision is not given, the quantity is rounded to the nearest whole unit.

**Examples:**

* `round(qty(123, "cm"), "1 m")` → `quantity(100, "cm")`
* `round(qty(0.1697, "m"), qty(5, "cm"))` → `quantity(0.15, "m")`
* `round(qty(6.32, "kg"))` → `quantity(6, "kg")`

### `precround(quantity,dp)`

Round `quantity` to `dp` decimal places. 

**Example:**

* `precround(qty(123.456,"cm"), 1)` → `quantity(123.5, "cm")`

### `siground(quantity,sf)`

Round `quantity` to `sf` significant figures. 

**Example:**

* `siground(qty(123.456,"cm"), 1)` → `quantity(100, "cm")`

### `abs(quantity)`

The absolute value of the quantity.

**Example:**

* `abs(qty(-5, "N"))` → `quantity(5, "N")`

### `scalar(quantity)`

The scalar amount of the quantity, as a number - in other words, strip off the units information.

**Example:**

* `scalar(qty(53, "s"))` → `53`

### `sign(quantity)`

Returns 1 if the quantity is positive, -1 if it's negative, and 0 otherwise.

**Examples:**

* `sign(qty(20,"kg"))` → `1`
* `sign(qty(-10,"kg"))` → `-1`
* `sign(qty(0,"kg"))` → `0`

### `string(quantity, [notation style])`

A string representing the given quantity, in the given [notational style](https://docs.numbas.org.uk/en/latest/number-notation.html#styles-of-notation) (plain English is the default)
The units are presented using "nice" characters: a dot for multiplication, and exponents are displayed in superscript.

**Examples:**

* `string(qty(23, "kg*s^-1"))` → `"23 kg/s"`
* `string(qty(1000.235, "kg*m^2"), "si-fr")` → `"1 000,235 kg⋅m²"`

### `plain_string(quantity, [notation style])`

A string representing the given quantity, in the given [notational style](https://docs.numbas.org.uk/en/latest/number-notation.html#styles-of-notation) (plain English is the default).
The units are given in a form that is easy to type: `*` is used for multiplication, and `^` marks an exponent.

**Examples:**

* `plain_string(qty(23, "kg/s"))` → `"23 kg/s"`
* `plain_string(qty(1000.235, "kg*m^2"), "si-fr")` → `"1 000,235 kg*m^2"`

### `units_numerator(quantity)` and `units_denominator(quantity)`

The units of a quantity can be written as a fraction whose numerator and denominator both consist of a list of units.
When a squared or cubed unit is used, the base unit is repeated.
These functions return the lists of units in the numerator and denominator, respectively, for a given quantity.
Any order-of-magnitude prefixes are included as separate items in the list

**Examples:**

* `units_numerator(qty(1, "m"))` → `[ "meter" ]`
* `units_denominator(qty(1, "m"))` → `[ "1" ]`
* `units_numerator(qty(1, "kg*cm^2/s^2"))` → `[ "kilogram", "centi", "meter", "centi", "meter" ]`
* `units_denominator(qty(1, "m^2/s^2"))` → `[ "second", "second" ]`

### `units(quantity)`

Return a quantity representing one unit of the same kind as the given quantity.

**Example:**

* `units(qty(23, "m^2/s"))` → `quantity(1, "m^2/s")`

### `units_string(quantity)`

Return a string describing the units of the given quantity, suitable for display. Powers are displayed in superscript, and **⋅** is used for multiplication.
The units are presented using "nice" characters: a dot for multiplication, and exponents are displayed in superscript.

**Example:**

* `units_string(qty("kg*cm^2/s^2"))` → `"kg⋅cm²/s²"`

### `plain_units_string(quantity)`

Return a string describing the units of the given quantity, suitable for display. Powers are displayed in superscript, and **⋅** is used for multiplication.
The units are given in a form that is easy to type: `*` is used for multiplication, and `^` marks an exponent.

**Example:**

* `plain_units_string(qty("kg*cm^2/s^2"))` → `"kg*cm^2/s^2"`

### `quantity_kinds`

A constant list of all the recognised kinds of units.

## JavaScript functions

See the [documentation for js-quantities](https://github.com/gentooboontoo/js-quantities) for detail on its JavaScript API.

The `Qty` object is available globally when this extension is loaded.

In addition, the following functions are defined under the `Numbas.extensions.quantities` namespace:

### `precround(q,dp)`

Round the quantity `q` to `dp` decimal places. See [Numbas.math.precround](http://numbas.github.io/Numbas/Numbas.math.html#.precround)

### `siground(q,sf)`

Round the quantity `q` to `sf` significant figures. See [Numbas.math.siground](http://numbas.github.io/Numbas/Numbas.math.html#.siground)

## <a name="recognised-units">Recognised units</a>

The following unit names are recognised. Units of the same kind can be converted between each other.
The [prefixes](#prefixes) can be written to the left of any other unit, to change the order of magnitude.

### acceleration

* gee

### activity

* Katal, kat, katal
* U, enzUnit, unit

### angle

* rad, radian, radians
* deg, degree, degrees
* gon, grad, gradian, grads
* rotation

### angular velocity

* rpm

### area

* hectare
* acre, acres
* sqft

### capacitance

* F, Farad, farad

### charge

* C, Coulomb, coulomb
* Ah

### concentration

* M, molar
* wt%, wtpercent

### conductance

* S, Siemens, siemens

### counting

* cell, cells
* each
* count
* base-pair, bp
* nt, nucleotide
* molecule, molecules

### currency

* USD, dollar
* cents

### current

* A, Ampere, amp, ampere, amps

### energy

* J, Joule, joule, joules
* erg, ergs
* BTU, BTUs, btu
* cal, calorie, calories
* Cal, Calorie, Calories
* Therm, th, therm, therm-US, therms
* Wh

### force

* N, Newton, newton
* dyn, dyne
* lbf, pound-force

### frequency

* Hertz, Hz, hertz

### illuminance

* lux

### inductance

* H, Henry, henry

### information

* B, byte, bytes
* b, bit, bits

### information rate

* Bps
* bps

### length

* m, meter, meters, metre, metres
* ", in, inch, inches
* ', feet, foot, ft
* yard, yards, yd
* mi, mile, miles
* naut-mile, nmi
* league, leagues
* furlong, furlongs
* rd, rod, rods
* mil, mils
* ang, angstrom, angstroms
* fathom, fathoms
* pica, picas
* point, points, pt
* red-shift, redshift, z
* AU, astronomical-unit
* light-second, ls
* light-minute, lmin
* light-year, ly
* parsec, parsecs, pc
* DM, datamile

### logarithmic

* dB, decibel, decibels

### luminosity

* candela, cd

### luminous power

* lm, lumen

### magnetism

* Wb, weber, webers
* T, tesla, teslas
* G, gauss
* Mx, maxwell, maxwells
* Oe, oersted, oersteds

### mass

* kg, kilogram, kilograms
* AMU, amu, u
* Da, Dalton, Daltons, dalton, daltons
* slug, slugs
* short-ton, tn, ton
* metric-ton, tonne
* carat, carats, ct
* #, lb, lbs, pound, pounds
* ounce, ounces, oz
* g, gram, gramme, grammes, grams
* gr, grain, grains
* dr, dram, drams
* st, stone, stones

### potential

* V, Volt, volt, volts

### power

* W, watt, watts
* VA, volt-ampere
* VAR, VAr, Var, var, volt-ampere-reactive
* horsepower, hp

### <a name="prefixes">prefix</a>

* googol
* Ki, Kibi, kibi
* Mebi, Mi, mebi
* Gi, Gibi, gibi
* Tebi, Ti, tebi
* Pebi, Pi, pebi
* Ei, Exi, exi
* Zebi, Zi, zebi
* Yebi, Yi, yebi
* Y, Yotta, yotta
* Z, Zetta, zetta
* E, Exa, exa
* P, Peta, peta
* T, Tera, tera
* G, Giga, giga
* M, Mega, mega
* k, kilo
* Hecto, h, hecto
* Deca, da, deca, deka
* Deci, d, deci
* Centi, c, centi
* Milli, m, milli
* Micro, mc, micro, u, µ, μ
* Nano, n, nano
* Pico, p, pico
* Femto, f, femto
* Atto, a, atto
* Zepto, z, zepto
* Yocto, y, yocto

### prefix only

* doz, dozen, dz
* %, percent
* ppm
* ppt
* gr, gross

### pressure

* Pa, Pascal, pascal
* bar, bars
* mmHg
* inHg
* torr
* ATM, atm, atmosphere, atmospheres
* psi
* cmH2O, cmh2o
* inH2O, inh2o

### radiation

* Gy, gray, grays
* R, roentgen
* Sv, sievert, sieverts
* Bq, becquerel, becquerels
* Ci, curie, curies

### rate

* cpm
* dpm
* bpm

### resistance

* Ohm, ohm, Ω, Ω

### resolution

* dot, dots
* pixel, px
* ppi

### solid angle

* sr, steradian, steradians

### speed

* kph
* mph
* kn, knot, knots, kt, kts
* fps

### substance

* mol, mole

### temperature

* degK, kelvin
* celsius, celsius, centigrade, degC
* degF, fahrenheit
* degR, rankine
* temp-K, tempK
* temp-C, tempC
* temp-F, tempF
* temp-R, tempR

### time

* s, sec, second, seconds, secs
* min, mins, minute, minutes
* h, hour, hours, hr, hrs
* d, day, days
* week, weeks, wk
* fortnight, fortnights
* annum, y, year, years, yr
* decade, decades
* centuries, century

### typography

* dpi

### viscosity

* P, poise
* St, stokes

### volume

* L, l, liter, liters, litre, litres
* gal, gallon, gallons
* qt, quart, quarts
* pint, pints, pt
* cu, cup, cups
* floz, fluid-ounce, fluid-ounces
* tablespoon, tablespoons, tb, tbs, tbsp
* teaspoon, teaspoons, tsp
* bsh, bu, bushel, bushels