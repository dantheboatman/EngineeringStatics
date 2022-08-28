var listeners = function(ggb) {

    const node1 = document.getElementById('info1');
    const node2 = document.getElementById('info2');
    const node3 = document.getElementById('info3');
    const node4 = document.getElementById('info4');


    var updateSlate = function() {
        node1.innerHTML = "\\[{ " + ggb.getValueString('textMu') + "}\\]";
        node2.innerHTML = "\\[{ " + ggb.getValueString('textLoad1') + "}\\]";
        node3.innerHTML = "\\[{ " + ggb.getValueString('textFriction') + "}\\]";
        node4.innerHTML = "\\[{ " + ggb.getValueString('textResults1') + "}\\]";
        if (window.MathJax) {
            MathJax.typesetPromise([node1, node2, node3, node4]).then(() => {});
        }
    }
    ggb.registerObjectUpdateListener("A", updateSlate);
    ggb.registerObjectUpdateListener("A'", updateSlate);
    ggb.registerObjectUpdateListener("C'", updateSlate);
    ggb.registerObjectUpdateListener("G_s", updateSlate);
    ggb.registerObjectUpdateListener("G_k", updateSlate);
    ggb.registerObjectUpdateListener("D", updateSlate);
    ggb.registerObjectUpdateListener("Box_1", updateSlate);
    ggb.registerObjectUpdateListener("Box_3", updateSlate);
    updateSlate();
    
}
