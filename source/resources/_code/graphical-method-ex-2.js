window.onload = function () {
  const commentDiv = this.document.getElementById("VMComment-ex-2");
  commentDiv.style.backgroundColor = "#C0D0E1";
  commentDiv.style.width = "90%";
  commentDiv.style.padding = "5px";
  commentDiv.style.minHeight = "6em";
  const objectV = this.document.getElementById("shearDiagramObject-2");
  const shearSVG = objectV.contentDocument.querySelector("svg");
  const objectM = document.getElementById("momentDiagramObject-2");
  const momentSVG = objectM.contentDocument.querySelector("svg");

  let currentStep = -1;

  function updateView() {
    const allItems = new Set();

    steps.forEach((step) => {
      step.show.forEach((item) => allItems.add([item, step.diagram])); // make  a list of all items in steps:  [id, "shear"|"moment"]
      step.hide.forEach((item) => allItems.add([item, step.diagram]));
    });
    // initialize the digram by hiding all items
    allShearPoints.forEach((id) => {
      var svg = shearSVG;
      const el = svg.querySelector(`#${id}`);
      if (el) el.style.opacity = 0;
    });

    allMomentPoints.forEach((id) => {
      var svg = momentSVG;
      const el = svg.querySelector(`#${id}`);
      if (el) el.style.opacity = 0;
    });
    // for each step, show and hide elements
    for (let i = 0; i <= currentStep; i++) {
      steps[i].show.forEach((id) => {
        var diagram = steps[i].diagram;
        var svg = diagram == "shear" ? shearSVG : momentSVG;
        const el = svg.querySelector(`#${id}`);
        if (el) el.style.opacity = 1;
      });
      steps[i].hide.forEach((id) => {
        var diagram = steps[i].diagram;
        var svg = diagram == "shear" ? shearSVG : momentSVG;
        const el = svg.querySelector(`#${id}`);
        if (el) el.style.opacity = 0;
      });
    }

    const replacements = [
      { find: "<m>", replace: "\\(" },
      { find: "</m>", replace: "\\)" },
      { find: "<me>", replace: "\\[" },
      { find: "</me>", replace: "\\]" },
    ];

    function unPreText(str) {
      for (const rep of replacements) {
        str = str.replaceAll(rep.find, rep.replace);
      }
      str = str.replace("<p>", ""); // strip off initial '<p>'
      var step = (currentStep = 0 ? "" : currentStep);
      return "<p><span style='margin-right: 1em; font-weight: bold;'>" + currentStep + ".</span>" + str + "</p>";
    }
    commentDiv.innerHTML = currentStep >= 0 ? unPreText(steps[currentStep].commentary) : "";

    // MathJax render
    if (window.MathJax) {
      MathJax.typeset([commentDiv]);
    }
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    try {
      if (currentStep < steps.length - 2) {
        currentStep++;
        updateView();
      }
    } catch (error) {
      console.log(currentStep, error);
    }
  });

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateView();
    }
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    currentStep = -1;
    updateView();
  });

  updateView(); // start now that iframe has loaded
};

