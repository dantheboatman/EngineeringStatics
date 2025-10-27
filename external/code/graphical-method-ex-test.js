const SVG_NS = "http://www.w3.org/2000/svg";

window.onload = function () {
  const commentDiv = document.getElementById("VMComment-ex-2");
  commentDiv.style.backgroundColor = "#C0D0E1";
  commentDiv.style.width = "90%";
  commentDiv.style.padding = "5px";
  commentDiv.style.minHeight = "6em";
  const object1 = document.getElementById("shearDiagramObject-2");
  const object2 = document.getElementById("momentDiagramObject-2");

  let svg1 = null;
  let svg2 = null;
  let currentStep = -1;

  function getSVG(which) {
    return which === "shear" ? svg1 : svg2;
  }

  function hideAll() {
    allShearPoints.forEach((id) => {
      const el = svg1?.getElementById(id);
      if (el) el.style.opacity = 0;
    });

    allMomentPoints.forEach((id) => {
      const el = svg2?.getElementById(id);
      if (el) el.style.opacity = 0;
    });
  }

  function updateView() {
    if (!svg1 || !svg2) return;

    hideAll();

    for (let i = 0; i <= currentStep; i++) {
      const step = steps[i];

      step.shear.show.forEach((id) => {
        const el = svg1.getElementById(id);
        if (el) el.style.opacity = 1;
      });
      step.shear.hide.forEach((id) => {
        const el = svg1.getElementById(id);
        if (el) el.style.opacity = 0;
      });

      step.moment.show.forEach((id) => {
        const el = svg2.getElementById(id);
        if (el) el.style.opacity = 1;
      });
      step.moment.hide.forEach((id) => {
        const el = svg2.getElementById(id);
        if (el) el.style.opacity = 0;
      });
    }

    commentDiv.innerHTML = currentStep >= 0 ? steps[currentStep].commentary : "";
    if (window.MathJax) MathJax.typeset();
  }

  // Load SVGs and init
  let loaded = 0;
  function tryInit() {
    loaded++;
    if (loaded === 2) {
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

      updateView();
    }
  }

  object1.addEventListener("load", () => {
    svg1 = object1.contentDocument.getElementsByTagNameNS(SVG_NS, "svg")[0];
    tryInit();
  });

  object2.addEventListener("load", () => {
    svg2 = object2.contentDocument.getElementsByTagNameNS(SVG_NS, "svg")[0];
    tryInit();
  });
};

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

const steps = [
  {
    shear: { show: ["xaxis", "yaxis", "dot1"], hide: [] },
    moment: { show: ["xaxis", "yaxis", "dot1", "segment1"], hide: ["segment1"] },
    commentary: "Start with $V = 0$ at $x = 0$ (left diagram).",
  },
  {
    shear: { show: ["segment1"], hide: [] },
    moment: { show: ["dotdot2"], hide: [] },
    commentary: "Now draw the segment and show dot1 in the moment diagram.",
  },
  // more steps...
];
