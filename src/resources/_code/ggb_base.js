var listeners = function(ggb) {

    var updateSlate = function() {
      node = document.getElementById('info');
      latex = "$${\\small " + ggb.getValueString('latex') + "}$$";
      node.innerHTML =  latex ;
      if (window.MathJax) {
         MathJax.typesetPromise([node]).then(() => {});
      }
    }
    ggb.registerUpdateListener(updateSlate);
    updateSlate();
}