const steps = [
  {
    diagram: "shear",
    show: [],
    hide: [],
    commentary:
      "<p>First, find the reaction forces and double check that they're correct. The reactions are\
      <m>R_A = \\N{260}</m> and <m>R_B = \\N{40}</m>.</p>",
  },
  {
    diagram: "shear",
    show: ["xaxis", "yaxis", "Vx", "x"],
    hide: [],
    commentary:
      "<p>Establish the shear graph with a horizontal axis below the beam and a vertical axis to represent shear. Positive shears will be plotted above the \
    <m>x</m> axis and negative below.</p>",
  },
  {
    diagram: "shear",
    show: ["IP1", "IP3", "IP4"],
    hide: [],
    commentary: "<p>Divide the beam into segments by adding vertical lines at all the <q>interesting points,</q> <ie/> points.</p>",
  },

  {
    diagram: "shear",
    show: ["dot1", "dot2", "N100", "segment1"],
    hide: [],
    commentary:
      "<p>Start with a dot at <m>(0,0)</m> and proceed from left to right until you reach the end of the beam. On the first segment the distributed load causes the shear to \
      slope down at a rate of <m>\\lbperft{25}</m>, making the total drop over the <m>\\m{4}</m> segment <m>\\N{100}</m>.</p>",
  },
  {
    diagram: "shear",
    show: ["dot3", "jump1", "P160"],
    hide: [],
    commentary: "<p> The reaction force at <m>x = 4</m> causes a <m>\\N{260}</m> upward jump there.</p>",
  },
  {
    diagram: "shear",
    show: ["dot5", "segment2", "N40"],
    hide: [],
    commentary:
      "<p>The <m>\\lbperft{25}</m> distributed load continues after the jump, causing the shear curve to continue sloping down until it \
    reaches <m>\\N{-40}</m> at  <m>x=12</m>.</p>",
  },
  {
    diagram: "shear",
    show: ["dot5", "segment3", "dot6", "jump2"],
    hide: [],
    commentary:
      "<p>The concentrated moment at this point has no effect on the shear diagram! </p>\
      <p>There is no load on the final segment, so the curve remains at <m>\\N{-40}</m> until the end of the beam, at which point the reaction returns\
       the curve  to zero.</p>",
  },
  {
    diagram: "shear",
    show: ["IP2", "dot4", "d1", "d2"],
    hide: [],
    commentary:
      "Add another vertical line where the shear diagram crosses the <m>x</m>-axis and locate the zero crossing.\
      <me> \\dfrac{\\N{-25}}{\\m{1}} = \\dfrac{\\N{-160}}{d}</me>\
      <me> d= \\m{6.4} \\qquad d' = (8 - d) = \\m{1.6}</me></p>",
  },
  {
    diagram: "shear",
    show: ["A1", "A2", "A3", "A4", "A_1", "A_2", "A_3", "A_4", "Sarrow", "A_1", "A_2", "A_3", "A_4"],
    hide: [],
    commentary: "<p> Divide the area into rectangles and triangles between the vertical lines.</p>",
  },
  {
    diagram: "shear",
    show: ["MA1", "MA2", "MA3", "MA4", "MA5", "MA6"],
    hide: ["A_1", "A_2", "A_3", "A_4", "A_5", "A_6"],
    commentary:
      "<p>Calculate the areas.\
      \\begin{align}\
    A_1 \\amp = \\dfrac{ \\m{4} \\times \\N{-100}}{2} = \\Nm{-200}\\\\\
    A_2 \\amp = \\dfrac{ \\m{6.4} \\times \\N{160}}{2} = \\Nm{512}\\\\\
    A_3 \\amp = \\dfrac{ \\m{1.6} \\times \\N{-40}}{2} = \\Nm{-32}\\\\\
    A_4 \\amp = \\m{3} \\times \\N{40} =  \\Nm{120}\\\\\
    \\Sigma A_i \\amp = \\Nm{160}\
    \\end{align}<p>",
  },
  {
    diagram: "shear",
    show: [],
    hide: ["d1", "d2"],
    commentary:
      "<p>Did you notice that the sum of the four areas didn't add up to zero! </p>\
      <p>The counterclockwise <m>\\Nm{160}</m> concentrated moment makes up the difference required for equilibrium.</p>",
  },
  {
    diagram: "moment",
    show: ["xaxis", "yaxis", "IP1", "IP2", "IP3", "IP4", "x", "Mx"],
    hide: [],
    commentary:
      "<p>Establish the moment graph beneath the shear diagram with a vertical axis to represent moment. Positive moments will be plotted above the\
  <m>x</m> axis and negative below.</p>",
  },
  {
    diagram: "moment",
    show: ["dot1", "dot2", "dot3", "dot4", "dot5", "dot6", "M1", "M2", "M3", "M4"],
    hide: [],
    commentary:
      "<p>Draw and label dots on the moment diagram starting with a dot at <m>(0,0)</m> then proceed from left to right placing dots until you reach the end of the beam. </p>\
      <p>As you move across each segment move up or down by the <q>area</q> of that segment and place a dot. </p>\
     <p>The concentrated moment causes a <m>\\Nm{160}</m> downward jump on the moment diagram.</p>\
     <p>When you reach the end of the beam you should return to <m>M=0</m>. If you didn't, then recheck your work!",
  },

  {
    diagram: "moment",
    show: ["segment1", "segment2"],
    hide: [],
    commentary:
      "<p>Connect the dots with correctly shaped curves.</p>\
      <p>Segments under uniformly distributed loads are parabolas. The shape can be determined from <me>\\dfrac{dM}{dx} = V</me></p>\
      <p>Over segment one, the shear changes from <m>\\N{0}</m> to <m>\\N{-100}</m>, so the curve starts with a horizontal tangent, then curves down.\
      At <m>x=4</m> the shear suddenly changes from <m>\\N{-100}</m> to <m>\\N{+160}</m> which causes a kink in the shear curve as it abruptly changes from negative to positive slope.\
      The curve peaks at the zero crossing, and then turns down due to <m>A_3</m>.</p>",
  },
  {
    diagram: "moment",
    show: ["jump1", "segment3"],
    hide: [],
    commentary: "<p>The concentrated moment causes a downward jump at <m>x=12</m>, and the final segment is linear since the shear above it is constant.",
  },
  {
    diagram: "shear",
    show: ["d3"],
    hide: ["MA1", "MA2", "MA3", "MA4", "A1", "A2", "A3", "A4", "Sarrow"],
    commentary: "<p>This is the final result. </p>",
  },
  ,
];

const allShearPoints = [
  "xaxis",
  "yaxis",
  "x",
  "Vx",
  "A4",
  "A3",
  "A2",
  "A1",
  "segment3",
  "segment2",
  "segment1",
  "dot7",
  "dot6",
  "dot5",
  "dot4",
  "dot3",
  "dot2",
  "dot1",
  "d1",
  "d2",
  "d3",
  "jump4",
  "jump3",
  "jump2",
  "jump1",
  "IP1",
  "IP2",
  "IP3",
  "IP4",
  "P160",
  "N40",
  "N100",
  "A_1",
  "A_2",
  "A_3",
  "A_4",
  "MA1",
  "MA2",
  "MA3",
  "MA4",
  "Sarrow",
];

allMomentPoints = ["xaxis", "yaxis", "x", "Mx", "jump1", "M1", "M2", "M3", "M4", "segment3", "segment2", "segment1", "dot6", "dot5", "dot4", "dot3", "dot2", "dot1", "IP1", "IP2", "IP3", "IP4"];
