var listeners = function(ggb) {

    const node1 = document.getElementById('info1');
    const node2 = document.getElementById('info2');
    const node3 = document.getElementById('info3');

    function toggleVisibility() {
        node2.style.display = node2.style.display == "none" ? "block" : "none";
        node3.style.display = node3.style.display == "none" ? "block" : "none";
    }

    var updateSlate = function() {
        node1.innerHTML = "\\[{ " + ggb.getValueString('textP') + "}\\]";
        node2.innerHTML = "\\[{ " + ggb.getValueString('textR1') + "}\\]";
        node3.innerHTML = "\\[{ " + ggb.getValueString('textR2') + "}\\]";
        if (window.MathJax) {
            MathJax.typesetPromise([node1, node2, node3]).then(() => {});
        }
    }
    ggb.registerUpdateListener(updateSlate);
    updateSlate();
    document.getElementById('showAnswer').addEventListener('click', function() {
        toggleVisibility()
    });
    node2.style.display = "none"
    node3.style.display = "none"
}
