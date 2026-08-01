var listeners = function(ggb) {
    // identify first node with @id that starts with L1/R1 
    const nodeL1 = document.querySelectorAll('[id^="L1"]')[0];
    const nodeR1 = document.querySelectorAll('[id^="R1"]')[0];    

    function toggleVisibility() {
        var show = ggb.getValue('show');
        nodeR1.style.display = show ? "block" : "none";
    }

    var updateSlate = function() {
        nodeL1.innerHTML = "\\[ \\begin{align} \\textcolor{#E12020}" + ggb.getValueString('textL1') + 
        "\\\\" + "\\textcolor{#E12020}" + ggb.getValueString('textL2') + " \\end{align} \\]";
        nodeR1.innerHTML = "\\[ \\begin{align} \\textcolor{#4191D9}" + ggb.getValueString('textR1') + 
        "\\\\" + "\\textcolor{#4191D9}" + ggb.getValueString('textR2') + " \\end{align} \\]";
        
        var show = ggb.getValue('show');
        nodeR1.style.display = show ? "block" : "none";
        
        if (window.MathJax) {
            MathJax.typesetPromise([ nodeL1,  nodeR1 ]).then(() => {});
        }
    }
    ggb.registerUpdateListener(updateSlate);
    updateSlate();
        
    nodeR1.style.display = "none";
}
