var listeners = function(ggb) {

    var updateSlate = function() {
      node1 = document.getElementById('info1');
      node2 = document.getElementById('info2');
      latex1 = "\\[{ " + ggb.getValueString('latex1') + "}\\]";
      latex2 = "\\[{ " + ggb.getValueString('latex2') + "}\\]";
      node1.innerHTML =  latex1 ;
      node2.innerHTML =  latex2 ;
      if (window.MathJax) {
         MathJax.typesetPromise([node1, node2]).then(() => {});
      }
    }
    ggb.registerUpdateListener(updateSlate);
    updateSlate();
}
