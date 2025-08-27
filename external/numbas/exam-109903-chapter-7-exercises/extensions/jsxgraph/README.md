# JSXGraph extension for [Numbas](https://www.numbas.org.uk/)

This extension provides the [JSXGraph](https://jsxgraph.org) library and functions to create diagrams inside a Numbas question.

## Examples

The [JSXGraph demo exam](https://numbas.mathcentre.ac.uk/exam/652/jsxgraph-demo/preview/) contains a collection of questions demonstrating different techniques to do with JSXGraph.

## Creating a diagram

The preferred method to create a diagram is one of the `jsxgraph` or `jessiecode` functions. These produce a value with the type `jsxgraphboard`, which can be inserted into content areas by substitution with curly braces.

You should create the board in a question variable, so that its state can be saved and restored in case the student leaves and resumes their attempt.

## Linking a diagram to marking and part inputs

The `jxg_` functions described below can be used to access properties of a JSXGraph diagram inside a part's marking algorithm.

To link a part's input field to a JSXGraph diagram, you must describe how the link will work in each direction: from the input to the diagram, and vice versa.
This is achieved by defining two notes in the part's marking algorithm, `jxg_input` and `jxg_output`.

### `jxg_input`

The `jxg_input` note describes how to take input from the student and modify the JSXGraph diagram.
It is a list of operations to perform.
Since this is a marking note, all the other notes and variables in the algorithm are available.

The available operations are as follows:

#### `jxg_set_position(object,position)`

Set the position of `object` to the given `position`, which should be a 2D vector.

#### `jxg_show(object,visible)`

If `visible = true`, then show `object`, otherwise hide it.

#### `jxg_set(object,property,arguments)`

Call the JSXGraph `set<property>` on the given object, with the given arguments.

For example, `jxg_set(c, "radius", 5)` calls the JSXGraph method `c.setRadius(5)`.

#### `jxg_set_attribute(object,attributes)`

`attributes` should be a dictionary mapping attribute names to values.

This calls the JSXGraph method `setAttribute` on the given object.

#### `jxg_set_term(object, expression)`

Set the term plotted by a `functiongraph` object to the given expression, which should calculate the y coordinate corresponding to a given x coordinate.

Example: `jxg_set_term(f, expression("x^2"))`

### `jxg_output`

The `jxg_output` note describes how to take the state of the diagram to fill in the part's input field.

The note should return a value of the same type as the marking algorithm's `studentAnswer` variable.
For example, for a "number entry" part this note should produce a string, representing what the student should write.

## JME functions

### `jsxgraph(width, height, [boundingBox], objects, [options])`

Create a JSXGraph board.

* `width: number` - the displayed width in pixels of the board.
* `height: number` - the displayed height in pixels of the board.
* `boundingBox: [number, number, number, number]` - an optional list of four numbers defining the bounding box of the diagram, in the format `[x1,y1,x2,y2]`. The first point is mappted to the top-left of the board, and the second point to the bottom-right.
* `objects: list or dict` - a list of object definitions, or a dictionary mapping object names to definitions.
* `options: dict` - a dictionary of options for the board. See [the documentation for JSXGraph.initBoard](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.JSXGraph.html#.initBoard)

An object definition is a list in the format `[type, parents, attribute]`.

* `type: string` - the type of object to create. Available types are listed in [the 'Elements' section of the JSXGraph' documentation](https://jsxgraph.uni-bayreuth.de/docs/).
* `parents: list` - a list of 'parent' values for the object. The format of this list depends on the type of the object being created. Any values of data type `expression` are replaced with functions which take a single parameter.
* `attributes: dict` - an optional dictionary of attributes for the object. The available attributes dpeend on the type of the object.
* `events: dict` - an optional dictionary of events produced by the object to react to. Each event name should correspond to a string of JessieCode.

JSXGraph will often interpret string values in the `parents` list as JavaScript expressions. You can refer to other objects by name.
Alternately, you can provide JME `expression` values to evaluate expressions in terms of JME variables and functions. JSXGraph objects are not available in these expressions, and they're quite a bit slower than JavaScript.

#### Example

This creates a board with a line and a glider point on that line:

```
jsxgraph(
    500,500,
    [
        "l": ['line', [[0,1], [1,2]]],
        "p": ['glider', ['l']]
    ]
)
```

This creates a board with a polar plot of the function `r(phi) = sin(5phi)` centred at the origin:

```
jsxgraph(
    500,500,
    [
        ['curve', [expression('sin(5phi)'),[0,0],0,2pi], ["curveType": "polar"]]
    ]
)
```

### `jessiecode(width, height, [boundingBox], script, [options])`

Create a JSXGraph board defined by a JessieCode script.

JessieCode is a languaged designed for efficiently creating diagrams in JSXGraph. 
There is [some documentation about JessieCode syntax](https://jsxgraph.org/wp/docs_jessiecode/). The available object types and their construction options are the same as in the [JavaScript API](https://jsxgraph.org/docs/).

* `width: number` - the displayed width in pixels of the board.
* `height: number` - the displayed height in pixels of the board.
* `boundingBox: [number, number, number, number]` - an optional list of four numbers defining the bounding box of the diagram, in the format `[x1,y1,x2,y2]`. The first point is mappted to the top-left of the board, and the second point to the bottom-right.
* `script: string` - a JessieCode script defining the objects in the board. 
* `options: dict` - a dictionary of options for the board. See [the documentation for JSXGraph.initBoard](https://jsxgraph.uni-bayreuth.de/docs/symbols/JXG.JSXGraph.html#.initBoard)

#### Example

This creates a board with two points and a dashed line between them, and no background grid or axes:

```
jessiecode(
    500,500,
    """
        A = point(0,1);
        B = point(4,0);

        line(A,B) << dash: 4 >>;
    """,
    [
        "axis": false
    ]
)
```

### `jxg_add_objects(board, objects)`

Add a list of objects to the given board.

The format for `objects` is the same as in the `jsxgraph()` function. Use this to add extra objects to a board - if you want to produce several similar boards, you might define a function which produces a generic board and then use this to add extra objects.

### `jxg_run_jessiecode(board, code)`

Run a JessieCode script, given as a string, on the given board. You could use this to add objects, or modify some aspect of the board.

### `board[name]`

Boards created by the `jsxgraph` and `jessiecode` functions work like dictionaries: the keys are the IDs of objects in the board.

JSXGraph assigns automatic IDs to objects, but these aren't predictable, so if you want to access an object later you have to explicitly set its `id` attribute.

For example, `board["A"]` gets the object with the ID `"A"`.

To access properties of an object in a board, use one of the `jxg_` functions.

The following is a brief description of what the `jxg_` functions do. Refer to the JSXGraph documentation for more information.

### `jxg_angle(object)`

Defined only on lines.

Returns the angle between the line and the x-axis.

### `jxg_area(object)`

Defined only on circles and polygons.

Returns the area of the object.

### `jxg_attribute(object,key)`

Get the value of an arbitrary attribute of an object.

Example: `jxg_attribute(board["A"],"size")`

### `jxg_bounding_box(object)`

Defined only on polygons.

Returns the coordinates of the smallest box containing the polygon, as a list of four numbers `[minX,minY,maxX,maxY]`.

### `jxg_bounds(object)`

Returns the coordinates of the smallest box containing the polygon, as a list of four numbers `[minX,minY,maxX,maxY]`.

### `jxg_distance(a,b)`

Defined only on points, text and images.

Returns the distance between two points.

### `jxg_has_point(object,x,y)` or `jxg_has_point(object,position)`

Returns `true` if the point with the given coordinates is contained in `object`.

You can either give the coordinates as two separate numbers, or as a 2D vector.

### `jxg_has_point_sector(object,x,y)`

Defined only on arcs and sectors.

Returns `true` if the point with coordinates `(x,y)` is contained in the sector defined by `object`.

### `jxg_length(object)`

Defined only on lines.

Returns the length of the line.

### `jxg_max_x(object)`

Defined only on circles, curves, lines and turtle graphics.

Treating the object as a parametric curve, returns the maximum value of the parameter.

### `jxg_min_x(object)`

Defined only on circles, curves, lines and turtle graphics.

Treating the object as a parametric curve, returns the maximum value of the parameter.

### `jxg_name(object)`

Returns the name of the object.

### `jxg_parents(object)`

Returns a list of the IDs of the object's parents.

### `jxg_perimeter(object)`

Defined only on polygons.

Returns the length of the object's perimeter.

### `jxg_position(object)`

Returns the object's position as a vector.

### `jxg_position_at(object,t)`

Defined only on circles, curves, lines and turtle graphics.

Returns the coordinates of the point at parameter `t` on the object, as a vector.

### `jxg_radius(object)`

Defined only on arcs, sectors and circles.

Returns the radius of the object.

### `jxg_rise(object)`

Defined only on lines.

Returns the y-coordinate at which the line crosses the y-axis.

### `jxg_size(object)`

Defined only on text objects.

Returns the size of the text.

### `jxg_slope(object)`

Defined only on lines.

Returns the gradient of the line, or `infinity` if it is parallel to the y-axis.

### `jxg_type(object)`

Returns the type of the object as a string.

### `jxg_value(object)`

The returned value depends on the type of the object:

* `angle` - the angle, as a number in radians.
* `arc` - the length of the arc, as a number.
* `input` - the content of the input element, as a string.
* `slider` - the value the slider is currently set to, as a number.
* `checkbox` - whether the checkbox is ticked, as a boolean.
* `tapemeasure` - the length of the tape measure.
* `integral` - the value of the integral.
* `riemannsum` - the sum of the rectangles.

### `jxg_width(object)`

Defined only on images.

Returns the width of the image, as a number.

## JavaScript functions

All JavaScript functions are properties of the object `Numbas.extensions.jsxgraph`.

### `makeBoardPromise(width, height, options)`

Make a JSXGraph board with the given dimensions and options, and attach it to a `<div>` element.
The board is only initialised once the container element has been attached to the page.

An object of the format `{element, promise}` is returned. 
The `element` is a container `<div>` element that the board will be created under.
The `promise` resolves to the JSXGraph Board object once the container has been attached to the page and the board initialised.

The `options` object is passed to `JSXGraph.initBoard`, with some defaults applied.
The default options are:

```
{
    boundingBox:[-5,5,5,-5],
    showCopyright:false, 
    showNavigation:false, 
    axis:true
}
```

#### Example

This creates a board with the default options and a single point at the coordinates (1,2).

```
var result = Numbas.extensions.jsxgraph.makeBoardPromise(500,500);
result.promise.then(function(board) {
    board.create('point',[1,2]);
});
return result.element;
```


### `makeBoard(width, height, options)`

Make a JSXGraph board with the given dimensions and options, and attach it to a `<div>` element.
The div element is returned. The JSXGraph board object is available as `div.board`.

The `options` object is passed to `JSXGraph.initBoard`, with some defaults applied.
The default options are the same as for `makeBoardPromise`.

**Note**: This function initialises the board immediately, and is kept for backwards compatibility.
It's better to wait until the container element is attached to the page, using `makeBoardPromise`.

#### Example

This creates a board with the default options and a single point at the coordinates (1,2).

```
var div = Numbas.extensions.jsxgraph.makeBoard(500,500);
div.board.create('point',[1,2]);
return div;
```
