window.onload = function () {
  const commentDiv = this.document.getElementById("graphical-procedure-2");
  commentDiv.style.minHeight = "14em";
  commentDiv.style.paddingTop = ".5em";

  const ol = this.document.getElementById("graphical-procedure-2-1-1");
  ol.style.paddingLeft = "0px";
  const comments = commentDiv.getElementsByTagName("li");
  const svgs = this.document.querySelectorAll("svg");
  const loadSVG = svgs[0];
  const shearSVG = svgs[1];
  const momentSVG = svgs[2];

  function getSVG(name) {
    switch (name) {
      case "load": {
        return svgs[0];
      }
      case "shear": {
        return svgs[1];
      }
      case "moment": {
        return svgs[2];
      }
    }
  }

  let currentStep = -1;

  function updateView() {
    const allItems = new Set();
    steps.forEach((step) => {
      step.show.forEach((item) => allItems.add([item, step.diagram])); // make  a list of all items in steps:  [id, "shear"|"moment"]
      step.hide.forEach((item) => allItems.add([item, step.diagram]));
    });
    // initialize the diagram by hiding all items

    loadSVG.setAttribute("style", "visibility: hidden");

    for (const comment of comments) {
      comment.setAttribute("style", "visibility: collapse; height: 0; margin: 0;"); // hide all the steps.
    }

    allShearPoints.forEach((id) => {
      const el = getSVG("shear").querySelector(`#${id}`);
      if (el) el.style.opacity = 0;
    });

    allMomentPoints.forEach((id) => {
      const el = getSVG("moment").querySelector(`#${id}`);
      if (el) el.style.opacity = 0;
    });
    // for each step, show and hide elements

    for (let i = 0; i <= currentStep; i++) {
      comments[i].setAttribute("style", "visibility: collapse; height: 0; margin: 0; ");
      steps[i].show.forEach((id) => {
        var svg = getSVG(steps[i].diagram); // select the right diagram
        const el = svg.querySelector(`#${id}`);
        if (el) el.style.opacity = 1;
      });
      steps[i].hide.forEach((id) => {
        var svg = getSVG(steps[i].diagram);
        const el = svg.querySelector(`#${id}`);
        if (el) el.style.opacity = 0;
      });
      if (currentStep >= 0) {
        loadSVG.setAttribute("style", "visibility: visible");
      }
      comments[currentStep].setAttribute("style", "visibility: visible");
    }

    // MathJax render
    if (window.MathJax) {
      MathJax.typeset([commentDiv]);
    }
  }

  document.getElementById("nextBtn").addEventListener("click", () => {
    try {
      if (currentStep < steps.length - 1) {
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
    diagram: "load",
    show: ["RA", "RB"],
    hide: [],
  },
  {
    diagram: "shear",
    show: ["xaxis", "yaxis", "Vx", "x"],
    hide: [],
  },
  {
    diagram: "shear",
    show: ["IP1", "IP3", "IP4"],
    hide: [],
  },

  {
    diagram: "shear",
    show: ["dot1", "dot2", "N100", "segment1"],
    hide: [],
  },
  {
    diagram: "shear",
    show: ["dot3", "jump1", "P160"],
    hide: [],
  },
  {
    diagram: "shear",
    show: ["dot5", "segment2", "N40"],
    hide: [],
  },
  {
    diagram: "shear",
    show: ["dot5", "segment3", "dot6", "jump2"],
    hide: [],
  },
  {
    diagram: "shear",
    show: ["IP2", "dot4", "d1", "d2"],
    hide: [],
  },
  {
    diagram: "shear",
    show: ["A1", "A2", "A3", "A4", "A_1", "A_2", "A_3", "A_4", "Sarrow", "A_1", "A_2", "A_3", "A_4"],
    hide: [],
  },
  {
    diagram: "shear",
    show: ["MA1", "MA2", "MA3", "MA4", "MA5", "MA6"],
    hide: ["A_1", "A_2", "A_3", "A_4", "A_5", "A_6"],
  },
  {
    diagram: "shear",
    show: [],
    hide: ["d1", "d2"],
  },
  {
    diagram: "moment",
    show: ["xaxis", "yaxis", "IP1", "IP2", "IP3", "IP4", "x", "Mx"],
    hide: [],
  },
  {
    diagram: "moment",
    show: ["dot1", "dot2", "dot3", "dot4", "dot5", "dot6", "M1", "M2", "M3", "M4"],
    hide: [],
  },

  {
    diagram: "moment",
    show: ["segment1", "segment2"],
    hide: [],
  },
  {
    diagram: "moment",
    show: ["jump1", "segment3"],
    hide: [],
  },
  {
    diagram: "shear",
    show: ["d3"],
    hide: ["MA1", "MA2", "MA3", "MA4", "A1", "A2", "A3", "A4", "Sarrow"],
  },
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
