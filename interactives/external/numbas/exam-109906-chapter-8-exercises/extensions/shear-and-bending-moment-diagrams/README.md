# Shear and Bending Moment Extension

This extension uses jsxgraph to draw Load, Shear and Bending Moment Diagrams

**Important In order to load, the jsxgraph extension must be loaded first.**

## Examples

- [https://numbas.mathcentre.ac.uk/question/177005/vm-extension-demonstration/]()
- [https://numbas.mathcentre.ac.uk/question/177114/vm-base-copy-and-modifiy/]()

## Functions

The included functions are

- ` VMloadDiagram(properties)` Retuns a jsxgraph board showing the beam and load.
- ` VMshearDiagram(properties, visible)` Retuns a jsxgraph board showing the correspoinding Shear Diagram
- ` VMmomentDiagram(properties, visible)` Retuns a jsxgraph board showing the corresponding moment diagram
- `VMShearPoints(properties)` Returns a list of "interesting" points on the shear diagram.
- `VMMomentPoints(properties)` Returns a list of "interesting" points on the shear diagram.

- _Interesting Points_ are points at the top and bottom of jumps, corner points, and extremum.

## Parameters

- `properties = [beamLength: number, forces: list of load, moments: list of load, loads: list of [load,load], reactions: list of load, symbols: list of symbol]`
- `load =  [x: number, value: number, label: string, visible: boolean]` and
- `symbol = [x: number, type: string,  number, label: string, visible: boolean]`
- `visible` parameter on `VMShearDiagram` and `VMMomentDiagram` shows or hides the function.

### comments

- `beamLength:` defines the **length of the beam**
- `forces` define **concentrated forces** with list of `load`
  - positive forces are drawn as arrows pointing down
  - the label may be a latex string `$R_A$` or a plain string.
- `moments` define **concentrated moments** with list of `load`
  - positive moments are drawn as counterclockwise arrows
- `loads` define **distributed forces** with list of `[load, load]`
  - drawn as a series of arrows on a colored background
  - positive values point down
  - the first item is the first value of a distributed load
  - the second item is the last value of a distributed load
  - if `load[0]["visible"]` is false, the arrrows are not drawn
- `reactions` define **reaction forces** with list of `load`
  _ like `forces` but drawn in a different color
  _ positive reactions are drawn pointing up
- `symbols` define **graphic items** with list of `symbol`
  - Supported symbols: "pin", "roller", "dot", "fixed", "shear", "moment"

## Curve visibility

To unhide the functions when the advice is displayed, add this to the preamble.

`question.signals.on('adviceDisplayed', () => {
  try{
    ["moment","shear"].forEach((board) => {
    var objects = question.scope.getVariable(board).board.objects;
    objects.Curve.setAttribute({visible: true});
    Object.keys(objects).filter(k => k.startsWith('Point-')).forEach((k) => objects[k].setAttribute({visible: true}));
    Object.keys(objects).filter(k => k.startsWith('Jump-')).forEach((k) => objects[k].setAttribute({visible: true}));
  })}
  catch(err){} 
})`