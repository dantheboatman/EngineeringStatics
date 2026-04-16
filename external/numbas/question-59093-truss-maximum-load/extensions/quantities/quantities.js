Numbas.addExtension('quantities',['math','jme','jme-display','js-quantities', 'decimal'],function(quantities) {
    var jme = Numbas.jme;

    var superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    function superscript(n) {
        return (n+'').replace(/\d/g,function(d){ d=parseInt(d); return superscripts[d]; });
    }

    var TQuantity = function(quantity) {
        this.value = quantity;
    };
    jme.registerType(
      TQuantity,
      'quantity',
      {
      	'string': function(q) {
          return new jme.types.TString(quantity_string(q.value));
        }
      }
    );
    jme.display.texOps['quantity'] = function(thing,texArgs) {
        if(thing.args[1].tok.type=='string') {
            var units = Qty(thing.args[1].tok.value).format(function(s,units) { return tex_units(units) });
            return texArgs[0] + ' \\, ' + units;
        } else {
            return '\\operatorname{quantity} \\left ( '+texArgs.join(' , ')+' \\right )';
        }
    };



    var unit_names = {
        'tempC': '°C',
        'degC': '°C',
        'tempF': '°F',
        'degF': '°F',
        'tempK': 'K',
        'degK': 'K'
    }

    function fix_unit_name(name) {
        return unit_names[name] || name;
    }

    /** Fix the rendering of a units string, for display in plain text.
     *  js-quantities writes 'kg^2' as 'kg2', and doesn't expose the output names of units, so we can't write our own formatter
     *  so instead, assume that digits never appear in the names of units, and apply this regex
     */
    function fix_units(units) {
        var m = /([^\/]+)?(?:\/(.*))?/.exec(units);
        function fix_prod(units) {
            var bits = units.split('*').map(function(b) {
                return b.replace(/(\D+)(-?\d+)?/g,function(m,name,exponent) { 
                    return fix_unit_name(name)+(exponent ? superscript(exponent) : ''); 
                });
            });

            return bits.join('⋅');
        }
        var out = fix_prod(m[1] || '');
        if(m[2]) {
            out += '/'+fix_prod(m[2]);
        }
        return out;
    }

    function plain_units(units) {
        return units.replace(/(\D)(-?\d+)/g,function(m,name,exponent) { return fix_unit_name(name)+'^'+exponent; });
    }

    function tex_units(units) {
        units = units.replace(/([a-zA-Z%]+)(\d+)?/g, function(s,name,exponent) {
            return '\\text{'+fix_unit_name(name)+(exponent ? superscript(exponent) : '')+'}';
        });
        units = units.replace(/\*/g,' \\cdot ');
        return units;
    }

    function quantity_string(q,style) {
        return q.format(function(scalar,units) {
            var scalar_display = Numbas.math.niceDecimal(scalar.toDecimal(),{style:style});
            var units_display = fix_units(units);
            return scalar_display+(units_display ? ' '+units_display : '');
        }); 
    }

    function plain_quantity_string(q,style) {
        return q.format(function(scalar,units) {
            return Numbas.math.niceDecimal(scalar.toDecimal(),{style:style})+' '+plain_units(units);
        }); 
    }

    jme.display.registerType(TQuantity,{
        tex: function(thing,tok,texArgs) {
            var texifier = this;
            return tok.value.format(function(scalar,units) {
                return texifier.number(scalar)+' \\, '+tex_units(units);
            });
        },
        jme: function(tree,tok,bits) {
            var scalar = tok.value.format(function(scalar){return scalar.toString();});
            var units = tok.value.format(function(scalar,units) { return units.replace(/(\D+?)(\d+)/g,'$1^$2'); });
            return 'quantity('+scalar+', "'+jme.escape(units)+'")';
        },
        displayString: function(tok) {
            return quantity_string(tok.value);
        }
    });

    Numbas.util.equalityTests['quantity'] = function(a,b) {
        return a.value.isCompatible(b.value) && a.value.eq(b.value);
    };
    Numbas.jme.tokenComparisons['quantity'] = function(a,b) {
        if(!a.value.isCompatible(b.value)) {
          return 0;
        }
        return a.value.gt(b.value) ? 1 : a.value.lt(b.value) ? -1 : 0;
    }

	var funcObj = jme.funcObj;
	var TString = jme.types.TString;
	var TNum = jme.types.TNum;
    var TDecimal = jme.types.TDecimal;
    var TInt = jme.types.TInt;
	var TList = jme.types.TList;
	var TBool = jme.types.TBool;

    function addFunction(name,deps,outtype,fn,options) {
        options = Object.assign({random: false}, options || {});
        return quantities.scope.addFunction(new funcObj(name,deps,outtype,fn,options));
    };

    quantities.scope.setVariable('quantity_kinds',jme.wrapValue(Qty.getKinds()));

    function unit_quantity(units) {
        if(units.match(/^\s*(\d|-)/) && !units.match(/^\s*1\s*\//)) {
            throw(new Error("Invalid description of units: "+units));
        }
        return Qty(1,units);
    }

    jme.funcSynonyms['qty'] = 'quantity';
    addFunction('quantity',[TString],TQuantity,function(q) { return unit_quantity(q); });
    addFunction('quantity',[TDecimal,TString],TQuantity,function(n,q) { return unit_quantity(q).mul(n.re); });
    addFunction('units_of_kind',[TString],TList,function(kind) { 
        if(kind=='unitless') {
            return [''];
        }
        var units = Qty.getUnits(kind);
        var extras = {
            'yank': 'kg*m/s3',
            'momentum': 'kg*m',
            'angular_momentum': 'kg*m2/s',
            'density': 'kg/m3',
            'area_density': 'kg/m2',
            'radiation_exposure': 'A*s/kg',
            'molar_concentration': 'mol/m3',
            'elastance': 'kg*m2/A2*s4',
            'specific_volume': 'm3/kg',
            'snap': 'm/s4',
            'jolt': 'm/s3',
            'volumetric_flow': 'm3/s',
            'wavenumber': '1/m'
        }
        if(extras[kind]) {
            if(!units.contains(extras[kind])) {
                units.push(extras[kind]);
            }
        }
        if(units.length) {
            var si = Qty(units[0]).toBase().units();
            if(!units.contains(si)) {
                units.push(si);
            }
        }
        return units.map(function(u){return new TString(u)}); 
    });
    addFunction('aliases',[TString],TList,function(unit) { return Qty.getAliases(unit).map(function(u){return new TString(u)}); });
    addFunction('compatible',[TQuantity,TQuantity],TBool,function(a,b) { return a.isCompatible(b); });
    addFunction('kind',[TQuantity],TString,function(q) { return q.kind() || ''; });
    addFunction('unitless',[TQuantity],TBool,function(q) { return q.isUnitless(); });
    addFunction('isbase',[TQuantity],TBool,function(q) { return q.isBase(); });
    addFunction('tobase',[TQuantity],TQuantity,function(q) { return q.toBase(); });
    addFunction('in',[TQuantity,TString],TQuantity,function(q,unit) { return q.to(unit); });
    addFunction('in',[TQuantity,TQuantity],TQuantity,function(q,unit) { return q.to(unit); });
    addFunction('inverse',[TQuantity],TQuantity,function(q) { return q.inverse(); });
    addFunction('same',[TQuantity,TQuantity],TBool,function(a,b) { return a.same(b); });
    addFunction('<',[TQuantity,TQuantity],TBool,function(a,b) { return a.lt(b); });
    addFunction('<=',[TQuantity,TQuantity],TBool,function(a,b) { return a.lte(b); });
    addFunction('>',[TQuantity,TQuantity],TBool,function(a,b) { return a.gt(b); });
    addFunction('>=',[TQuantity,TQuantity],TBool,function(a,b) { return a.gte(b); });
    addFunction('+',[TQuantity,TQuantity],TQuantity,function(a,b) { return a.add(b); });
    addFunction('-',[TQuantity,TQuantity],TQuantity,function(a,b) { return a.sub(b); });
    addFunction('+u',[TQuantity],TQuantity,function(q){ return q; });
    addFunction('-u',[TQuantity],TQuantity,function(q){ return Qty({scalar:-q.scalar, numerator:q.numerator, denominator: q.denominator}); });
    addFunction('*',[TQuantity,TQuantity],TQuantity,function(a,b) { return a.mul(b); });
    addFunction('*',[TDecimal,TQuantity],TQuantity,function(n,u) { return u.mul(n.re); });
    addFunction('*',[TQuantity,TDecimal],TQuantity,function(u,n) { return u.mul(n.re); });
    addFunction('/',[TQuantity,TQuantity],TQuantity,function(a,b) { return a.div(b); });
    addFunction('/',[TQuantity,TDecimal],TQuantity,function(u,n) { return u.div(n.re); });
    addFunction('/',[TDecimal,TQuantity],TQuantity,function(n,u) { return u.inverse().mul(n.re); });
    addFunction('round',[TQuantity,TString],TQuantity,function(q,precision) { return q.toPrec(precision); });
    addFunction('round',[TQuantity,TQuantity],TQuantity,function(q,precision) { return q.toPrec(precision.toString()); });
    addFunction('round',[TQuantity],TQuantity,function(q){ return q.toPrec(1); });
    addFunction('abs',[TQuantity],TQuantity,function(q){ return Qty({scalar:Math.abs(q.scalar), numerator: q.numerator, denominator: q.denominator}); });
    addFunction('sign',[TQuantity],TNum,function(q) { return Decimal.sign(q.scalar.toDecimal()); });
    addFunction('scalar',[TQuantity],TDecimal,function(q){ return q.scalar.toDecimal(); });
    
    /** Round this quantity's scalar to the given number of decimal places.
     * @param {Quantity} q
     * @param {Number} dp
     * @returns {Quantity}
     */
    quantities.precround = function(q,dp) {
        var v = q.scalar;
        return Qty({scalar: v.toDecimalPlaces(dp), numerator: q.numerator, denominator: q.denominator});
    }
    /** Round this quantity's scalar to the given number of significant figures.
     * @param {Quantity} q
     * @param {Number} dp
     * @returns {Quantity}
     */
    quantities.siground = function(q,dp) {
        var v = q.scalar;
        return Qty({scalar: v.toSignificantDigits(dp), numerator: q.numerator, denominator: q.denominator});
    }
    addFunction('precround',[TQuantity,TNum], TQuantity, quantities.precround);
    addFunction('siground',[TQuantity,TNum], TQuantity, quantities.siground);

    addFunction('string',[TQuantity],TString,function(q){ 
        return quantity_string(q);
    });
    addFunction('string',[TQuantity,TString],TString,function(q,style){ 
        // string(quantity, number notation style)
        return quantity_string(q,style);
    });
    addFunction('plain_string',[TQuantity],TString,function(q){ 
        return plain_quantity_string(q);
    });
    addFunction('plain_string',[TQuantity,TString],TString,function(q,style){ 
        // string(quantity, number notation style)
        return plain_quantity_string(q,style);
    });
    function clean_units(units) {
        return units.map(function(u){return new TString(u.replace(/^<(.*)>$/,'$1'))});
    }
    addFunction('units_numerator',[TQuantity],TList,function(q) { return clean_units(q.numerator); });
    addFunction('units_denominator',[TQuantity],TList,function(q) { return clean_units(q.denominator); });
    addFunction('units',[TQuantity],TQuantity,function(q) { return Qty(q.units()); });
    addFunction('units_string',[TQuantity],TString,function(q) { return fix_units(q.units()); });
    addFunction('plain_units_string',[TQuantity],TString,function(q) { return plain_units(q.units()); });

    var SIGNATURE_VECTOR = Qty.SIGNATURE_VECTOR;
    var SIGNATURE_POWER = Qty.SIGNATURE_POWER;

    quantities.decode_signature = function(n) {
        if(n<0) {
            var s = quantities.decode_signature(-n);
            for(var x in s) {
                s[x] = -s[x];
            }
            return s;
        }
        var l = [];
        while(n) {
            var m = n%SIGNATURE_POWER;
            l.push(m);
            n = (n-m)/SIGNATURE_POWER;
        }
        for(var i=0;i<l.length;i++) {
            if(l[i]>10) {
                l[i] -= SIGNATURE_POWER;
                if(i>=l.length-1) {
                    l.push(0);
                }
                l[i+1] += 1;
            }
        }

        var d = {};
        l.forEach(function(p,i) {
            d[SIGNATURE_VECTOR[i]] = p;
        });

        return d;
    }

    var si_units = quantities.si_units = {
        "unitless": "",
        "length": "m",
        "area": "m2",
        "volume": "m3",
        "time": "s",
        "temperature": "kelvin",
        "yank": "N/s",
        "power": "W",
        "pressure": "Pa",
        "force": "N",
        "energy": "J",
        "viscosity": "poise",
        "momentum": "kg*m",
        "angular_momentum": "kg*m2/s",
        "density": "kg/m3",
        "area_density": "kg/m2",
        "mass": "kg",
        "radiation_exposure": "C/kg",
        "magnetism": "Wb",
        "current": "A",
        "charge": "C",
        "conductance": "S",
        "capacitance": "F",
        "activity": "katal",
        "molar_concentration": "mol/m3",
        "substance": "mole",
        "illuminance": "lux",
        "luminous_power": "lumen",
        "currency": "dollar",
        "elastance": "1/farad",
        "resistance": "ohm",
        "inductance": "henry",
        "potential": "V",
        "specific_volume": "m3/kg",
        "snap": "m/s4",
        "jolt": "m/s3",
        "acceleration": "m/s2",
        "radiation": "sievert",
        "frequency": "Hz",
        "speed": "m/s",
        "volumetric_flow": "m^3/s",
        "wavenumber": "1/s",
        "information_rate": "byte/s",
        "information": "byte",
        "angular_velocity": "radian/s",
        "angle": "radian"
    }

    addFunction('as_si',[TQuantity],TQuantity,function(q) {
        var kind = q.kind();
        if(kind) {
            var unit = si_units[kind];
            return q.to(si_units[kind]);
        } else {
            var kinds = quantities.decode_signature(q.signature);
            var numerator = [];
            var denominator = [];
            for(var x in kinds) {
                var unit = si_units[x];
                if(kinds[x]>0) {
                    numerator.push(unit+'^'+kinds[x]);
                } else if(kinds[x]<0) {
                    denominator.push(unit+'^'+(-kinds[x]));
                }
            }
            if(!numerator.length) {
                numerator.push('1');
            }
            var units = numerator.join('*')+(denominator.length ? '/'+denominator.join('*') : '');
            return q.to(units);
        }
    });
});

Numbas.queueScript('js-quantities',['decimal'],function(module) {
    var exports = module.exports;

/** start of quantities.js **/

/*
The MIT License (MIT)
Copyright © 2006-2007 Kevin C. Olbrich
Copyright © 2010-2016 LIM SAS (http://lim.eu) - Julien Sanchez

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Qty = factory());
})(this, (function () { 'use strict';

  /**
   * Tests if a value is a string
   *
   * @param {*} value - Value to test
   *
   * @returns {boolean} true if value is a string, false otherwise
   */
  function isString(value) {
    return typeof value === "string" || value instanceof String;
  }

  /*
   * Prefer stricter Number.isFinite if currently supported.
   * To be dropped when ES6 is finalized. Obsolete browsers will
   * have to use ES6 polyfills.
   */
  const isFiniteImpl = Number.isFinite || window.isFinite;

  /**
   * Tests if a value is a number
   *
   * @param {*} value - Value to test
   *
   * @returns {boolean} true if value is a number, false otherwise
   */
  function isNumber(value) {
    // Number.isFinite allows not to consider NaN or '1' as numbers
    return isFiniteImpl(value);
  }

  /*
   * Identity function
   */
  function identity(value) {
    return value;
  }

  /**
   * Returns unique strings from list
   *
   * @param {string[]} strings - array of strings
   *
   *
   * @returns {string[]} a new array of strings without duplicates
   */
  function uniq(strings) {
    var seen = {};
    return strings.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }

  function compareArray(array1, array2) {
    if (array2.length !== array1.length) {
      return false;
    }
    for (var i = 0; i < array1.length; i++) {
      if (array2[i].compareArray) {
        if (!array2[i].compareArray(array1[i])) {
          return false;
        }
      }
      if (array2[i] !== array1[i]) {
        return false;
      }
    }
    return true;
  }

  function assign(target, properties) {
    Object.keys(properties).forEach(function(key) {
      target[key] = properties[key];
    });
  }

  /**
   * Safely multiplies numbers while avoiding floating errors
   * like 0.1 * 0.1 => 0.010000000000000002
   *
   * @param {...number} numbers - numbers to multiply
   *
   * @returns {number} result
   */
  function mulSafe() {
    var result = 1, decimals = 0;
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      decimals = decimals + getFractional(arg);
      result *= arg;
    }

    return decimals !== 0 ? round(result, decimals) : result;
  }

  /**
   * Safely divides two numbers while avoiding floating errors
   * like 0.3 / 0.05 => 5.999999999999999
   *
   * @returns {number} result
   * @param {number} num Numerator
   * @param {number} den Denominator
   */
  function divSafe(num, den) {
    if (den === 0) {
      throw new Error("Divide by zero");
    }

    var factor = Math.pow(10, getFractional(den));
    var invDen = factor / (factor * den);

    return mulSafe(num, invDen);
  }

  /**
   * Rounds value at the specified number of decimals
   *
   * @param {number} val - value to round
   * @param {number} decimals - number of decimals
   *
   * @returns {number} rounded number
   */
  function round(val, decimals) {
    return Math.round(val * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }

  function getFractional(num) {
    // Check for NaNs or Infinities
    if (!isFinite(num)) {
      return 0;
    }

    // Faster than parsing strings
    // http://jsperf.com/count-decimals/2
    var count = 0;
    while (num % 1 !== 0) {
      num *= 10;
      count++;
    }
    return count;
  }

  const fields = {};

  const NumberField = fields.NumberField = {

    isMember: (n) => isNumber(n),

    fromString: (s) => parseFloat(s),

    fromNumber: (n) => n,

    toNumber: (n) => n,

    one: () => 1,

    zero: () => 0,

    add: (a,b) => a + b,

    sub: (a,b) => a - b,

    mul: (a,b) => a * b,

    mulSafe: function() {
      return mulSafe.apply(this,arguments);
    },

    div: (a,b) => a / b,

    divSafe: divSafe,

    inverse: (n) => 1 / n,

    isExactlyZero: (n) => n === 0,

    round: Math.round,

    roundTo: round,

    lt: (a,b) => a < b,

    gt: (a,b) => a > b,

    eq: (a,b) => a === b,

    pow: Math.pow,

    PI: Math.PI,

    abs: Math.abs
  };

  let Field = NumberField;

  try {
    const Decimal = window.Decimal;

    class DecimalFraction {
      constructor(n,d) {
        if (!Decimal.isDecimal(n)) {
          n = new Decimal(n);
        }
        if (!Decimal.isDecimal(d)) {
          d = new Decimal(d);
        }
        this.n = n;
        this.d = d;
      }

      toString() {
        return this.toDecimal().toString();
      }

      toDecimal() {
        if (this.d.eq(1)) {
          return this.n;
        }
        else {
          return this.n.div(this.d);
        }
      }

      plus(b) {
        return new DecimalFraction(this.n.mul(b.d).add(b.n.mul(this.d)),this.d.mul(b.d));
      }

      minus(b) {
        return new DecimalFraction(this.n.mul(b.d).sub(b.n.mul(this.d)),this.d.mul(b.d));
      }

      times(b) {
        return new DecimalFraction(this.n.mul(b.n), this.d.mul(b.d));
      }

      dividedBy(b) {
        return new DecimalFraction(this.n.mul(b.d), this.d.mul(b.n));
      }

      inverse() {
        return new DecimalFraction(this.d,this.n);
      }

      isZero() {
        return this.n.isZero();
      }

      round() {
        return new DecimalFraction(this.toDecimal().round(), new Decimal(1));
      }

      toDecimalPlaces(decimals) {
        return new DecimalFraction(this.toDecimal().toDecimalPlaces(decimals), new Decimal(1));
      }

      toSignificantDigits(digits) {
        return new DecimalFraction(this.toDecimal().toSignificantDigits(digits), new Decimal(1));
      }

      lessThan(b) {
        return this.toDecimal().lessThan(b.toDecimal());
      }

      greaterThan(b) {
        return this.toDecimal().greaterThan(b.toDecimal());
      }

      equals(b) {
        return this.toDecimal().equals(b.toDecimal());
      }

      toPower(b) {
        return new DecimalFraction(this.n.toPower(b.toDecimal()), this.d.toPower(b.toDecimal()));
      }

      abs() {
        return new DecimalFraction(this.n.absoluteValue(), this.d.absoluteValue());
      }
    }

    function fr(n) {
      if (!(n instanceof DecimalFraction)) {
        return new DecimalFraction(n,1);
      }
      return n;
    }

    const DecimalOne = new DecimalFraction(1,1);
    const DecimalZero = new DecimalFraction(0,1);
    const DecimalField = fields.DecimalField = {

      isMember: (n) => {
        return n instanceof DecimalFraction || n instanceof Decimal;
      },

      fromString: (s) => {
        return new DecimalFraction(new Decimal(s), 1);
      },

      fromNumber: (n) => {
        return (new DecimalFraction(n,1)).toDecimalPlaces(12);
      },

      toNumber: (n) => {
        return n.toDecimal().toNumber();
      },

      one: () => {
        return DecimalOne;
      },

      zero: () => {
        return DecimalZero;
      },

      add: (a,b) => {
        return fr(a).plus(fr(b));
      },

      sub: (a,b) => {
        return fr(a).minus(fr(b));
      },

      mul: function() {
        let result = DecimalOne;
        for (var i = 0; i < arguments.length; i++) {
          result = result.times(fr(arguments[i]));
        }
        return result;
      },

      div: (a,b) => {
        return fr(a).dividedBy(fr(b));
      },

      inverse: (n) => {
        return fr(n).inverse();
      },

      isExactlyZero: (n) => {
        return fr(n).isZero();
      },

      round: (n) => {
        return fr(n).round();
      },

      roundTo: (n,decimals) => {
        return fr(n).toDecimalPlaces(decimals);
      },

      lt: (a,b) => {
        return fr(a).lessThan(fr(b));
      },

      gt: (a,b) => {
        return fr(a).greaterThan(fr(b));
      },

      eq: (a,b) => {
        return fr(a).equals(fr(b));
      },

      pow: (a,b) => {
        return fr(a).toPower(fr(b));
      },

      abs: (n) => {
        return fr(n).abs();
      },

      PI: new DecimalFraction(Decimal.acos(-1),1),
    };
    DecimalField.divSafe = DecimalField.div;
    DecimalField.mulSafe = DecimalField.mul;

    Field = DecimalField;
  }
  catch (e) {
  }

  /**
   * Custom error type definition
   * @constructor
   */
  function QtyError() {
    var err;
    if (!this) { // Allows to instantiate QtyError without new()
      err = Object.create(QtyError.prototype);
      QtyError.apply(err, arguments);
      return err;
    }
    err = Error.apply(this, arguments);
    this.name = "QtyError";
    this.message = err.message;
    this.stack = err.stack;
  }
  QtyError.prototype = Object.create(Error.prototype, {constructor: { value: QtyError }});

  /*
   * Throws incompatible units error
   * @param {string} left - units
   * @param {string} right - units incompatible with first argument
   * @throws "Incompatible units" error
   */
  function throwIncompatibleUnits(left, right) {
    throw new QtyError("Incompatible units: " + left + " and " + right);
  }

  const n = Field.fromNumber;
  const { PI, pow, mul, div } = Field;

  var UNITS = {
    /* prefixes */
    "<googol>" : [["googol"], pow(n(10),n(100)), "prefix"],
    "<kibi>"  :  [["Ki","Kibi","kibi"], pow(n(2),n(10)), "prefix"],
    "<mebi>"  :  [["Mi","Mebi","mebi"], pow(n(2),n(20)), "prefix"],
    "<gibi>"  :  [["Gi","Gibi","gibi"], pow(n(2),n(30)), "prefix"],
    "<tebi>"  :  [["Ti","Tebi","tebi"], pow(n(2),n(40)), "prefix"],
    "<pebi>"  :  [["Pi","Pebi","pebi"], pow(n(2),n(50)), "prefix"],
    "<exi>"   :  [["Ei","Exi","exi"], pow(n(2),n(60)), "prefix"],
    "<zebi>"  :  [["Zi","Zebi","zebi"], pow(n(2),n(70)), "prefix"],
    "<yebi>"  :  [["Yi","Yebi","yebi"], pow(n(2),n(80)), "prefix"],
    "<yotta>" :  [["Y","Yotta","yotta"], n(1e24), "prefix"],
    "<zetta>" :  [["Z","Zetta","zetta"], n(1e21), "prefix"],
    "<exa>"   :  [["E","Exa","exa"], n(1e18), "prefix"],
    "<peta>"  :  [["P","Peta","peta"], n(1e15), "prefix"],
    "<tera>"  :  [["T","Tera","tera"], n(1e12), "prefix"],
    "<giga>"  :  [["G","Giga","giga"], n(1e9), "prefix"],
    "<mega>"  :  [["M","Mega","mega"], n(1e6), "prefix"],
    "<kilo>"  :  [["k","kilo"], n(1e3), "prefix"],
    "<hecto>" :  [["h","Hecto","hecto"], n(1e2), "prefix"],
    "<deca>"  :  [["da","Deca","deca","deka"], n(1e1), "prefix"],
    "<deci>"  :  [["d","Deci","deci"], n(1e-1), "prefix"],
    "<centi>"  : [["c","Centi","centi"], n(1e-2), "prefix"],
    "<milli>" :  [["m","Milli","milli"], n(1e-3), "prefix"],
    "<micro>"  : [
      ["u","\u03BC"/*µ as greek letter*/,"\u00B5"/*µ as micro sign*/,"Micro","mc","micro"],
      n(1e-6),
      "prefix"
    ],
    "<nano>"  :  [["n","Nano","nano"], n(1e-9), "prefix"],
    "<pico>"  :  [["p","Pico","pico"], n(1e-12), "prefix"],
    "<femto>" :  [["f","Femto","femto"], n(1e-15), "prefix"],
    "<atto>"  :  [["a","Atto","atto"], n(1e-18), "prefix"],
    "<zepto>" :  [["z","Zepto","zepto"], n(1e-21), "prefix"],
    "<yocto>" :  [["y","Yocto","yocto"], n(1e-24), "prefix"],

    "<1>"     :  [["1", "<1>"], n(1), ""],
    /* length units */
    "<meter>" :  [["m","meter","meters","metre","metres"], n(1.0), "length", ["<meter>"] ],
    "<inch>"  :  [["in","inch","inches","\""], n(0.0254), "length", ["<meter>"]],
    "<foot>"  :  [["ft","foot","feet","'"], n(0.3048), "length", ["<meter>"]],
    "<yard>"  :  [["yd","yard","yards"], n(0.9144), "length", ["<meter>"]],
    "<mile>"  :  [["mi","mile","miles"], n(1609.344), "length", ["<meter>"]],
    "<naut-mile>" : [["nmi","naut-mile"], n(1852), "length", ["<meter>"]],
    "<league>":  [["league","leagues"], n(4828), "length", ["<meter>"]],
    "<furlong>": [["furlong","furlongs"], n(201.2), "length", ["<meter>"]],
    "<rod>"   :  [["rd","rod","rods"], n(5.029), "length", ["<meter>"]],
    "<mil>"   :  [["mil","mils"], n(0.0000254), "length", ["<meter>"]],
    "<angstrom>"  :[["ang","angstrom","angstroms"], n(1e-10), "length", ["<meter>"]],
    "<fathom>" : [["fathom","fathoms"], n(1.829), "length", ["<meter>"]],
    "<pica>"  : [["pica","picas"], n(0.00423333333), "length", ["<meter>"]],
    "<point>" : [["pt","point","points"], n(0.000352777778), "length", ["<meter>"]],
    "<redshift>" : [["z","red-shift", "redshift"], n(1.302773e26), "length", ["<meter>"]],
    "<AU>"    : [["AU","astronomical-unit"], n(149597900000), "length", ["<meter>"]],
    "<light-second>":[["ls","light-second"], n(299792500), "length", ["<meter>"]],
    "<light-minute>":[["lmin","light-minute"], n(17987550000), "length", ["<meter>"]],
    "<light-year>" : [["ly","light-year"], n(9460528000000000), "length", ["<meter>"]],
    "<parsec>"  : [["pc","parsec","parsecs"], n(30856780000000000), "length", ["<meter>"]],
    "<datamile>"  :  [["DM","datamile"], n(1828.8), "length", ["<meter>"]],

    /* mass */
    "<kilogram>" : [["kg","kilogram","kilograms"], n(1.0), "mass", ["<kilogram>"]],
    "<AMU>" : [["u","AMU","amu"], n(1.660538921e-27), "mass", ["<kilogram>"]],
    "<dalton>" : [["Da","Dalton","Daltons","dalton","daltons"], n(1.660538921e-27), "mass", ["<kilogram>"]],
    "<slug>" : [["slug","slugs"], n(14.5939029), "mass", ["<kilogram>"]],
    "<short-ton>" : [["tn","ton","short-ton"], n(907.18474), "mass", ["<kilogram>"]],
    "<metric-ton>":[["t","tonne","metric-ton"], n(1000), "mass", ["<kilogram>"]],
    "<carat>" : [["ct","carat","carats"], n(0.0002), "mass", ["<kilogram>"]],
    "<pound>" : [["lbs","lb","pound","pounds","#"], n(0.45359237), "mass", ["<kilogram>"]],
    "<ounce>" : [["oz","ounce","ounces"], n(0.0283495231), "mass", ["<kilogram>"]],
    "<gram>"    :  [["g","gram","grams","gramme","grammes"], n(1e-3), "mass", ["<kilogram>"]],
    "<grain>" : [["grain","grains","gr"], n(6.479891e-5), "mass", ["<kilogram>"]],
    "<dram>"  : [["dram","drams","dr"], n(0.0017718452), "mass",["<kilogram>"]],
    "<stone>" : [["stone","stones","st"],n(6.35029318), "mass",["<kilogram>"]],

    /* area */
    "<hectare>":[["hectare"], n(10000), "area", ["<meter>","<meter>"]],
    "<acre>":[["acre","acres"], n(4046.85642), "area", ["<meter>","<meter>"]],
    "<sqft>":[["sqft"], n(0.09290304), "area", ["<foot>","<foot>"]],

    /* volume */
    "<liter>" : [["l","L","liter","liters","litre","litres"], n(0.001), "volume", ["<meter>","<meter>","<meter>"]],
    "<gallon>":  [["gal","gallon","gallons"], n(0.0037854118), "volume", ["<meter>","<meter>","<meter>"]],
    "<gallon-imp>":  [["galimp","gallon-imp","gallons-imp"], n(0.0045460900), "volume", ["<meter>","<meter>","<meter>"]],
    "<quart>":  [["qt","quart","quarts"], n(0.00094635295), "volume", ["<meter>","<meter>","<meter>"]],
    "<pint>":  [["pt","pint","pints"], n(0.000473176475), "volume", ["<meter>","<meter>","<meter>"]],
    "<pint-imp>":  [["ptimp","pint-imp","pints-imp"], n(5.6826125e-4), "volume", ["<meter>","<meter>","<meter>"]],
    "<cup>":  [["cu","cup","cups"], n(0.000236588238), "volume", ["<meter>","<meter>","<meter>"]],
    "<fluid-ounce>":  [["floz","fluid-ounce","fluid-ounces"], n(2.95735297e-5), "volume", ["<meter>","<meter>","<meter>"]],
    "<fluid-ounce-imp>":  [["flozimp", "floz-imp","fluid-ounce-imp","fluid-ounces-imp"], n(2.84130625e-5), "volume", ["<meter>","<meter>","<meter>"]],
    "<tablespoon>":  [["tb","tbsp","tbs","tablespoon","tablespoons"], n(1.47867648e-5), "volume", ["<meter>","<meter>","<meter>"]],
    "<teaspoon>":  [["tsp","teaspoon","teaspoons"], n(4.92892161e-6), "volume", ["<meter>","<meter>","<meter>"]],
    "<bushel>":  [["bu","bsh","bushel","bushels"], n(0.035239072), "volume", ["<meter>","<meter>","<meter>"]],
    "<oilbarrel>":  [["bbl","oilbarrel", "oilbarrels", "oil-barrel","oil-barrels"], n(0.158987294928), "volume", ["<meter>","<meter>","<meter>"]],
    "<beerbarrel>":  [["bl","bl-us","beerbarrel", "beerbarrels", "beer-barrel","beer-barrels"], n(0.1173477658), "volume", ["<meter>","<meter>","<meter>"]],
    "<beerbarrel-imp>":  [["blimp","bl-imp","beerbarrel-imp", "beerbarrels-imp", "beer-barrel-imp","beer-barrels-imp"], n(0.16365924), "volume", ["<meter>","<meter>","<meter>"]],

    /* speed */
    "<kph>" : [["kph"], n(0.277777778), "speed", ["<meter>"], ["<second>"]],
    "<mph>" : [["mph"], n(0.44704), "speed", ["<meter>"], ["<second>"]],
    "<knot>" : [["kt","kn","kts","knot","knots"], n(0.514444444), "speed", ["<meter>"], ["<second>"]],
    "<fps>"  : [["fps"], n(0.3048), "speed", ["<meter>"], ["<second>"]],

    /* acceleration */
    "<gee>" : [["gee"], n(9.80665), "acceleration", ["<meter>"], ["<second>","<second>"]],
    "<Gal>" : [["Gal"], n(1e-2), "acceleration", ["<meter>"], ["<second>","<second>"]],

    /* temperature_difference */
    "<kelvin>" : [["degK","kelvin"], n(1.0), "temperature", ["<kelvin>"]],
    "<celsius>" : [["degC","celsius","celsius","centigrade"], n(1.0), "temperature", ["<kelvin>"]],
    "<fahrenheit>" : [["degF","fahrenheit"], div(n(5), n(9)), "temperature", ["<kelvin>"]],
    "<rankine>" : [["degR","rankine"], div(n(5), n(9)), "temperature", ["<kelvin>"]],
    "<temp-K>"  : [["tempK","temp-K"], n(1.0), "temperature", ["<temp-K>"]],
    "<temp-C>"  : [["tempC","temp-C"], n(1.0), "temperature", ["<temp-K>"]],
    "<temp-F>"  : [["tempF","temp-F"], div(n(5), n(9)), "temperature", ["<temp-K>"]],
    "<temp-R>"  : [["tempR","temp-R"], div(n(5), n(9)), "temperature", ["<temp-K>"]],

    /* time */
    "<second>":  [["s","sec","secs","second","seconds"], n(1.0), "time", ["<second>"]],
    "<minute>":  [["min","mins","minute","minutes"], n(60.0), "time", ["<second>"]],
    "<hour>":  [["h","hr","hrs","hour","hours"], n(3600.0), "time", ["<second>"]],
    "<day>":  [["d","day","days"], mul(n(3600), n(24)), "time", ["<second>"]],
    "<week>":  [["wk","week","weeks"], mul(n(7), mul(n(3600), n(24))), "time", ["<second>"]],
    "<fortnight>": [["fortnight","fortnights"], n(1209600), "time", ["<second>"]],
    "<year>":  [["y","yr","year","years","annum"], n(31556926), "time", ["<second>"]],
    "<decade>":[["decade","decades"], n(315569260), "time", ["<second>"]],
    "<century>":[["century","centuries"], n(3155692600), "time", ["<second>"]],

    /* pressure */
    "<pascal>" : [["Pa","pascal","Pascal"], n(1.0), "pressure", ["<kilogram>"],["<meter>","<second>","<second>"]],
    "<bar>" : [["bar","bars"], n(100000), "pressure", ["<kilogram>"],["<meter>","<second>","<second>"]],
    "<mmHg>" : [["mmHg"], n(133.322368), "pressure", ["<kilogram>"],["<meter>","<second>","<second>"]],
    "<inHg>" : [["inHg"], n(3386.3881472), "pressure", ["<kilogram>"],["<meter>","<second>","<second>"]],
    "<torr>" : [["torr"], n(133.322368), "pressure", ["<kilogram>"],["<meter>","<second>","<second>"]],
    "<atm>" : [["atm","ATM","atmosphere","atmospheres"], n(101325), "pressure", ["<kilogram>"],["<meter>","<second>","<second>"]],
    "<psi>" : [["psi"], n(6894.76), "pressure", ["<kilogram>"],["<meter>","<second>","<second>"]],
    "<cmh2o>" : [["cmH2O","cmh2o"], n(98.0638), "pressure", ["<kilogram>"],["<meter>","<second>","<second>"]],
    "<inh2o>" : [["inH2O","inh2o"], n(249.082052), "pressure", ["<kilogram>"],["<meter>","<second>","<second>"]],

    /* viscosity */
    "<poise>"  : [["P","poise"], n(0.1), "viscosity", ["<kilogram>"],["<meter>","<second>"] ],
    "<stokes>" : [["St","stokes"], n(1e-4), "viscosity", ["<meter>","<meter>"], ["<second>"]],

    /* substance */
    "<mole>"  :  [["mol","mole"], n(1.0), "substance", ["<mole>"]],

    /* concentration */
    "<molar>" : [["M","molar"], n(1000), "molar_concentration", ["<mole>"], ["<meter>","<meter>","<meter>"]],
    "<wtpercent>"  : [["wt%","wtpercent"], n(10), "molar_concentration", ["<kilogram>"], ["<meter>","<meter>","<meter>"]],

    /* activity */
    "<katal>" :  [["kat","katal","Katal"], n(1.0), "activity", ["<mole>"], ["<second>"]],
    "<unit>"  :  [["U","enzUnit","unit"], n(16.667e-16), "activity", ["<mole>"], ["<second>"]],

    /* capacitance */
    "<farad>" :  [["F","farad","Farad"], n(1.0), "capacitance", ["<second>","<second>","<second>","<second>","<ampere>","<ampere>"], ["<meter>", "<meter>", "<kilogram>"]],

    /* charge */
    "<coulomb>" :  [["C","coulomb","Coulomb"], n(1.0), "charge", ["<ampere>","<second>"]],
    "<Ah>" :  [["Ah"], n(3600), "charge", ["<ampere>","<second>"]],
    "<elementary-charge>" :  [["e"], n(1.602176634e-19), "charge", ["<ampere>","<second>"]],

    /* current */
    "<ampere>"  :  [["A","Ampere","ampere","amp","amps"], n(1.0), "current", ["<ampere>"]],

    /* conductance */
    "<siemens>" : [["S","Siemens","siemens"], n(1.0), "conductance", ["<second>","<second>","<second>","<ampere>","<ampere>"], ["<kilogram>","<meter>","<meter>"]],

    /* inductance */
    "<henry>" :  [["H","Henry","henry"], n(1.0), "inductance", ["<meter>","<meter>","<kilogram>"], ["<second>","<second>","<ampere>","<ampere>"]],

    /* potential */
    "<volt>"  :  [["V","Volt","volt","volts"], n(1.0), "potential", ["<meter>","<meter>","<kilogram>"], ["<second>","<second>","<second>","<ampere>"]],

    /* resistance */
    "<ohm>" :  [
      ["Ohm","ohm","Ohms","ohms","\u03A9"/*Ω as greek letter*/,"\u2126"/*Ω as ohm sign*/],
      n(1.0),
      "resistance",
      ["<meter>","<meter>","<kilogram>"],["<second>","<second>","<second>","<ampere>","<ampere>"]
    ],
    /* magnetism */
    "<weber>" : [["Wb","weber","webers"], n(1.0), "magnetism", ["<meter>","<meter>","<kilogram>"], ["<second>","<second>","<ampere>"]],
    "<tesla>"  : [["T","tesla","teslas"], n(1.0), "magnetism", ["<kilogram>"], ["<second>","<second>","<ampere>"]],
    "<gauss>" : [["G","gauss"], n(1e-4), "magnetism",  ["<kilogram>"], ["<second>","<second>","<ampere>"]],
    "<maxwell>" : [["Mx","maxwell","maxwells"], n(1e-8), "magnetism", ["<meter>","<meter>","<kilogram>"], ["<second>","<second>","<ampere>"]],
    "<oersted>"  : [["Oe","oersted","oersteds"], div(n(250.0), PI), "magnetism", ["<ampere>"], ["<meter>"]],

    /* energy */
    "<joule>" :  [["J","joule","Joule","joules","Joules"], n(1.0), "energy", ["<meter>","<meter>","<kilogram>"], ["<second>","<second>"]],
    "<erg>"   :  [["erg","ergs"], n(1e-7), "energy", ["<meter>","<meter>","<kilogram>"], ["<second>","<second>"]],
    "<btu>"   :  [["BTU","btu","BTUs"], n(1055.056), "energy", ["<meter>","<meter>","<kilogram>"], ["<second>","<second>"]],
    "<calorie>" :  [["cal","calorie","calories"], n(4.18400), "energy",["<meter>","<meter>","<kilogram>"], ["<second>","<second>"]],
    "<Calorie>" :  [["Cal","Calorie","Calories"], n(4184.00), "energy",["<meter>","<meter>","<kilogram>"], ["<second>","<second>"]],
    "<therm-US>" : [["th","therm","therms","Therm","therm-US"], n(105480400), "energy",["<meter>","<meter>","<kilogram>"], ["<second>","<second>"]],
    "<Wh>" : [["Wh"], n(3600), "energy",["<meter>","<meter>","<kilogram>"], ["<second>","<second>"]],
    "<electronvolt>" : [["eV", "electronvolt", "electronvolts"], n(1.602176634E-19), "energy", ["<meter>","<meter>","<kilogram>"], ["<second>","<second>"]],

    /* force */
    "<newton>"  : [["N","Newton","newton"], n(1.0), "force", ["<kilogram>","<meter>"], ["<second>","<second>"]],
    "<dyne>"  : [["dyn","dyne"], n(1e-5), "force", ["<kilogram>","<meter>"], ["<second>","<second>"]],
    "<pound-force>"  : [["lbf","pound-force"], n(4.448222), "force", ["<kilogram>","<meter>"], ["<second>","<second>"]],
    "<kilogram-force>"  : [["kgf","kilogram-force", "kilopond", "kp"], n(9.80665), "force", ["<kilogram>","<meter>"], ["<second>","<second>"]],
    "<gram-force>"  : [["gf","gram-force"], n(9.80665E-3), "force", ["<kilogram>","<meter>"], ["<second>","<second>"]],

    /* frequency */
    "<hertz>" : [["Hz","hertz","Hertz"], n(1.0), "frequency", ["<1>"], ["<second>"]],

    /* angle */
    "<radian>" :[["rad","radian","radians"], n(1.0), "angle", ["<radian>"]],
    "<degree>" :[["deg","degree","degrees"], div(PI, n(180.0)), "angle", ["<radian>"]],
    "<arcminute>" :[["arcmin","arcminute","arcminutes"], div(PI, n(10800.0)), "angle", ["<radian>"]],
    "<arcsecond>" :[["arcsec","arcsecond","arcseconds"], div(PI, n(648000.0)), "angle", ["<radian>"]],
    "<gradian>"   :[["gon","grad","gradian","grads"], div(PI, n(200.0)), "angle", ["<radian>"]],
    "<steradian>"  : [["sr","steradian","steradians"], n(1.0), "solid_angle", ["<steradian>"]],

    /* rotation */
    "<rotation>" : [["rotation"], mul(n(2.0), PI), "angle", ["<radian>"]],
    "<rpm>"   :[["rpm"], div(mul(n(2.0), PI), n(60.0)), "angular_velocity", ["<radian>"], ["<second>"]],

    /* information */
    "<byte>"  :[["B","byte","bytes"], n(1.0), "information", ["<byte>"]],
    "<bit>"  :[["b","bit","bits"], n(0.125), "information", ["<byte>"]],

    /* information rate */
    "<Bps>" : [["Bps"], n(1.0), "information_rate", ["<byte>"], ["<second>"]],
    "<bps>" : [["bps"], n(0.125), "information_rate", ["<byte>"], ["<second>"]],

    /* currency */
    "<dollar>":[["USD","dollar"], n(1.0), "currency", ["<dollar>"]],
    "<cents>" :[["cents"], n(0.01), "currency", ["<dollar>"]],

    /* luminosity */
    "<candela>" : [["cd","candela"], n(1.0), "luminosity", ["<candela>"]],
    "<lumen>" : [["lm","lumen"], n(1.0), "luminous_power", ["<candela>","<steradian>"]],
    "<lux>" :[["lux"], n(1.0), "illuminance", ["<candela>","<steradian>"], ["<meter>","<meter>"]],

    /* power */
    "<watt>"  : [["W","watt","watts"], n(1.0), "power", ["<kilogram>","<meter>","<meter>"], ["<second>","<second>","<second>"]],
    "<volt-ampere>"  : [["VA","volt-ampere"], n(1.0), "power", ["<kilogram>","<meter>","<meter>"], ["<second>","<second>","<second>"]],
    "<volt-ampere-reactive>"  : [["var","Var","VAr","VAR","volt-ampere-reactive"], n(1.0), "power", ["<kilogram>","<meter>","<meter>"], ["<second>","<second>","<second>"]],
    "<horsepower>"  :  [["hp","horsepower"], n(745.699872), "power", ["<kilogram>","<meter>","<meter>"], ["<second>","<second>","<second>"]],

    /* radiation */
    "<gray>" : [["Gy","gray","grays"], n(1.0), "radiation", ["<meter>","<meter>"], ["<second>","<second>"]],
    "<roentgen>" : [["R","roentgen"], n(0.009330), "radiation", ["<meter>","<meter>"], ["<second>","<second>"]],
    "<sievert>" : [["Sv","sievert","sieverts"], n(1.0), "radiation", ["<meter>","<meter>"], ["<second>","<second>"]],
    "<becquerel>" : [["Bq","becquerel","becquerels"], n(1.0), "radiation", ["<1>"],["<second>"]],
    "<curie>" : [["Ci","curie","curies"], n(3.7e10), "radiation", ["<1>"],["<second>"]],

    /* rate */
    "<cpm>" : [["cpm"], div(n(1.0), n(60.0)), "rate", ["<count>"],["<second>"]],
    "<dpm>" : [["dpm"], div(n(1.0), n(60.0)), "rate", ["<count>"],["<second>"]],
    "<bpm>" : [["bpm"], div(n(1.0), n(60.0)), "rate", ["<count>"],["<second>"]],

    /* resolution / typography */
    "<dot>" : [["dot","dots"], n(1), "resolution", ["<each>"]],
    "<pixel>" : [["pixel","px"], n(1), "resolution", ["<each>"]],
    "<ppi>" : [["ppi"], n(1), "resolution", ["<pixel>"], ["<inch>"]],
    "<dpi>" : [["dpi"], n(1), "typography", ["<dot>"], ["<inch>"]],

    /* other */
    "<cell>" : [["cells","cell"], n(1), "counting", ["<each>"]],
    "<each>" : [["each"], n(1.0), "counting", ["<each>"]],
    "<count>" : [["count"], n(1.0), "counting", ["<each>"]],
    "<base-pair>"  : [["bp","base-pair"], n(1.0), "counting", ["<each>"]],
    "<nucleotide>" : [["nt","nucleotide"], n(1.0), "counting", ["<each>"]],
    "<molecule>" : [["molecule","molecules"], n(1.0), "counting", ["<1>"]],
    "<dozen>" :  [["doz","dz","dozen"],n(12.0),"prefix_only", ["<each>"]],
    "<percent>": [["%","percent"], n(0.01), "prefix_only", ["<1>"]],
    "<ppm>" :  [["ppm"],n(1e-6), "prefix_only", ["<1>"]],
    "<ppb>" :  [["ppb"],n(1e-9), "prefix_only", ["<1>"]],
    "<ppt>" :  [["ppt"],n(1e-12), "prefix_only", ["<1>"]],
    "<ppq>" :  [["ppq"],n(1e-15), "prefix_only", ["<1>"]],
    "<gross>" :  [["gr","gross"],n(144.0), "prefix_only", ["<dozen>","<dozen>"]],
    "<decibel>"  : [["dB","decibel","decibels"], n(1.0), "logarithmic", ["<decibel>"]]
  };

  var BASE_UNITS = ["<meter>","<kilogram>","<second>","<mole>", "<ampere>","<radian>","<kelvin>","<temp-K>","<byte>","<dollar>","<candela>","<each>","<steradian>","<decibel>"];

  var UNITY = "<1>";
  var UNITY_ARRAY = [UNITY];

  // Setup

  /**
   * Asserts unit definition is valid
   *
   * @param {string} unitDef - Name of unit to test
   * @param {Object} definition - Definition of unit to test
   *
   * @returns {void}
   * @throws {QtyError} if unit definition is not valid
   */
  function validateUnitDefinition(unitDef, definition) {
    var scalar = definition[1];
    var numerator = definition[3] || [];
    var denominator = definition[4] || [];
    if (!Field.isMember(scalar)) {
      throw new QtyError(unitDef + ": Invalid unit definition. " +
                         "'scalar' must be a number");
    }

    numerator.forEach(function(unit) {
      if (UNITS[unit] === undefined) {
        throw new QtyError(unitDef + ": Invalid unit definition. " +
                           "Unit " + unit + " in 'numerator' is not recognized");
      }
    });

    denominator.forEach(function(unit) {
      if (UNITS[unit] === undefined) {
        throw new QtyError(unitDef + ": Invalid unit definition. " +
                           "Unit " + unit + " in 'denominator' is not recognized");
      }
    });
  }

  var PREFIX_VALUES = {};
  var PREFIX_MAP = {};
  var UNIT_VALUES = {};
  var UNIT_MAP = {};
  var OUTPUT_MAP = {};
  for (var unitDef in UNITS) {
    if (UNITS.hasOwnProperty(unitDef)) {
      var definition = UNITS[unitDef];
      if (definition[2] === "prefix") {
        PREFIX_VALUES[unitDef] = definition[1];
        for (var i = 0; i < definition[0].length; i++) {
          PREFIX_MAP[definition[0][i]] = unitDef;
        }
      }
      else {
        validateUnitDefinition(unitDef, definition);
        UNIT_VALUES[unitDef] = {
          scalar: definition[1],
          numerator: definition[3],
          denominator: definition[4]
        };
        for (var j = 0; j < definition[0].length; j++) {
          UNIT_MAP[definition[0][j]] = unitDef;
        }
      }
      OUTPUT_MAP[unitDef] = definition[0][0];
    }
  }

  /**
   * Returns a list of available units of kind
   *
   * @param {string} [kind] - kind of units
   * @returns {array} names of units
   * @throws {QtyError} if kind is unknown
   */
  function getUnits(kind) {
    var i;
    var units = [];
    var unitKeys = Object.keys(UNITS);
    if (typeof kind === "undefined") {
      for (i = 0; i < unitKeys.length; i++) {
        if (["", "prefix"].indexOf(UNITS[unitKeys[i]][2]) === -1) {
          units.push(unitKeys[i].substr(1, unitKeys[i].length - 2));
        }
      }
    }
    else if (this.getKinds().indexOf(kind) === -1) {
      throw new QtyError("Kind not recognized");
    }
    else {
      for (i = 0; i < unitKeys.length; i++) {
        if (UNITS[unitKeys[i]][2] === kind) {
          units.push(unitKeys[i].substr(1, unitKeys[i].length - 2));
        }
      }
    }

    return units.sort(function(a, b) {
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      }
      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }

  /**
   * Returns a list of alternative names for a unit
   *
   * @param {string} unitName - name of unit
   * @returns {string[]} aliases for unit
   * @throws {QtyError} if unit is unknown
   */
  function getAliases(unitName) {
    if (!UNIT_MAP[unitName]) {
      throw new QtyError("Unit not recognized");
    }
    return UNITS[UNIT_MAP[unitName]][0];
  }

  const SIGNATURE_VECTOR = ["length", "time", "temperature", "mass", "current", "substance", "luminosity", "currency", "information", "angle"];
  const SIGNATURE_POWER = 32;

  const BASE_SIGNATURES = Object.fromEntries(SIGNATURE_VECTOR.map((name,i) => [name, Math.pow(SIGNATURE_POWER, i)]));

  /*
  calculates the unit signature id for use in comparing compatible units and simplification
  the signature is based on a simple classification of units and is based on the following publication

  Novak, G.S., Jr. "Conversion of units of measurement", IEEE Transactions on Software Engineering,
  21(8), Aug 1995, pp.651-661
  doi://10.1109/32.403789
  http://ieeexplore.ieee.org/Xplore/login.jsp?url=/iel1/32/9079/00403789.pdf?isnumber=9079&prod=JNL&arnumber=403789&arSt=651&ared=661&arAuthor=Novak%2C+G.S.%2C+Jr.
  */
  function unitSignature() {
    if (this.signature) {
      return this.signature;
    }
    var vector = unitSignatureVector.call(this);
    return unitSignatureFromVector(vector);
  }

  function unitSignatureFromVector(vector) {
    let t = 1;
    let signature = 0;
    for (var i = 0; i < vector.length; i++) {
      signature += vector[i] * t;
      t *= SIGNATURE_POWER;
    }

    return signature;
  }

  // calculates the unit signature vector used by unit_signature
  function unitSignatureVector() {
    if (!this.isBase()) {
      return unitSignatureVector.call(this.toBase());
    }

    var vector = new Array(SIGNATURE_VECTOR.length);
    for (var i = 0; i < vector.length; i++) {
      vector[i] = 0;
    }
    var r, n;
    for (var j = 0; j < this.numerator.length; j++) {
      if ((r = UNITS[this.numerator[j]])) {
        n = SIGNATURE_VECTOR.indexOf(r[2]);
        if (n >= 0) {
          vector[n] = vector[n] + 1;
        }
      }
    }

    for (var k = 0; k < this.denominator.length; k++) {
      if ((r = UNITS[this.denominator[k]])) {
        n = SIGNATURE_VECTOR.indexOf(r[2]);
        if (n >= 0) {
          vector[n] = vector[n] - 1;
        }
      }
    }
    return vector;
  }

  /* Calculates the signature for a unit from a dictionary mapping dimensions to their powers.
   */
  function unitSignatureFromDict(dimensions) {
    var v = new Array(SIGNATURE_VECTOR.length);
    for (let i = 0; i < SIGNATURE_VECTOR.length; i++) {
      v[i] = dimensions[SIGNATURE_VECTOR[i]] || 0;
    }
    const signature = unitSignatureFromVector(v);
    return signature;
  }

  var SIGN = "[+-]";
  var INTEGER = "\\d+";
  var SIGNED_INTEGER = SIGN + "?" + INTEGER;
  var FRACTION = "\\." + INTEGER;
  var FLOAT = "(?:" + INTEGER + "(?:" + FRACTION + ")?" + ")" +
              "|" +
              "(?:" + FRACTION + ")";
  var EXPONENT = "[Ee]" + SIGNED_INTEGER;
  var SCI_NUMBER = "(?:" + FLOAT + ")(?:" + EXPONENT + ")?";
  var SIGNED_NUMBER = SIGN + "?\\s*" + SCI_NUMBER;
  var QTY_STRING = "(" + SIGNED_NUMBER + ")?" + "\\s*([^/]*)(?:\/(.+))?";
  var QTY_STRING_REGEX = new RegExp("^" + QTY_STRING + "$");

  var POWER_OP = "\\^|\\*{2}";
  // Allow unit powers representing scalar, length, area, volume; 4 is for some
  // special case representations in SI base units.
  var SAFE_POWER = "[01234]";
  var TOP_REGEX = new RegExp ("([^ \\*\\d]+?)(?:" + POWER_OP + ")?(-?" + SAFE_POWER + "(?![a-zA-Z]))");
  var BOTTOM_REGEX = new RegExp("([^ \\*\\d]+?)(?:" + POWER_OP + ")?(" + SAFE_POWER + "(?![a-zA-Z]))");

  /* parse a string into a unit object.
   * Typical formats like :
   * "5.6 kg*m/s^2"
   * "5.6 kg*m*s^-2"
   * "5.6 kilogram*meter*second^-2"
   * "2.2 kPa"
   * "37 degC"
   * "1"  -- creates a unitless constant with value 1
   * "GPa"  -- creates a unit with scalar 1 with units 'GPa'
   * 6'4"  -- recognized as 6 feet + 4 inches
   * 8 lbs 8 oz -- recognized as 8 lbs + 8 ounces
   */
  function parse(val) {
    if (!isString(val)) {
      val = val.toString();
    }
    val = val.trim();

    var result = QTY_STRING_REGEX.exec(val);
    if (!result) {
      throw new QtyError(val + ": Quantity not recognized");
    }

    var scalarMatch = result[1];
    if (scalarMatch) {
      // Allow whitespaces between sign and scalar for loose parsing
      scalarMatch = scalarMatch.replace(/\s/g, "");
      this.scalar = Field.fromString(scalarMatch);
    }
    else {
      this.scalar = Field.one();
    }
    var top = result[2];
    var bottom = result[3];

    var n, x, nx;
    // TODO DRY me
    while ((result = TOP_REGEX.exec(top))) {
      n = parseFloat(result[2]);
      if (isNaN(n)) {
        // Prevents infinite loops
        throw new QtyError("Unit exponent is not a number");
      }
      // Disallow unrecognized unit even if exponent is 0
      if (n === 0 && !UNIT_TEST_REGEX.test(result[1])) {
        throw new QtyError("Unit not recognized");
      }
      x = result[1] + " ";
      nx = "";
      for (var i = 0; i < Math.abs(n) ; i++) {
        nx += x;
      }
      if (n >= 0) {
        top = top.replace(result[0], nx);
      }
      else {
        bottom = bottom ? bottom + nx : nx;
        top = top.replace(result[0], "");
      }
    }

    while ((result = BOTTOM_REGEX.exec(bottom))) {
      n = parseFloat(result[2]);
      if (isNaN(n)) {
        // Prevents infinite loops
        throw new QtyError("Unit exponent is not a number");
      }
      // Disallow unrecognized unit even if exponent is 0
      if (n === 0 && !UNIT_TEST_REGEX.test(result[1])) {
        throw new QtyError("Unit not recognized");
      }
      x = result[1] + " ";
      nx = "";
      for (var j = 0; j < n ; j++) {
        nx += x;
      }

      bottom = bottom.replace(result[0], nx);
    }

    if (top) {
      this.numerator = parseUnits(top.trim());
    }
    if (bottom) {
      this.denominator = parseUnits(bottom.trim());
    }
  }

  var PREFIX_REGEX = Object.keys(PREFIX_MAP).sort(function(a, b) {
    return b.length - a.length;
  }).join("|");
  var UNIT_REGEX = Object.keys(UNIT_MAP).sort(function(a, b) {
    return b.length - a.length;
  }).join("|");
  /*
   * Minimal boundary regex to support units with Unicode characters
   * \b only works for ASCII
   */
  var BOUNDARY_REGEX = "\\b|$";
  var UNIT_MATCH = "(" + PREFIX_REGEX + ")??(" +
                   UNIT_REGEX +
                   ")(?:" + BOUNDARY_REGEX + ")";
  var UNIT_TEST_REGEX = new RegExp("^\\s*(" + UNIT_MATCH + "[\\s\\*/]*)+$");
  var UNIT_MATCH_REGEX = new RegExp(UNIT_MATCH, "g"); // g flag for multiple occurences
  var parsedUnitsCache = {};
  /**
   * Parses and converts units string to normalized unit array.
   * Result is cached to speed up next calls.
   *
   * @param {string} units Units string
   * @returns {string[]} Array of normalized units
   *
   * @example
   * // Returns ["<second>", "<meter>", "<second>"]
   * parseUnits("s m s");
   *
   */
  function parseUnits(units) {
    var cached = parsedUnitsCache[units];
    if (cached) {
      return cached;
    }

    var unitMatch, normalizedUnits = [];

    // Scan
    if (!UNIT_TEST_REGEX.test(units)) {
      throw new QtyError("Unit not recognized");
    }

    while ((unitMatch = UNIT_MATCH_REGEX.exec(units))) {
      normalizedUnits.push(unitMatch.slice(1));
    }

    normalizedUnits = normalizedUnits.map(function(item) {
      return PREFIX_MAP[item[0]] ? [PREFIX_MAP[item[0]], UNIT_MAP[item[1]]] : [UNIT_MAP[item[1]]];
    });

    // Flatten and remove null elements
    normalizedUnits = normalizedUnits.reduce(function(a,b) {
      return a.concat(b);
    }, []);
    normalizedUnits = normalizedUnits.filter(function(item) {
      return item;
    });

    parsedUnitsCache[units] = normalizedUnits;

    return normalizedUnits;
  }

  /**
   * Parses a string as a quantity
   * @param {string} value - quantity as text
   * @throws if value is not a string
   * @returns {Qty|null} Parsed quantity or null if unrecognized
   */
  function globalParse(value) {
    if (!isString(value)) {
      throw new QtyError("Argument should be a string");
    }

    try {
      return this(value);
    }
    catch (e) {
      return null;
    }
  }

  /**
   * Tests if a value is a Qty instance
   *
   * @param {*} value - Value to test
   *
   * @returns {boolean} true if value is a Qty instance, false otherwise
   */
  function isQty(value) {
    return value instanceof Qty;
  }

  function Qty(initValue, initUnits) {
    assertValidConstructorArgs.apply(null, arguments);

    if (!(isQty(this))) {
      return new Qty(initValue, initUnits);
    }

    this.scalar = null;
    this.baseScalar = null;
    this.signature = null;
    this._conversionCache = {};
    this.numerator = UNITY_ARRAY;
    this.denominator = UNITY_ARRAY;

    if (isDefinitionObject(initValue)) {
      this.scalar = Field.isMember(initValue.scalar) ? initValue.scalar : Field.fromNumber(initValue.scalar);
      this.numerator = (initValue.numerator && initValue.numerator.length !== 0) ? initValue.numerator : UNITY_ARRAY;
      this.denominator = (initValue.denominator && initValue.denominator.length !== 0) ? initValue.denominator : UNITY_ARRAY;
    }
    else if (initUnits) {
      parse.call(this, initUnits);
      this.scalar = Field.isMember(initValue) ? initValue : Field.fromNumber(initValue);
    }
    else {
      parse.call(this, initValue);
    }

    // math with temperatures is very limited
    if (this.denominator.join("*").indexOf("temp") >= 0) {
      throw new QtyError("Cannot divide with temperatures");
    }
    if (this.numerator.join("*").indexOf("temp") >= 0) {
      if (this.numerator.length > 1) {
        throw new QtyError("Cannot multiply by temperatures");
      }
      if (!compareArray(this.denominator, UNITY_ARRAY)) {
        throw new QtyError("Cannot divide with temperatures");
      }
    }

    this.initValue = initValue;
    updateBaseScalar.call(this);

    if (this.isTemperature() && Field.lt(this.baseScalar, Field.zero())) {
      throw new QtyError("Temperatures must not be less than absolute zero");
    }
  }

  Qty.prototype = {
    // Properly set up constructor
    constructor: Qty,
    field: Field,
    fields: fields
  };

  /**
   * Asserts constructor arguments are valid
   *
   * @param {*} value - Value to test
   * @param {string} [units] - Optional units when value is passed as a number
   *
   * @returns {void}
   * @throws {QtyError} if constructor arguments are invalid
   */
  function assertValidConstructorArgs(value, units) {
    if (units) {
      if (!((Field.isMember(value) || isNumber(value)) && isString(units))) {
        throw new QtyError("Only number accepted as initialization value " +
                           "when units are explicitly provided");
      }
    }
    else {
      if (!(isString(value) ||
            Field.isMember(value) ||
            isNumber(value) ||
            isQty(value)    ||
            isDefinitionObject(value))) {
        throw new QtyError("Only string, number or quantity accepted as " +
                           "single initialization value");
      }
    }
  }

  /**
   * Tests if a value is a Qty definition object
   *
   * @param {*} value - Value to test
   *
   * @returns {boolean} true if value is a definition object, false otherwise
   */
  function isDefinitionObject(value) {
    return value && typeof value === "object" && value.hasOwnProperty("scalar");
  }

  function updateBaseScalar() {
    if (this.baseScalar) {
      return this.baseScalar;
    }
    if (this.isBase()) {
      this.baseScalar = this.scalar;
      this.signature = unitSignature.call(this);
    }
    else {
      var base = this.toBase();
      this.baseScalar = base.scalar;
      this.signature = base.signature;
    }
  }

  var KINDS_DICT = [
    [
      {  },
      "unitless"
    ],
    [
      { "length": 1 },
      "length"
    ],
    [
      { "length": 2 },
      "area"
    ],
    [
      { "length": 3 },
      "volume"
    ],
    [
      { "time": 1 },
      "time"
    ],
    [
      { "temperature": 1 },
      "temperature"
    ],
    [
      { "length": 1, "time": -3, "mass": 1 },
      "yank"
    ],
    [
      { "length": 2, "time": -3, "mass": 1 },
      "power"
    ],
    [
      { "length": -1, "time": -2, "mass": 1 },
      "pressure"
    ],
    [
      { "length": 1, "time": -2, "mass": 1 },
      "force"
    ],
    [
      { "length": 2, "time": -2, "mass": 1 },
      "energy"
    ],
    [
      { "length": -1, "time": -1, "mass": 1 },
      "viscosity"
    ],
    [
      { "length": 1, "time": -1, "mass": 1 },
      "momentum"
    ],
    [
      { "length": 2, "time": -1, "mass": 1 },
      "angular_momentum"
    ],
    [
      { "length": -3, "mass": 1 },
      "density"
    ],
    [
      { "length": -2, "mass": 1 },
      "area_density"
    ],
    [
      { "mass": 1 },
      "mass"
    ],
    [
      { "time": 1, "mass": -1, "current": 1 },
      "radiation_exposure"
    ],
    [
      { "length": -1, "current": 1 },
      "magnetism"
    ],
    [
      { "current": 1 },
      "current"
    ],
    [
      { "time": 1, "current": 1 },
      "charge"
    ],
    [
      { "length": -2, "time": 3, "mass": -1, "current": 2 },
      "conductance"
    ],
    [
      { "length": -2, "time": 4, "mass": -1, "current": 2 },
      "capacitance"
    ],
    [
      { "time": -1, "substance": 1 },
      "activity"
    ],
    [
      { "length": -3, "substance": 1 },
      "molar_concentration"
    ],
    [
      { "substance": 1 },
      "substance"
    ],
    [
      { "length": -2, "luminosity": 1 },
      "illuminance"
    ],
    [
      { "luminosity": 1 },
      "luminous_power"
    ],
    [
      { "currency": 1 },
      "currency"
    ],
    [
      { "length": 2, "time": -4, "mass": 1, "current": -2 },
      "elastance"
    ],
    [
      { "length": 2, "time": -3, "mass": 1, "current": -2 },
      "resistance"
    ],
    [
      { "length": 2, "time": -2, "mass": 1, "current": -2 },
      "inductance"
    ],
    [
      { "length": 2, "time": -3, "mass": 1, "current": -1 },
      "potential"
    ],
    [
      { "time": -2, "mass": 1, "current": -1 },
      "magnetism"
    ],
    [
      { "length": 2, "time": -2, "mass": 1, "current": -1 },
      "magnetism"
    ],
    [
      { "length": 3, "mass": -1 },
      "specific_volume"
    ],
    [
      { "length": 1, "time": -4 },
      "snap"
    ],
    [
      { "length": 1, "time": -3 },
      "jolt"
    ],
    [
      { "length": 1, "time": -2 },
      "acceleration"
    ],
    [
      { "length": 2, "time": -2 },
      "radiation"
    ],
    [
      { "time": -1 },
      "frequency"
    ],
    [
      { "length": 1, "time": -1 },
      "speed"
    ],
    [
      { "length": 2, "time": -1 },
      "viscosity"
    ],
    [
      { "length": 3, "time": -1 },
      "volumetric_flow"
    ],
    [
      { "length": -1 },
      "wavenumber"
    ],
    [
      { "time": -1, "information": 1 },
      "information_rate"
    ],
    [
      { "information": 1 },
      "information"
    ],
    [
      { "time": -1, "angle": 1 },
      "angular_velocity"
    ],
    [
      { "angle": 1 },
      "angle"
    ]
  ];

  var KINDS = Object.fromEntries(KINDS_DICT.map(([dimensions, name]) => [ unitSignatureFromDict(dimensions), name ]));

  /**
   * Returns the list of available well-known kinds of units, e.g.
   * "radiation" or "length".
   *
   * @returns {string[]} names of kinds of units
   */
  function getKinds() {
    return uniq(Object.keys(KINDS).map(function(knownSignature) {
      return KINDS[knownSignature];
    }));
  }

  Qty.prototype.kind = function() {
    return KINDS[this.signature.toString()];
  };

  assign(Qty.prototype, {
    isDegrees: function() {
      // signature may not have been calculated yet
      return (this.signature === null || this.signature === BASE_SIGNATURES["temperature"]) &&
        this.numerator.length === 1 &&
        compareArray(this.denominator, UNITY_ARRAY) &&
        (this.numerator[0].match(/<temp-[CFRK]>/) || this.numerator[0].match(/<(kelvin|celsius|rankine|fahrenheit)>/));
    },

    isTemperature: function() {
      return this.isDegrees() && this.numerator[0].match(/<temp-[CFRK]>/);
    }
  });

  function subtractTemperatures(lhs,rhs) {
    var lhsUnits = lhs.units();
    var rhsConverted = rhs.to(lhsUnits);
    var dstDegrees = Qty(getDegreeUnits(lhsUnits));
    return Qty({"scalar": Field.sub(lhs.scalar, rhsConverted.scalar), "numerator": dstDegrees.numerator, "denominator": dstDegrees.denominator});
  }

  function subtractTempDegrees(temp,deg) {
    var tempDegrees = deg.to(getDegreeUnits(temp.units()));
    return Qty({"scalar": Field.sub(temp.scalar, tempDegrees.scalar), "numerator": temp.numerator, "denominator": temp.denominator});
  }

  function addTempDegrees(temp,deg) {
    var tempDegrees = deg.to(getDegreeUnits(temp.units()));
    return Qty({"scalar": Field.add(temp.scalar, tempDegrees.scalar), "numerator": temp.numerator, "denominator": temp.denominator});
  }

  function getDegreeUnits(units) {
    if (units === "tempK") {
      return "degK";
    }
    else if (units === "tempC") {
      return "degC";
    }
    else if (units === "tempF") {
      return "degF";
    }
    else if (units === "tempR") {
      return "degR";
    }
    else {
      throw new QtyError("Unknown type for temp conversion from: " + units);
    }
  }

  var five = Field.fromNumber(5);
  var nine = Field.fromNumber(9);
  function toDegrees(src,dst) {
    var srcDegK = toDegK(src);
    var dstUnits = dst.units();
    var dstScalar;

    if (dstUnits === "degK") {
      dstScalar = srcDegK.scalar;
    }
    else if (dstUnits === "degC") {
      dstScalar = srcDegK.scalar ;
    }
    else if (dstUnits === "degF") {
      dstScalar = Field.div(Field.mul(srcDegK.scalar, nine), five);
    }
    else if (dstUnits === "degR") {
      dstScalar = Field.dive(Field.mul(srcDegK.scalar, nine), five);
    }
    else {
      throw new QtyError("Unknown type for degree conversion to: " + dstUnits);
    }

    return Qty({"scalar": dstScalar, "numerator": dst.numerator, "denominator": dst.denominator});
  }

  function toDegK(qty) {
    var units = qty.units();
    var q;
    if (units.match(/(deg)[CFRK]/)) {
      q = qty.baseScalar;
    }
    else if (units === "tempK") {
      q = qty.scalar;
    }
    else if (units === "tempC") {
      q = qty.scalar;
    }
    else if (units === "tempF") {
      q = Field.div(Field.mul(qty.scalar, five),nine);
    }
    else if (units === "tempR") {
      q = Field.div(Field.mul(qty.scalar, five),nine);
    }
    else {
      throw new QtyError("Unknown type for temp conversion from: " + units);
    }

    return Qty({"scalar": q, "numerator": ["<kelvin>"], "denominator": UNITY_ARRAY});
  }

  function toTemp(src,dst) {
    var dstUnits = dst.units();
    var dstScalar;

    if (dstUnits === "tempK") {
      dstScalar = src.baseScalar;
    }
    else if (dstUnits === "tempC") {
      dstScalar = Field.sub(src.baseScalar, Field.fromNumber(273.15));
    }
    else if (dstUnits === "tempF") {
      dstScalar = Field.sub(Field.div(Field.mul(src.baseScalar, nine), five), Field.fromNumber(459.67));
    }
    else if (dstUnits === "tempR") {
      dstScalar = Field.div(Field.mul(src.baseScalar, nine), five);
    }
    else {
      throw new QtyError("Unknown type for temp conversion to: " + dstUnits);
    }

    return Qty({"scalar": dstScalar, "numerator": dst.numerator, "denominator": dst.denominator});
  }

  function toTempK(qty) {
    var units = qty.units();
    var q;
    if (units.match(/(deg)[CFRK]/)) {
      q = qty.baseScalar;
    }
    else if (units === "tempK") {
      q = qty.scalar;
    }
    else if (units === "tempC") {
      q = Field.add(qty.scalar, Field.fromNumber(273.15));
    }
    else if (units === "tempF") {
      q = Field.div(Field.mul(Field.add(qty.scalar, Field.fromNumber(459.67)), five), nine);
    }
    else if (units === "tempR") {
      q = Field.div(Field.mul(qty.scalar, five), nine);
    }
    else {
      throw new QtyError("Unknown type for temp conversion from: " + units);
    }

    return Qty({"scalar": q, "numerator": ["<temp-K>"], "denominator": UNITY_ARRAY});
  }

  assign(Qty.prototype, {
    /**
     * Converts to other compatible units.
     * Instance's converted quantities are cached for faster subsequent calls.
     *
     * @param {(string|Qty)} other - Target units as string or retrieved from
     *                               other Qty instance (scalar is ignored)
     *
     * @returns {Qty} New converted Qty instance with target units
     *
     * @throws {QtyError} if target units are incompatible
     *
     * @example
     * var weight = Qty("25 kg");
     * weight.to("lb"); // => Qty("55.11556554621939 lbs");
     * weight.to(Qty("3 g")); // => Qty("25000 g"); // scalar of passed Qty is ignored
     */
    to: function(other) {
      var cached, target;

      if (other === undefined || other === null) {
        return this;
      }

      if (!isString(other)) {
        return this.to(other.units());
      }

      cached = this._conversionCache[other];
      if (cached) {
        return cached;
      }

      // Instantiating target to normalize units
      target = Qty(other);
      if (target.units() === this.units()) {
        return this;
      }

      if (!this.isCompatible(target)) {
        if (this.isInverse(target)) {
          target = this.inverse().to(other);
        }
        else {
          throwIncompatibleUnits(this.units(), target.units());
        }
      }
      else {
        if (target.isTemperature()) {
          target = toTemp(this,target);
        }
        else if (target.isDegrees()) {
          target = toDegrees(this,target);
        }
        else {
          var q = Field.divSafe(this.baseScalar, target.baseScalar);
          target = Qty({"scalar": q, "numerator": target.numerator, "denominator": target.denominator});
        }
      }

      this._conversionCache[other] = target;
      return target;
    },

    // convert to base SI units
    // results of the conversion are cached so subsequent calls to this will be fast
    toBase: function() {
      if (this.isBase()) {
        return this;
      }

      if (this.isTemperature()) {
        return toTempK(this);
      }

      var cached = baseUnitCache[this.units()];
      if (!cached) {
        cached = toBaseUnits(this.numerator,this.denominator);
        baseUnitCache[this.units()] = cached;
      }
      return cached.mul(this.scalar);
    },

    // Converts the unit back to a float if it is unitless.  Otherwise raises an exception
    toFloat: function() {
      if (this.isUnitless()) {
        return Field.toNumber(this.scalar);
      }
      throw new QtyError("Can't convert to Float unless unitless.  Use Unit#scalar");
    },

    /**
     * Returns the nearest multiple of quantity passed as
     * precision
     *
     * @param {(Qty|string|number)} precQuantity - Quantity, string formated
     *   quantity or number as expected precision
     *
     * @returns {Qty} Nearest multiple of precQuantity
     *
     * @example
     * Qty('5.5 ft').toPrec('2 ft'); // returns 6 ft
     * Qty('0.8 cu').toPrec('0.25 cu'); // returns 0.75 cu
     * Qty('6.3782 m').toPrec('cm'); // returns 6.38 m
     * Qty('1.146 MPa').toPrec('0.1 bar'); // returns 1.15 MPa
     *
     */
    toPrec: function(precQuantity) {
      if (isString(precQuantity)) {
        precQuantity = Qty(precQuantity);
      }
      if (isNumber(precQuantity)) {
        precQuantity = Qty(precQuantity + " " + this.units());
      }

      if (!this.isUnitless()) {
        precQuantity = precQuantity.to(this.units());
      }
      else if (!precQuantity.isUnitless()) {
        throwIncompatibleUnits(this.units(), precQuantity.units());
      }

      if (Field.isExactlyZero(precQuantity.scalar)) {
        throw new QtyError("Divide by zero");
      }

      var precRoundedResult = Field.mulSafe(Field.round(
        Field.div(this.scalar, precQuantity.scalar)),
      precQuantity.scalar);

      return Qty(precRoundedResult, this.units());
    }
  });

  /**
   * Configures and returns a fast function to convert
   * Number values from units to others.
   * Useful to efficiently convert large array of values
   * with same units into others with iterative methods.
   * Does not take care of rounding issues.
   *
   * @param {string} srcUnits Units of values to convert
   * @param {string} dstUnits Units to convert to
   *
   * @returns {Function} Converting function accepting Number value
   *   and returning converted value
   *
   * @throws "Incompatible units" if units are incompatible
   *
   * @example
   * // Converting large array of numbers with the same units
   * // into other units
   * var converter = Qty.swiftConverter("m/h", "ft/s");
   * var convertedSerie = largeSerie.map(converter);
   *
   */
  function swiftConverter(srcUnits, dstUnits) {
    var srcQty = Qty(srcUnits);
    var dstQty = Qty(dstUnits);

    if (srcQty.eq(dstQty)) {
      return identity;
    }

    var convert;
    if (!srcQty.isTemperature()) {
      convert = function(value) {
        return Field.mul(value, Field.div(srcQty.baseScalar, dstQty.baseScalar));
      };
    }
    else {
      convert = function(value) {
        // TODO Not optimized
        return srcQty.mul(value).to(dstQty).scalar;
      };
    }

    return function converter(value) {
      var i, length, result;
      if (!Array.isArray(value)) {
        return convert(value);
      }
      else {
        length = value.length;
        result = [];
        for (i = 0; i < length; i++) {
          result.push(convert(value[i]));
        }
        return result;
      }
    };
  }

  var baseUnitCache = {};

  function toBaseUnits(numerator,denominator) {
    var num = [];
    var den = [];
    var q = Field.one();
    var unit;
    for (var i = 0; i < numerator.length; i++) {
      unit = numerator[i];
      if (PREFIX_VALUES[unit]) {
        // workaround to fix
        // 0.1 * 0.1 => 0.010000000000000002
        q = Field.mulSafe(q, PREFIX_VALUES[unit]);
      }
      else {
        if (UNIT_VALUES[unit]) {
          q = Field.mul(q, UNIT_VALUES[unit].scalar);

          if (UNIT_VALUES[unit].numerator) {
            num.push(UNIT_VALUES[unit].numerator);
          }
          if (UNIT_VALUES[unit].denominator) {
            den.push(UNIT_VALUES[unit].denominator);
          }
        }
      }
    }
    for (var j = 0; j < denominator.length; j++) {
      unit = denominator[j];
      if (PREFIX_VALUES[unit]) {
        q = Field.div(q, PREFIX_VALUES[unit]);
      }
      else {
        if (UNIT_VALUES[unit]) {
          q = Field.div(q, UNIT_VALUES[unit].scalar);

          if (UNIT_VALUES[unit].numerator) {
            den.push(UNIT_VALUES[unit].numerator);
          }
          if (UNIT_VALUES[unit].denominator) {
            num.push(UNIT_VALUES[unit].denominator);
          }
        }
      }
    }

    // Flatten
    num = num.reduce(function(a,b) {
      return a.concat(b);
    }, []);
    den = den.reduce(function(a,b) {
      return a.concat(b);
    }, []);

    return Qty({"scalar": q, "numerator": num, "denominator": den});
  }

  Qty.parse = globalParse;

  Qty.getUnits = getUnits;
  Qty.getAliases = getAliases;

  Qty.mulSafe = mulSafe;
  Qty.divSafe = divSafe;

  Qty.KINDS = KINDS;
  Qty.getKinds = getKinds;

  Qty.swiftConverter = swiftConverter;

  Qty.Error = QtyError;

  Qty.SIGNATURE_VECTOR = SIGNATURE_VECTOR;
  Qty.SIGNATURE_POWER = SIGNATURE_POWER;

  assign(Qty.prototype, {
    // Returns new instance with units of this
    add: function(other) {
      if (isString(other)) {
        other = Qty(other);
      }

      if (!this.isCompatible(other)) {
        throwIncompatibleUnits(this.units(), other.units());
      }

      if (this.isTemperature() && other.isTemperature()) {
        throw new QtyError("Cannot add two temperatures");
      }
      else if (this.isTemperature()) {
        return addTempDegrees(this, other);
      }
      else if (other.isTemperature()) {
        return addTempDegrees(other, this);
      }

      return Qty({"scalar": Field.add(this.scalar, other.to(this).scalar), "numerator": this.numerator, "denominator": this.denominator});
    },

    sub: function(other) {
      if (isString(other)) {
        other = Qty(other);
      }

      if (!this.isCompatible(other)) {
        throwIncompatibleUnits(this.units(), other.units());
      }

      if (this.isTemperature() && other.isTemperature()) {
        return subtractTemperatures(this,other);
      }
      else if (this.isTemperature()) {
        return subtractTempDegrees(this,other);
      }
      else if (other.isTemperature()) {
        throw new QtyError("Cannot subtract a temperature from a differential degree unit");
      }

      return Qty({"scalar": Field.sub(this.scalar, other.to(this).scalar), "numerator": this.numerator, "denominator": this.denominator});
    },

    mul: function(other) {
      if (Field.isMember(other)) {
        return Qty({"scalar": Field.mulSafe(this.scalar, other), "numerator": this.numerator, "denominator": this.denominator});
      }
      else if (isNumber(other)) {
        return Qty({"scalar": Field.mulSafe(this.scalar, Field.fromNumber(other)), "numerator": this.numerator, "denominator": this.denominator});
      }
      else if (isString(other)) {
        other = Qty(other);
      }

      if ((this.isTemperature() || other.isTemperature()) && !(this.isUnitless() || other.isUnitless())) {
        throw new QtyError("Cannot multiply by temperatures");
      }

      // Quantities should be multiplied with same units if compatible, with base units else
      var op1 = this;
      var op2 = other;

      // so as not to confuse results, multiplication and division between temperature degrees will maintain original unit info in num/den
      // multiplication and division between deg[CFRK] can never factor each other out, only themselves: "degK*degC/degC^2" == "degK/degC"
      if (op1.isCompatible(op2) && op1.signature !== BASE_SIGNATURES["temperature"]) {
        op2 = op2.to(op1);
      }
      var numdenscale = cleanTerms(op1.numerator, op1.denominator, op2.numerator, op2.denominator);

      return Qty({"scalar": Field.mulSafe(op1.scalar, op2.scalar, numdenscale[2]), "numerator": numdenscale[0], "denominator": numdenscale[1]});
    },

    div: function(other) {
      if (Field.isMember(other)) {
        if (Field.isExactlyZero(other)) {
          throw new QtyError("Divide by zero");
        }
        return Qty({"scalar": Field.div(this.scalar, other), "numerator": this.numerator, "denominator": this.denominator});
      }
      else if (isNumber(other)) {
        if (other === 0) {
          throw new QtyError("Divide by zero");
        }
        return Qty({"scalar": Field.div(this.scalar, Field.fromNumber(other)), "numerator": this.numerator, "denominator": this.denominator});
      }
      else if (isString(other)) {
        other = Qty(other);
      }

      if (Field.isExactlyZero(other.scalar)) {
        throw new QtyError("Divide by zero");
      }

      if (other.isTemperature()) {
        throw new QtyError("Cannot divide with temperatures");
      }
      else if (this.isTemperature() && !other.isUnitless()) {
        throw new QtyError("Cannot divide with temperatures");
      }

      // Quantities should be multiplied with same units if compatible, with base units else
      var op1 = this;
      var op2 = other;

      // so as not to confuse results, multiplication and division between temperature degrees will maintain original unit info in num/den
      // multiplication and division between deg[CFRK] can never factor each other out, only themselves: "degK*degC/degC^2" == "degK/degC"
      if (op1.isCompatible(op2) && op1.signature !== BASE_SIGNATURES["temperature"]) {
        op2 = op2.to(op1);
      }
      var numdenscale = cleanTerms(op1.numerator, op1.denominator, op2.denominator, op2.numerator);

      return Qty({"scalar": Field.div(Field.mulSafe(op1.scalar, numdenscale[2]), op2.scalar), "numerator": numdenscale[0], "denominator": numdenscale[1]});
    },

    // Returns a Qty that is the inverse of this Qty,
    inverse: function() {
      if (this.isTemperature()) {
        throw new QtyError("Cannot divide with temperatures");
      }
      if (Field.isExactlyZero(this.scalar)) {
        throw new QtyError("Divide by zero");
      }
      return Qty({"scalar": Field.inverse(this.scalar), "numerator": this.denominator, "denominator": this.numerator});
    }
  });

  function cleanTerms(num1, den1, num2, den2) {
    function notUnity(val) {
      return val !== UNITY;
    }

    num1 = num1.filter(notUnity);
    num2 = num2.filter(notUnity);
    den1 = den1.filter(notUnity);
    den2 = den2.filter(notUnity);

    var combined = {};

    function combineTerms(terms, direction) {
      var k;
      var j;
      var prefix;
      var prefixValue;
      for (var i = 0; i < terms.length; i++) {
        if (PREFIX_VALUES[terms[i]]) {
          k = terms[i + 1];
          prefix = terms[i];
          prefixValue = PREFIX_VALUES[prefix];
          i++;
        }
        else {
          k = terms[i];
          prefix = null;
          prefixValue = Field.one();
        }
        if (k && k !== UNITY) {
          if (combined[k]) {
            combined[k][0] += direction;
            var combinedPrefixValue = combined[k][2] ? PREFIX_VALUES[combined[k][2]] : Field.one();
            j = direction === 1 ? 3 : 4;
            combined[k][j] = Field.mul(combined[k][j], Field.divSafe(prefixValue, combinedPrefixValue));
          }
          else {
            combined[k] = [direction, k, prefix, Field.one(), Field.one()];
          }
        }
      }
    }

    combineTerms(num1, 1);
    combineTerms(den1, -1);
    combineTerms(num2, 1);
    combineTerms(den2, -1);

    var num = [];
    var den = [];
    var scale = Field.one();

    for (var prop in combined) {
      if (combined.hasOwnProperty(prop)) {
        var item = combined[prop];
        var n;
        if (item[0] > 0) {
          for (n = 0; n < item[0]; n++) {
            num.push(item[2] === null ? item[1] : [item[2], item[1]]);
          }
        }
        else if (item[0] < 0) {
          for (n = 0; n < -item[0]; n++) {
            den.push(item[2] === null ? item[1] : [item[2], item[1]]);
          }
        }
        scale = Field.mul(scale, Field.divSafe(item[3], item[4]));
      }
    }

    if (num.length === 0) {
      num = UNITY_ARRAY;
    }
    if (den.length === 0) {
      den = UNITY_ARRAY;
    }

    // Flatten
    num = num.reduce(function(a,b) {
      return a.concat(b);
    }, []);
    den = den.reduce(function(a,b) {
      return a.concat(b);
    }, []);

    return [num, den, scale];
  }

  assign(Qty.prototype, {
    eq: function(other) {
      return this.compareTo(other) === 0;
    },

    lt: function(other) {
      return this.compareTo(other) === -1;
    },

    lte: function(other) {
      return this.eq(other) || this.lt(other);
    },

    gt: function(other) {
      return this.compareTo(other) === 1;
    },

    gte: function(other) {
      return this.eq(other) || this.gt(other);
    },

    // Compare two Qty objects. Throws an exception if they are not of compatible types.
    // Comparisons are done based on the value of the quantity in base SI units.
    //
    // NOTE: We cannot compare inverses as that breaks the general compareTo contract:
    //   if a.compareTo(b) < 0 then b.compareTo(a) > 0
    //   if a.compareTo(b) == 0 then b.compareTo(a) == 0
    //
    //   Since "10S" == ".1ohm" (10 > .1) and "10ohm" == ".1S" (10 > .1)
    //     Qty("10S").inverse().compareTo("10ohm") == -1
    //     Qty("10ohm").inverse().compareTo("10S") == -1
    //
    //   If including inverses in the sort is needed, I suggest writing: Qty.sort(qtyArray,units)
    compareTo: function(other) {
      if (isString(other)) {
        return this.compareTo(Qty(other));
      }
      if (!this.isCompatible(other)) {
        throwIncompatibleUnits(this.units(), other.units());
      }
      if (Field.lt(this.baseScalar, other.baseScalar)) {
        return -1;
      }
      else if (Field.eq(this.baseScalar, other.baseScalar)) {
        return 0;
      }
      else if (Field.gt(this.baseScalar, other.baseScalar)) {
        return 1;
      }
    },

    // Return true if quantities and units match
    // Unit("100 cm").same(Unit("100 cm"))  # => true
    // Unit("100 cm").same(Unit("1 m"))     # => false
    same: function(other) {
      return (Field.eq(this.scalar, other.scalar)) && (this.units() === other.units());
    }
  });

  const angleMask = (SIGNATURE_POWER - 1) * Math.pow(SIGNATURE_POWER, SIGNATURE_VECTOR.indexOf("angle"));
  const allMask = Math.pow(SIGNATURE_POWER, SIGNATURE_VECTOR.length) - 1;
  const nonAngleMask = allMask - angleMask;

  assign(Qty.prototype, {
    // returns true if no associated units
    // false, even if the units are "unitless" like 'radians, each, etc'
    isUnitless: function() {
      return [this.numerator, this.denominator].every(function(item) {
        return compareArray(item, UNITY_ARRAY);
      });
    },

    /*
    check to see if units are compatible, but not the scalar part
    this check is done by comparing signatures for performance reasons
    if passed a string, it will create a unit object with the string and then do the comparison
    this permits a syntax like:
    unit =~ "mm"
    if you want to do a regexp on the unit string do this ...
    unit.units =~ /regexp/
    */
    isCompatible: function(other) {
      if (isString(other)) {
        return this.isCompatible(Qty(other));
      }

      if (!(isQty(other))) {
        return false;
      }

      if (other.signature !== undefined) {
        return (this.signature & nonAngleMask) === (other.signature & nonAngleMask);
      }
      else {
        return false;
      }
    },

    /*
    check to see if units are inverse of each other, but not the scalar part
    this check is done by comparing signatures for performance reasons
    if passed a string, it will create a unit object with the string and then do the comparison
    this permits a syntax like:
    unit =~ "mm"
    if you want to do a regexp on the unit string do this ...
    unit.units =~ /regexp/
    */
    isInverse: function(other) {
      return this.inverse().isCompatible(other);
    },

    // Returns 'true' if the Unit is represented in base units
    isBase: function() {
      if (this._isBase !== undefined) {
        return this._isBase;
      }
      if (this.isDegrees() && this.numerator[0].match(/<(kelvin|temp-K)>/)) {
        this._isBase = true;
        return this._isBase;
      }

      this.numerator.concat(this.denominator).forEach(function(item) {
        if (item !== UNITY && BASE_UNITS.indexOf(item) === -1 ) {
          this._isBase = false;
        }
      }, this);
      if (this._isBase === false) {
        return this._isBase;
      }
      this._isBase = true;
      return this._isBase;
    }
  });

  function NestedMap() {}

  NestedMap.prototype.get = function(keys) {

    // Allows to pass key1, key2, ... instead of [key1, key2, ...]
    if (arguments.length > 1) {
      // Slower with Firefox but faster with Chrome than
      // Array.prototype.slice.call(arguments)
      // See http://jsperf.com/array-apply-versus-array-prototype-slice-call
      keys = Array.apply(null, arguments);
    }

    return keys.reduce(function(map, key, index) {
      if (map) {

        var childMap = map[key];

        if (index === keys.length - 1) {
          return childMap ? childMap.data : undefined;
        }
        else {
          return childMap;
        }
      }
    },
    this);
  };

  NestedMap.prototype.set = function(keys, value) {

    if (arguments.length > 2) {
      keys = Array.prototype.slice.call(arguments, 0, -1);
      value = arguments[arguments.length - 1];
    }

    return keys.reduce(function(map, key, index) {

      var childMap = map[key];
      if (childMap === undefined) {
        childMap = map[key] = {};
      }

      if (index === keys.length - 1) {
        childMap.data = value;
        return value;
      }
      else {
        return childMap;
      }
    }, this);
  };

  /**
   * Default formatter
   *
   * @param {number} scalar - scalar value
   * @param {string} units - units as string
   *
   * @returns {string} formatted result
   */
  function defaultFormatter(scalar, units) {
    return (scalar + " " + units).trim();
  }

  /**
   *
   * Configurable Qty default formatter
   *
   * @type {function}
   *
   * @param {number} scalar
   * @param {string} units
   *
   * @returns {string} formatted result
   */
  Qty.formatter = defaultFormatter;

  assign(Qty.prototype, {

    // returns the 'unit' part of the Unit object without the scalar
    units: function() {
      if (this._units !== undefined) {
        return this._units;
      }

      var numIsUnity = compareArray(this.numerator, UNITY_ARRAY);
      var denIsUnity = compareArray(this.denominator, UNITY_ARRAY);
      if (numIsUnity && denIsUnity) {
        this._units = "";
        return this._units;
      }

      var numUnits = stringifyUnits(this.numerator);
      var denUnits = stringifyUnits(this.denominator);
      this._units = numUnits + (denIsUnity ? "" : ("/" + denUnits));
      return this._units;
    },

    /**
     * Stringifies the quantity
     * Deprecation notice: only units parameter is supported.
     *
     * @param {(number|string|Qty)} targetUnitsOrMaxDecimalsOrPrec -
     *                              target units if string,
     *                              max number of decimals if number,
     *                              passed to #toPrec before converting if Qty
     *
     * @param {number=} maxDecimals - Maximum number of decimals of
     *                                formatted output
     *
     * @returns {string} reparseable quantity as string
     */
    toString: function(targetUnitsOrMaxDecimalsOrPrec, maxDecimals) {
      var targetUnits;
      if (isNumber(targetUnitsOrMaxDecimalsOrPrec)) {
        targetUnits = this.units();
        maxDecimals = targetUnitsOrMaxDecimalsOrPrec;
      }
      else if (isString(targetUnitsOrMaxDecimalsOrPrec)) {
        targetUnits = targetUnitsOrMaxDecimalsOrPrec;
      }
      else if (isQty(targetUnitsOrMaxDecimalsOrPrec)) {
        return this.toPrec(targetUnitsOrMaxDecimalsOrPrec).toString(maxDecimals);
      }

      var out = this.to(targetUnits);

      var outScalar = maxDecimals !== undefined ? Field.roundTo(out.scalar, maxDecimals) : out.scalar;
      out = (outScalar + " " + out.units()).trim();
      return out;
    },

    /**
     * Format the quantity according to optional passed target units
     * and formatter
     *
     * @param {string} [targetUnits=current units] -
     *                 optional units to convert to before formatting
     *
     * @param {function} [formatter=Qty.formatter] -
     *                   delegates formatting to formatter callback.
     *                   formatter is called back with two parameters (scalar, units)
     *                   and should return formatted result.
     *                   If unspecified, formatting is delegated to default formatter
     *                   set to Qty.formatter
     *
     * @example
     * var roundingAndLocalizingFormatter = function(scalar, units) {
     *   // localize or limit scalar to n max decimals for instance
     *   // return formatted result
     * };
     * var qty = Qty('1.1234 m');
     * qty.format(); // same units, default formatter => "1.234 m"
     * qty.format("cm"); // converted to "cm", default formatter => "123.45 cm"
     * qty.format(roundingAndLocalizingFormatter); // same units, custom formatter => "1,2 m"
     * qty.format("cm", roundingAndLocalizingFormatter); // convert to "cm", custom formatter => "123,4 cm"
     *
     * @returns {string} quantity as string
     */
    format: function(targetUnits, formatter) {
      if (arguments.length === 1) {
        if (typeof targetUnits === "function") {
          formatter = targetUnits;
          targetUnits = undefined;
        }
      }

      formatter = formatter || Qty.formatter;
      var targetQty = this.to(targetUnits);
      return formatter.call(this, targetQty.scalar, targetQty.units());
    }
  });

  var stringifiedUnitsCache = new NestedMap();
  /**
   * Returns a string representing a normalized unit array
   *
   * @param {string[]} units Normalized unit array
   * @returns {string} String representing passed normalized unit array and
   *   suitable for output
   *
   */
  function stringifyUnits(units) {

    var stringified = stringifiedUnitsCache.get(units);
    if (stringified) {
      return stringified;
    }

    var isUnity = compareArray(units, UNITY_ARRAY);
    if (isUnity) {
      stringified = "1";
    }
    else {
      stringified = simplify(getOutputNames(units)).join("*");
    }

    // Cache result
    stringifiedUnitsCache.set(units, stringified);

    return stringified;
  }

  function getOutputNames(units) {
    var unitNames = [], token, tokenNext;
    for (var i = 0; i < units.length; i++) {
      token = units[i];
      tokenNext = units[i + 1];
      if (PREFIX_VALUES[token]) {
        unitNames.push(OUTPUT_MAP[token] + OUTPUT_MAP[tokenNext]);
        i++;
      }
      else {
        unitNames.push(OUTPUT_MAP[token]);
      }
    }
    return unitNames;
  }

  function simplify(units) {
    // this turns ['s','m','s'] into ['s2','m']

    var unitCounts = units.reduce(function(acc, unit) {
      var unitCounter = acc[unit];
      if (!unitCounter) {
        acc.push(unitCounter = acc[unit] = [unit, 0]);
      }

      unitCounter[1]++;

      return acc;
    }, []);

    return unitCounts.map(function(unitCount) {
      return unitCount[0] + (unitCount[1] > 1 ? unitCount[1] : "");
    });
  }

  Qty.version = "1.8.0";

  return Qty;

}));
/** end of quantities.js **/
module.exports = {Qty: module.exports};
});
