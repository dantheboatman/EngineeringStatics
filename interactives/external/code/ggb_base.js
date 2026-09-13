var listeners = function(ggb) {

    var updateSlate = function() {
      // identify first node whose @id starts with "info"
      node = document.querySelectorAll('[id^="info"]')[0];
      node.innerHTML =  "\\[{ " + ggb.getValueString('latex') + "}\\]";
      if (window.MathJax) {
         MathJax.typesetPromise([node]).then(() => {});
      }
    }
    ggb.registerUpdateListener(updateSlate);
    updateSlate();
}