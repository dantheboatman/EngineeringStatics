var listeners = function(ggb) {
    const nodeL1 = document.getElementById('L1');
    const nodeR1 = document.getElementById('R1');


    function toggleVisibility() {
        nodeR1.style.display = nodeR1.style.display == "none" ? "block" : "none";
        ggb.setValue('show', nodeR1.style.display == "none" ? false : true);
    }



    var updateSlate = function() {
        nodeL1.innerHTML = "\\[ \\begin{align} \\textcolor{#E12020}" + ggb.getValueString('textL1') + 
        "\\\\" + "\\textcolor{#E12020}" + ggb.getValueString('textL2') + " \\end{align} \\]";
        nodeR1.innerHTML = "\\[ \\begin{align} \\textcolor{#4191D9}" + ggb.getValueString('textR1') + 
        "\\\\" + "\\textcolor{#4191D9}" + ggb.getValueString('textR2') + " \\end{align} \\]";
        
        if (window.MathJax) {
            MathJax.typesetPromise([ nodeL1,  nodeR1 ]).then(() => {});
        }
    }
    ggb.registerUpdateListener(updateSlate);
    updateSlate();
    document.getElementById('showReactions').addEventListener('click', function() {
        toggleVisibility()
    });
    nodeR1.style.display = "none"
    nodeR2.style.display = "none"
}
