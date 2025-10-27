// Last modified: 2025/08/02 22:28:28
const divWidth = 480; //width of enclosing div
const divHeight = 240; //height of the enclosing div
const boxHeight = 10; // the height of the grid bounding box yticks go from -boxHeight to +boxHeight in board units
const beamHeight = 0.75; //  half height of the beam in board units
const red = "#CC0100";
const blue = "#3070AD";
const fontSize = 16;

var L = 10;
var P = 10;
var beamLength = L;
var forces = [{ x: L / 2, value: P, label: "\\(A\\)", visible: true }];
var reactions = [
  { x: 2, value: P / 2, label: "\\(A\\)", visible: false },
  { x: L - 2, value: P / 2, label: "\\(B\\)", visible: true },
];
var loads = [];
var moments = [];
var symbols = [{ x: reactions[0].x, type: "pin", visibile: true, label: "\\\\(A\\\\)" }];

// define the load function
const w = function (x) {
  let sum = 0;
  for (let f of loads) {
    let xa = f[0].x;
    let xb = f[1].x;
    let ya = f[0].value;
    let yb = f[1].value;
    let m = (yb - ya) / (xb - xa);
    let c0 = m * (xb - xa); // constant of integration
    sum -= (ya + m * (x - xa)) * step(x - xa); // turn on curve
    sum += (ya + m * (x - xa)) * step(x - xb); // turn off curve
    sum -= c0 * step(x - xb);
  }
  return sum;
};
// define the shear function  =============================================
const v = function (x) {
  let sum = 0;
  for (let r of reactions) {
    sum += r.value * step(x - r.x);
  }
  for (let f of forces) {
    sum -= f.value * step(x - f.x);
  }
  for (let w of loads) {
    let xa = w[0].x;
    let xb = w[1].x;
    let ya = w[0].value;
    let yb = w[1].value;
    let m = (yb - ya) / (xb - xa);
    let c0 = ya * (xb - xa) + (m * (xb - xa) ** 2) / 2; // constant of integration
    sum -= (ya * (x - xa) + (m * (x - xa) ** 2) / 2) * step(x - xa); // turn on curve
    sum += (ya * (x - xa) + (m * (x - xa) ** 2) / 2) * step(x - xb); // turn off curve
    sum -= c0 * step(x - xb);
  }
  return sum;
};
// define the moment function m ==========================================
const m = function (x) {
  let sum = 0;
  for (let m of moments) {
    sum -= m.value * step(x - m.x);
  }
  for (let f of forces) {
    sum -= f.value * (x - f.x) * step(x - f.x);
  }
  for (let r of reactions) {
    sum += r.value * (x - r.x) * step(x - r.x);
  }
  for (let w of loads) {
    let xa = w[0].x;
    let xb = w[1].x;
    let ya = w[0].value;
    let yb = w[1].value;
    let m = (yb - ya) / (xb - xa);
    let c0 = ya * (xb - xa) + (m * (xb - xa) ** 2) / 2; // constant of integration
    let c1 = (ya * (xb - xa) ** 2) / 2 + (m * (xb - xa) ** 3) / 6;
    sum -= ((ya * (x - xa) ** 2) / 2 + (m * (x - xa) ** 3) / 6) * step(x - xa); // turn on curve
    sum += ((ya * (x - xa) ** 2) / 2 + (m * (x - xa) ** 3) / 6) * step(x - xb); // turn off curve
    sum -= c0 * (x - xb) * step(x - xb);
    sum -= c1 * step(x - xb);
  }
  return sum;
};
//  Moment Diagram ++++++++++++++++++++++++++++++
function momentDiagram(divID) {
  const moment_f = function (x) {
    return m(x);
  }; // pass parameters to the moment function m
  const m_max = 1.4 * Math.max(findLargestValue(moment_f, beamLength));
  const options = {
    boundingBox: [-1, m_max, beamLength + 1, -m_max],
    axis: false,
    pan: { enabled: false },
    showNavigation: false,
    showCopyright: false,
    useMathJax: true,
  };
  var board = JXG.JSXGraph.initBoard(divId, options);

  const AR = board.unitY / board.unitX; // aspect ratio to make screen objects
  drawXAxis(board);
  drawYAxis(board);
  var curve = board.create("functiongraph", [moment_f, 0, beamLength], {
    id: "Curve",
    name: "$M(x)$",
    visible: true,
    highlight: false,
    strokeColor: blue,
    strokewidth: 3,
  });
  var interestingPoints = findInterestingPoints(m);
  drawInterestingPoints(board, interestingPoints, blue);
  showCurve(board, visibility);
  return board;
}
/// Shear Diagram  =====================================
function shearDiagram(divId) {
  const shear_f = function (x) {
    return v();
  }; // pass parameters to the shear function v
  const v_max = 1.4 * Math.max(findLargestValue(shear_f, beamLength));
  const options = {
    boundingBox: [-1, v_max, beamLength + 1, -v_max],
    axis: false,
    pan: { enabled: false },
    showNavigation: false,
    showCopyright: false,
    useMathJax: true,
  };
  JXG.Options.renderer = "canvas";
  var board = JXG.JSXGraph.initBoard(divId, options);

  const AR = board.unitY / board.unitX; // aspect ratio to make screen objects
  drawXAxis(board);
  drawYAxis(board);
  var curve = board.create("functiongraph", [shear_f, 0, beamLength], {
    id: "Curve",
    name: "$V(x)$",
    visible: true,
    highlight: false,
    strokeColor: red,
    strokewidth: 3,
  });
  var interestingPoints = findInterestingPoints(v);
  drawInterestingPoints(board, interestingPoints, red);
  showCurve(board, visibility);
  return board;
}
function showCurve(board, visibility) {
  var objects = board.objects;
  objects.Curve.setAttribute({ visible: visibility });
  Object.keys(objects)
    .filter((k) => k.startsWith("Point-"))
    .forEach((k) => objects[k].setAttribute({ visible: visibility }));
  Object.keys(objects)
    .filter((k) => k.startsWith("Jump-"))
    .forEach((k) => objects[k].setAttribute({ visible: visibility }));
}
/// Load Diagram  =====================================
function loadDiagram(divId) {
  const options = {
    boundingBox: [-1, boxHeight, beamLength + 1, -boxHeight],
    axis: false,
    pan: { enabled: false },
    showNavigation: false,
    showCopyright: false,
    useMathJax: true,
  };
  JXG.Options.text.useMathJax = true;
  JXG.Options.theme = "mono_thin";
  var board = JXG.JSXGraph.initBoard(divId, options);
  const AR = board.unitY / board.unitX; // aspect ratio to make screen objects

  // Draw beam
  board.create(
    "polygon",
    [
      [0, beamHeight],
      [beamLength, beamHeight],
      [beamLength, -beamHeight],
      [0, -beamHeight],
    ],
    {
      id: "beam",
      fixed: true,
      highlight: false,
      fillcolor: "gray",
      vertices: { fixed: true, visible: false },
      borders: { highlight: false, strokewidth: 2, strokeColor: "black" },
    }
  );

  // Draw x axis
  const xAxis = board.create(
    "axis",
    [
      [0, 0],
      [1, 0],
    ],
    {
      ticks: {
        grid: false,
        insertTicks: false,
        ticksDistance: 2,
        minorTicks: 1,
        majorHeight: 20,
        minorHeight: 16,
        name: "xAxis",
        label: { anchorX: "middle", anchorY: "middle", offset: [0, 0] },
      },
    }
  );

  // draw y axis
  board.create(
    "axis",
    [
      [0, 0],
      [0, 1],
    ],
    { name: "yAxis", visible: false, ticks: { visible: false } }
  );

  // extract maximum absolute value load
  var maxLoad = Math.max(...loads.flatMap(([a, b]) => [Math.abs(a.value), Math.abs(b.value)]));

  //set and scale height of distributed load
  function resize(f) {
    return (Math.abs(f) / maxLoad) * 4 + beamHeight;
  }

  for (const uvl of loads) {
    // Calculate UVL shape dimensions
    const wa = uvl[0].value;
    const wb = uvl[1].value;
    const xa = uvl[0].x;
    const xb = uvl[1].x;
    const labela = uvl[0].label;
    const labelb = uvl[1].label;
    if (wa * wb < 0) {
      throw alert("Distributed loads cannot change sign.");
    }
    const mag = wa + wb; // load should not go from positive to negative
    let y0 = beamHeight;
    let ya = resize(wa);
    let yb = resize(wb);

    if (mag < 0) {
      ya = -ya;
      yb = -yb;
      y0 = -y0;
    }
    //   Draw UVL region (trapezoid/triangle)
    board.create(
      "polygon",
      [
        [xa, y0],
        [xa, ya],
        [xb, yb],
        [xb, y0],
      ],
      {
        name: labela,
        visible: mag !== 0,
        fixed: true,
        highlight: false,
        withLabel: true,
        label: {
          autoPosition: false,
          fixed: false,
          anchorX: "middle",
          anchorY: "middle",
          offset: [0, mag > 0 ? +45 : -45],
          fontSize: fontSize,
          color: blue,
        },
        vertices: { fixed: true, visible: false },
        fillcolor: blue,
        borders: { highlight: false, strokecolor: "black" },
      }
    );

    // Draw load arrows
    const slope = (yb - ya) / (xb - xa);
    for (let i = xa; i <= xb; i++) {
      board.create(
        "segment",
        [
          [i, y0],
          [i, ya - slope * (xa - i)],
        ],
        {
          visible: uvl[0].visible,
          fixed: true,
          color: "black",
          strokewidth: 1.5,
          highlight: false,
          firstArrow: { type: 4 },
        }
      );
    }
  } // end loop over loads

  // draw symbols
  var h = 1.5; // sets size of pin and roller

  for (r of symbols) {
    switch (r.type) {
      case "dot":
        drawDot(r.x, 0, [0, -15], "top", r.visible);
        break;
      case "roller":
        const a = h / 2; // parameters of an ellipse
        const b = (h / 2) * AR;
        const c = Math.sqrt(a * a - b * b);
        drawDot(r.x, -beamHeight, [0, -(board.unitY * h + 15)], "top", r.visible);
        f1 = board.create("point", [r.x, -beamHeight - a - c], {
          visible: false,
        });
        f2 = board.create("point", [r.x, -beamHeight - a + c], {
          visible: false,
        });
        var roller = board.create("ellipse", [f1, f2, 2 * a], {
          fixed: true,
          withLabel: false,
          highlight: false,
          fillColor: "#666666",
          strokeColor: "black",
          visible: r.visible,
          fontSize: fontSize,
          fillOpacity: 0.9,
          borders: {
            highlight: false,
            strokeWidth: 1,
            strokeColor: "black",
          },
          vertices: { fixed: true, visible: false },
        });
        break;
      case "pin":
        drawDot(r.x, -beamHeight, [0, -(board.unitY * h + 15)], "top", r.visible);
        var pin = board.create(
          "polygon",
          [
            [r.x, -beamHeight],
            [r.x - (h / 2) * AR, -beamHeight - h],
            [r.x + (h / 2) * AR, -beamHeight - h],
          ],
          {
            fixed: true,
            withLabel: false,
            highlight: false,
            visible: r.visible,
            fillColor: "#666666",
            fillOpacity: 0.9,
            borders: {
              highlight: false,
              strokeWidth: 1,
              strokeColor: "black",
            },
            vertices: { fixed: true, visible: false },
          }
        );
        break;
      case "fixed":
        const width = 0.75 * AR;
        const height = 8;
        drawDot(r.x, 0, [20, 20], "middle", r.visible);
        var wall = board.create(
          "polygon",
          [
            [r.x + width, height],
            [r.x - width, height],
            [r.x - width, -height],
            [r.x + width, -height],
          ],
          {
            fixed: true,
            highlight: false,
            fillcolor: "#666666",
            fillOpacity: 0.9,
            visible: r.visible,
            vertices: { fixed: true, visible: false },
            borders: {
              highlight: false,
              strokeWidth: 1,
              strokeColor: "black",
            },
          }
        );
        break;
      default:
        throw alert("Valid Support types are 'pin', 'roller', 'dot', 'fixed', not '" + r.type + "'.");
    }
  }

  // draw concentrated moments  svg digarams are used to get the arrowheads right on the small circular arcs.
  const ccw = `
<svg width="100%" height="100%" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="Artboard1" transform="matrix(1.01556,0,0,1.04167,0,-2.60417)">
        <rect x="0" y="2.5" width="49.234" height="48" style="fill:none;"/>
        <g transform="matrix(1.30536,1.10629,1.19972,-1.34554,-33.1339,20.3282)">
            <path d="M16.5,15L19,22L14,22L16.5,15Z" style="fill:rgb(204,1,0);"/>
        </g>
       
        <g transform="matrix(-0.696271,0.678823,0.696271,0.678823,24.5463,-7.3116)">
            <path d="M46,25C46,36.59 36.59,46 25,46C13.41,46 4,36.59 4,25C4,14.777 11.32,6.251 21,4.381" style="fill:none;stroke:rgb(204,1,0);stroke-width:2.5px;"/>
        </g>
    </g>
</svg>
`;
  const cw = `
<svg width="100%" height="100%" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g id="Artboard1" transform="matrix(1.01556,0,0,1.04167,0,-2.60417)">
        <rect x="0" y="2.5" width="49.234" height="48" style="fill:none;"/>
        <g transform="matrix(-1.30536,1.10629,-1.19972,-1.34554,82.293,20.3282)">
            <path d="M16.5,15L19,22L14,22L16.5,15Z" style="fill:rgb(204,1,0);"/>
        </g>
      
        <g transform="matrix(0.696271,0.678823,-0.696271,0.678823,24.6128,-7.3116)">
            <path d="M46,25C46,36.59 36.59,46 25,46C13.41,46 4,36.59 4,25C4,14.777 11.32,6.251 21,4.381" style="fill:none;stroke:rgb(204,1,0);stroke-width:2.5px;"/>
        </g>
    </g>
</svg>
`;
  function arc(dir) {
    const base64 = btoa(unescape(encodeURIComponent(dir)));
    const dataUrl = "data:image/svg+xml;base64," + base64;
    return dataUrl;
  }
  for (const m of moments) {
    const w = 2 * AR;
    const h = 2;
    const dir = m.value >= 0 ? ccw : cw;
    board.create("point", [m.x, 0], {
      color: red,
      name: m.label,
      visible: m.visible,
      fixed: true,
      highlight: false,

      label: {
        color: red,
        fixed: false,
        fontSize: fontSize,
        anchorX: "middle",
        anchorY: "top",
        offset: [0, -32],
      },
    });
    board.create("image", [arc(dir), [m.x - w, -h], [2 * w, 2 * h]], {
      name: m.label,
      visible: m.visible,
      fixed: true,
      highlight: false,
      layer: 3,
    });
  }
  // draw concentrated forces.  positive values point down.
  for (f of forces) {
    drawArrow(f, red);
  }

  // draw reaction forces
  t = board.create("transform", [xAxis], { type: "reflect" });
  for (f of reactions) {
    f.value = f.value;
    var r = drawArrow(f, blue, false);
    t.bindTo(r);
  }

  function drawDot(x, y, offset = [0, 0], anchorY = "middle", visible = true) {
    board.create("point", [x, y], {
      name: r.label,
      fixed: true,
      highlight: false,
      visible: visible,
      fillOpacity: 0.7,
      color: "black",
      size: 2,
      label: {
        fontSize: fontSize,
        anchorX: "middle",
        anchorY: anchorY,
        fixed: false,
        offset: offset,
      },
    });
  }

  function drawArrow(f, color, above = true) {
    var x = f.x;
    var t = 6;
    var b = beamHeight;
    var positive = f.value > 0;
    var attributes = {
      name: f.label,
      visible: f.visible,
      withLabel: true,
      fixed: true,
      layer: 8,
      highlight: false,
      strokeColor: color,
      strokeWidth: 5,
      label: {
        fontSize: fontSize,
        fixed: false,
        color: color,
        anchorX: "middle",
        anchorY: above ? "bottom" : "top",
        offset: [0, above ? 40 : -40],
      },
    };
    if (positive) {
      attributes.lastArrow = { type: 4 };
    } else {
      attributes.firstArrow = { type: 4 };
    }
    var arrow = board.create(
      "segment",
      above
        ? [
            [x, t],
            [x, b],
          ] // draws segment pointing down, above the beam
        : [
            [x, -t],
            [x, -b],
          ], // draws segment pointing up, below the beam
      attributes
    );
    return arrow;
  }

  return board;
}
//+++++++++++++ interesting points+++++++++++++++
function findInterestingPoints(f) {
  const ε = 1e-8;
  const func = function (x) {
    return f(x);
  };
  const v_func = function (x) {
    return v(x);
  };
  const w_func = function (x) {
    return w(x);
  };
  var points = [];
  switch (f.name) {
    case "v": {
      // point loads cause jumps
      [...forces, ...reactions].forEach(function (p) {
        points.push([p.x, v(p.x)]);
        points.push([p.x, func(p.x - ε)]);
      });
      // starts and stops of the distributed loads
      [...loads].flat(2).forEach(function (p) {
        points.push([p.x, func(p.x)]);
      });
      // look for zero crossings on the load curve == max or min
      findZeroCrossings(w_func, beamLength).forEach(function (p) {
        points.push([p, func(p)]); //push min/max
      });

      break;
    }
    case "m": {
      [...forces, ...reactions].forEach(function (p) {
        points.push([p.x, func(p.x)]);
      });
      [...loads].flat(2).forEach(function (p) {
        points.push([p.x, func(p.x)]);
      });
      [...moments].forEach(function (p) {
        points.push([p.x, func(p.x)]);
        points.push([p.x, func(p.x - ε)]);
      });
      // look for zero crossings on the shear curve
      findZeroCrossings(v_func).forEach(function (p) {
        p = round3(p);
        points.push([p, func(p)]);
      });
      break;
    }
    default: {
    }
  }
  points = points.map((x) => [round3(x[0]), round4(x[1])]); //round everything
  const uniquePoints = new Set(points.map(JSON.stringify)); // turn points to strings, and eliminate duplicates
  points = Array.from(uniquePoints).map(JSON.parse); // turn strings back to points
  points.sort((a, b) => {
    return a[0] - b[0];
  }); // sort them by x value
  return points;
}
function findZeroCrossings(f) {
  const dx = 0.5;
  var crossings = [];
  for (let x = 0; x <= beamLength; x += dx) {
    var xcross = findZeroBisection(f, x, x + dx);
    if (xcross != null) {
      crossings.push(xcross);
    }
  }
  return crossings;
}
function findZeroBisection(f, a, b) {
  const ε = 1e-8;
  const tol = 1e-6;
  const maxIter = 50;
  let fa = f(a + ε),
    fb = f(b - ε);
  if (fa * fb >= 0) return null; // reject if no sign change or one end is zero
  for (let i = 0; i < maxIter; i++) {
    const c = (a + b) / 2;
    const fc = f(c);
    if (fa == fb && fb == fc) return null; // most likely straight segment
    if (Math.abs(fc) < tol || (b - a) / 2 < tol) return c; // found a root
    if (fa * fc < 0) {
      b = c;
      fb = fc;
    } else {
      a = c;
      fa = fc;
    }
  }
  return (a + b) / 2; // give up, too many iterations
}
function separatePairs(pairs) {
  // this splits the interesting points into jumps, which are x values with two y values, and points, which are the rest.
  const xMap = new Map();

  // Group all y values by x
  for (const [x, y] of pairs) {
    if (!xMap.has(x)) {
      xMap.set(x, []);
    }
    xMap.get(x).push(y);
  }

  const jumps = [];
  const points = [];

  // Partition into jumps and points
  for (const [x, ys] of xMap.entries()) {
    if (ys.length === 1) {
      points.push([x, ys[0]]);
    } else {
      jumps.push([x, ...ys]);
    }
  }
  return [points, jumps];
}
// Drawing routines ++++++++++++++++++++++++++++++++++++++
function drawInterestingPoints(board, pairs, color) {
  [points, jumps] = separatePairs(pairs);
  points.forEach((p, i) => drawPoint(board, p, i, color));
  jumps.forEach((j, i) => drawJump(board, j, i, color));
}
function drawPoint(board, p, index, color = "black", inside = color, above = true) {
  board.create("point", p, {
    id: "Point-" + index,
    name: round3(p[1]), // display y value.
    fixed: true,
    size: 2,
    strokeColor: color,
    fillColor: inside,
    label: {
      color: color,
      fixed: false,
      anchorX: "middle",
      anchorY: above ? "bottom" : "top",
      offset: [0, above ? 10 : -10],
    },
  });
}
function drawJump(board, j, i, color) {
  var p1 = [j[0], j[1]];
  var p2 = [j[0], j[2]];
  var segment = board.create("segment", [p1, p2], {
    id: "Jump-" + i,
    fixed: true,
    highlight: false,
    strokeColor: color,
    strokewidth: 3,
  });
  var above = p1[1] >= p2[1];
  drawPoint(board, p1, "JA-" + i, color, "white", above);
  drawPoint(board, p2, "JB-" + i, color, "white", !above);
}
// Draw x axis
function drawXAxis(board) {
  board.create(
    "axis",
    [
      [0, 0],
      [1, 0],
    ],
    {
      ticks: {
        ticksDistance: 1,
        majorTickEndings: [1, 1],
        ignoreInfiniteTickEndings: false,
        minorTicks: 0,
        label: { anchorX: "middle", anchorY: "middle", offset: [0, 0] },
      },
    } // [x, y] in pixels
  );
}
// draw y axis
function drawYAxis(board) {
  board.create(
    "axis",
    [
      [0, 0],
      [0, 1],
    ],
    {
      ticks: {
        ticksDistance: 1,
        majorTickEndings: [0, 1],
        ignoreInfiniteTickEndings: false,
        minorTicks: 0,
        drawLabels: true,
        label: { anchorX: "right", anchorY: "middle", offset: [-4, 0] },
      },
    }
  );
}
// utility functions++++++++++
function step(x) {
  return x >= 0 ? 1 : 0;
}
function round4(x) {
  x = Math.trunc(x * 1000) / 1000;
  x = parseFloat(x.toPrecision(4));
  return x;
}
function round3(x) {
  x = Math.trunc(x * 1000) / 1000;
  x = parseFloat(x.toPrecision(3));
  return x;
}
function findLargestValue(func, xMax) {
  // only gives approximate answer, use for scaling diagrams
  let minVal = func(0);
  let maxVal = func(0);

  for (let i = 1; i <= xMax; i += 0.5) {
    const val = func(i);
    if (val < minVal) {
      minVal = val;
    }
    if (val > maxVal) {
      maxVal = val;
    }
  }
  return Math.abs(minVal) >= Math.abs(maxVal) ? Math.abs(minVal) : Math.abs(maxVal);
}

loadDiagram("loadDiagramBoard");
