window.onload = function () {
  const commentDiv = this.document.getElementById("VMComment-ex-1");
  commentDiv.style.backgroundColor = "#C0D0E1";
  commentDiv.style.width = "90%";
  commentDiv.style.padding = "5px";
  commentDiv.style.minHeight = "6em";
  const objectV = this.document.getElementById("shearDiagramObject-1");
  const shearSVG = objectV.contentDocument.querySelector("svg");
  const objectM = this.document.getElementById("momentDiagramObject-1");
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
      "<p>First, determine the reaction forces and moments by drawing a free-body diagram of the entire beam and applying the equilibrium equations.\
     Double check that they are are correct. The reactions are\
      <me>R_A = \\lb{65} \\qquad  R_B = \\lb{85}</me></p>",
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
    show: ["IP1", "IP2", "IP4", "IP5", "IP6"],
    hide: [],
    commentary:
      "<p>Make vertical lines at all the <q>interesting points,</q> <ie/> points where concentrated forces or moments act on the beam and at the beginning and end of any distributed loads.\
     This divides the beam into segments between vertical lines.</p>",
  },

  {
    diagram: "shear",
    show: ["dot1"],
    hide: [],
    commentary: "<p>Start the shear diagram with a dot at <m>(0,0)</m>.</p>",
  },

  {
    diagram: "shear",
    show: ["dot2", "P65", "jump1"],
    hide: [],
    commentary:
      "<p>Draw the shear diagram by proceding from left to right until you reach the end of the beam. Whenever you encounter a concentrated force, jump up or down by that value. </p>\
      <p>Draw a <m>\\lb{65}</m> upward jump at <m>x=0</m> due to  <m>R_A</m>.</p>",
  },
  {
    diagram: "shear",
    show: ["dot3", "segment1"],
    hide: [],
    commentary:
      "<p> Since there is no load acting on the segment from <m>x=0 </m> to <m>x=4</m>, the slope of this segment is <me>\\dfrac{dV}{dx} = w = 0</me> \
    Place a dot at <m>(4,65)</m> and draw a horizontal segment.</p>",
  },
  {
    diagram: "shear",
    show: ["dot4", "jump2", "segment2", "dot5", "P35"],
    hide: [],
    commentary:
      "<p>The <m>\\lb{30}</m> force <m>x=4</m> causes a downward jump to <m>\\lb{35}</m>, and there is no load above this segment.</p>\
    <p>So, place a dot at <m>(4,35)</m> and draw a horizontal segment to <m>(6, 35)</m>.</p>",
  },
  {
    diagram: "shear",
    show: ["dot6", "N65"],
    hide: [],
    commentary:
      "<p> Whenever you encounter a distributed load, move up or down by the <q>area</q> of the distributed load above <m>\\Delta V</m>. <me>\\Delta V = \\int_a^b w(x)\\,dx </me>\
      <me> \\Delta V = \\lbperft{-10}\\times\\ft{10} = \\lb{-100}</me></p>\
      <p>So, go down <m>\\lb{100}</m> as you move from <m>x=6</m> to 16 and place a dot at <m>(16,-65)</m>.</p>",
  },
  {
    diagram: "shear",
    show: ["segment3", "rise", "run", "riserun", "dot11"],
    hide: [],
    commentary:
      "The slope of the curve at each point <m>x</m> is given by <me>\\dfrac{dV}{dx} = w(x)</me>\
Underneath <i>uniformly</i> distributed loads, the slope is constant, so connect these points with a straight line with slope, <m>m = \\lbperft{-10}</m>.</p>",
  },
  { diagram: "shear", show: ["dot7", "segment4"], hide: ["rise", "run", "riserun"], commentary: "<p>Over the next segment, the load is zero, so draw a horizontal segment to <m>(20,-65)</m></p>" },
  { diagram: "shear", show: ["dot8", "jump3", "P20"], hide: [], commentary: "<p>The <m>\\lb{85}</m> reaction force causes an upward jump, so draw a jump to <m>(20,20)</m>.</p>" },
  { diagram: "shear", show: ["dot9", "segment5"], hide: [], commentary: "<p>The load on the final segment is zero, so draw a horizontal segment to <m>(24,-20)</m>.</p>" },
  {
    diagram: "shear",
    show: ["dot10", "jump4"],
    hide: [],
    commentary:
      "<p>The <m>\\lb{-20}</m> force at <m>D</m> causes a downward jump, so draw a jump to <m>(24,0)</m>.</p>\
    <p>Shear diagram should always end at <m>V =0</m>.  If yours doesn't, recheck your work!<p>",
  },
  {
    diagram: "shear",
    show: ["IP3", "dot11", "d1"],
    hide: [],
    commentary: "<p>Add another interesting point at any points where the shear diagram crosses the <m>x</m>-axis.  We will need to find this point.</p>",
  },
  {
    diagram: "shear",
    show: ["d2", "rise", "run", "riserun", "A3"],
    hide: [],
    commentary:
      "<p>Determine the <m>x</m> position of the zero crossing. </p><p>Since we know the slope of this segment, use similar triangles to find the distance <m>d</m>.\
      <me> \\dfrac{\\lb{-10}}{\\ft{1}} = \\dfrac{\\lb{-35}}{d}</me>\
      <me> d= \\ft{3.5} \\qquad d' = (10 - d) = \\ft{6.5}</me></p>",
  },
  {
    diagram: "shear",
    show: ["A1", "A2", "A3", "A4", "A5", "A6", "A_1", "A_2", "A_3", "A_4", "A_5", "A_6"],
    hide: [, "rise", "run", "riserun"],
    commentary:
      "<p> After you have completed the shear diagram, divide the area into rectangles and triangles between the vertical lines.</p>\
    These areas are in fact, moments.  Areas above the axis are positive moments, areas below the axis are negative moments.</p>",
  },
  {
    diagram: "shear",
    show: ["MA1", "MA2", "MA3", "MA4", "MA5", "MA6"],
    hide: ["A_1", "A_2", "A_3", "A_4", "A_5", "A_6"],
    commentary:
      "<p>Calculate the areas.\
    \\begin{align}\
    A_1 \\amp = \\ft{4} \\times \\lb{65} = \\ftlb{260} \\amp\
    A_4 \\amp = \\dfrac{ \\ft{6.5} \\times \\lb{-65}}{2} = \\ftlb{-211.25}\\\\\
    A_2 \\amp = \\ft{2} \\times \\lb{35} = \\ftlb{70}\\amp\
    A_5 \\amp = \\ft{4} \\times \\lb{-65} = \\ftlb{-260} \\\\\
    A_3 \\amp = \\dfrac{ \\ft{3.5} \\times \\lb{35}}{2} = \\ftlb{61.25}\\amp\
    A_6 \\amp = \\ft{4} \\times \\lb{20} =  \\ftlb{80}\\\
    \\end{align} <p>\
    <p>Notice that the areas have moment units.</p>",
  },
  {
    diagram: "shear",
    show: [],
    hide: ["d1", "d2"],
    commentary:
      "<p>As a reflection of <m>\\Sigma M = 0</m>, the positive and negative areas must add up to zero. If they don't, recheck your work!\
    <me>\\Sigma A_i = 260 + 70 + 61.25 - 211.25 - 260 + 80 = 0~~ \\checkmark</me></p>\
   <p> If the load includes any concentrated moments, they must also be included in the tally.</p>",
  },
  {
    diagram: "moment",
    show: ["xaxis", "yaxis", "IP1", "IP2", "IP3", "IP4", "IP5", "IP6", "x", "Mx"],
    hide: [],
    commentary:
      "<p>Establish the moment graph beneath the shear diagram with a vertical axis to represent moment. Positive moments will be plotted above the\
  <m>x</m> axis and negative below.</p>",
  },
  {
    diagram: "moment",
    show: ["dot1", "dot2", "dot3", "dot4", "dot5", "dot6", "dot7", "P260", "P330", "P391", "P180", "N80"],
    hide: [],
    commentary:
      "<p>Draw and label dots on the moment diagram starting with a dot at <m>(0,0)</m> then proceed from left to right placing dots until you reach the end of the beam.\
     As you move across each segment move up or down by the <q>area</q> of that segment and place a dot.  If you pass a concentrated moments, jump by that amount.<p>\
     <p>When you reach the end of the beam you should return to <m>M=0</m>. If you didn't, then recheck your work!</p>",
  },
  {
    diagram: "moment",
    show: ["segment1", "segment2", "segment4", "segment5"],
    hide: [],
    commentary: "<p>Connect the dots with correctly shaped lines. Segments under constant shear are straight lines.</p>",
  },
  {
    diagram: "moment",
    show: ["segment3"],
    hide: [],
    commentary:
      "<p>Segments under uniformly distributed loads are parabolas. The shape can be determined from <me>\\dfrac{dM}{dx} = V</me></p>\
      <p>Between <m>x=6</m> and <m>x=16</m>, the shear changes from <m>\\lb{+35}</m> through 0 to <m>\\lb{-65}</m>, so the curve starts with a positive slope, reaches\
       a maximum where the shear crosses the <m>x</m>-axis, and then turns down to end with negative slope.</p>",
  },
  {
    diagram: "shear",
    show: ["d3"],
    hide: ["MA1", "MA2", "MA3", "MA4", "MA5", "MA6", "A1", "A2", "A3", "A4", "A5", "A6"],
    commentary: "<p>This is the final result. </p>",
  },
  ,
];

const allShearPoints = [
  "xaxis",
  "yaxis",
  "x",
  "Vx",
  "A6",
  "A5",
  "A4",
  "A3",
  "A2",
  "A1",
  "segment5",
  "segment4",
  "segment3",
  "segment2",
  "segment1",
  "dot11",
  "dot10",
  "dot9",
  "dot8",
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
  "IP5",
  "IP6",
  "P65",
  "N65",
  "P20",
  "P35",
  "P20",
  "A_1",
  "A_2",
  "A_3",
  "A_4",
  "A_5",
  "A_6",
  "rise",
  "run",
  "riserun",
  "MA1",
  "MA2",
  "MA3",
  "MA4",
  "MA5",
  "MA6",
];

allMomentPoints = [
  "xaxis",
  "yaxis",
  "x",
  "Mx",
  "P260",
  "P330",
  "P391",
  "P180",
  "N80",
  "segment5",
  "segment4",
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
  "IP1",
  "IP2",
  "IP3",
  "IP4",
  "IP5",
  "IP6",
];
