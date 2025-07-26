window.onload = function () {
  const commentDiv = document.getElementById("VMComment");
  const object = document.getElementById("shearDiagramObject");
  const svg = object.contentDocument.querySelectorAll("svg")[0];

  console.log("svg", svg);

  let currentStep = 0;

  function updateView() {
    const allIds = new Set();
    steps.forEach((step) => {
      step.show.forEach((id) => allIds.add(id));
      step.hide.forEach((id) => allIds.add(id));
    });

    allIds.forEach((id) => {
      const el = svg.querySelector(`#${id}`);
      if (el) el.style.opacity = 0;
    });

    for (let i = 0; i <= currentStep; i++) {
      steps[i].show.forEach((id) => {
        const el = svg.querySelector(`#${id}`);
        if (el) el.style.opacity = 1;
      });
      steps[i].hide.forEach((id) => {
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
      return "<p><span style='margin-right: 1em; font-weight: bold;'>" + currentStep + ".</span>" + str + "</p>";
    }
    commentDiv.innerHTML = currentStep >= 0 ? unPreText(steps[currentStep].commentary) : "";

    // MathJax render
    if (window.MathJax) {
      MathJax.typeset([commentDiv]);
    }
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
      currentStep++;
      updateView();
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
    show: ["xaxis", "yaxis"],
    hide: [
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
      "jump4",
      "jump3",
      "jump2",
      "jump1",
      "interesting points",
    ],
    commentary: "",
  },
  {
    show: ["dot1"],
    hide: [],
    commentary:
      "First, determine the reaction forces and moments by drawing a free-body diagram of the entire beam and applying the equilibrium equations.\
     Double check that your reactions are correct. Solving for the reactions, we get\
      <me>R_A = \\kN{65} \\qquad  R_B = \\kN{20}</me>",
  },
  {
    show: ["dot2", "dot1"],
    hide: [],
    commentary: "Shear diagrams always begin with a dot at <m>(x = 0, V = 0)</m>, however due to the concentrated reaction at <m>R_A</m> the function instantly moves up to \\(V =\\lb{65}\\).",
  },
  {
    show: ["jump1"],
    hide: [],
    commentary: "This is represented by an upward jump at <m>x=0</m>.",
  },
  {
    show: ["dot3", "segment1"],
    hide: [],
    commentary: "Since there is no load directly above this segment, the shear remains unchanged at <m>\\lb{65}</m>, and the slope of this segment is zero.",
  },
  {
    show: ["dot4", "jump2"],
    hide: [],
    commentary: "The 30 lb concentrated force causes the curve to jump down 30 lb, so the function ends up at 35 lb.",
  },
  {
    show: ["dot5", "segment2"],
    hide: [],
    commentary: "This segments is also horizontal, since there is no load directly above.",
  },
  {
    show: ["dot6"],
    hide: [],
    commentary:
      "This distributed load causes the shear to decrease at a rate of 10 lb/ft.  </p>\
      <p>The total change in shear <m>\\Delta V</m> is the <sq>area<sq> of the rectangular load, which is <m>\\lb{100}</m>. </p>\
      <p>Place a dot at <m>x=\\ft{16}</m>,  <m>V = (35 - \\Delta V)  = \\lb{- 65}</m>.",
  },
  {
    show: ["segment3"],
    hide: [],
    commentary: "Connect these points with a straight line, because the slope is the value of the shear above, which here is a constant <m>\\lbperft{-10}</m>.",
  },
  {
    show: ["dot7", "segment4"],
    hide: [],
    commentary: "",
  },
  {
    show: ["dot8", "jump3"],
    hide: [],
    commentary: "",
  },
  {
    show: ["dot9", "segment5"],
    hide: [],
    commentary: "",
  },
  {
    show: ["dot10", "jump4"],
    hide: [],
    commentary: "",
  },
  {
    show: ["A1"],
    hide: [],
    commentary: "",
  },
  {
    show: ["A2"],
    hide: ["A1"],
    commentary: "",
  },
  {
    show: ["A3", "d1"],
    hide: ["A2"],
    commentary: "",
  },
  {
    show: ["A4", "d2"],
    hide: ["A3"],
    commentary: "",
  },
  {
    show: ["A5"],
    hide: ["A4"],
    commentary: "",
  },
  {
    show: ["A6"],
    hide: ["A5"],
    commentary: "",
  },
  {
    show: [],
    hide: ["A6"],
    commentary: "",
  },
];
