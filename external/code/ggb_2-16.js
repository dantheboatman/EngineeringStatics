var listeners = function(ggb) {

    function xyz(obj, d) {
        return `\\langle \\, ${ggb.getXcoord(obj).toFixed(d)}, ${ggb.getYcoord(obj).toFixed(d)}, ${ggb.getZcoord(obj).toFixed(d)}\\, \\rangle`
    };

    var updateSlate = function() {
        var node1 = document.getElementById('vectors');
        latex = "\\[{\\begin{align}" + "\\vec{A} \\amp = " + xyz('A', 0) + "\\amp \\vec{B} \\amp=" + xyz('B', 0) + "\\end{align} }\\]";
        node1.innerHTML = latex;

        // GGB booleans decide what to show, only one allowed at a time.;
        var node2 = document.getElementById('info-2-16');
        node2.innerHTML = '';
        if (ggb.getValue('AonB') == true) {
            node2.innerHTML = "\\[{\\proj_BA = " + xyz('ProjAB', 3) + "}\\]"
        };
        if (ggb.getValue('BonA') == true) {
            node2.innerHTML = "\\[{\\proj_AB = " + xyz('ProjBA', 3) + "}\\]"
        };
        if (ggb.getValue('showθ') == true) {
            node2.innerHTML = "\\[{\\theta = " + ggb.getValue('θ/°').toFixed(1) + "°}\\]"
        };

        if (window.MathJax) {
            MathJax.typesetPromise([node1, node2]).then(() => {});
        }
    }
    // manage buttons
    document.getElementById('projAB').addEventListener('click', function() {
        ggb.evalCommand('AonB  = ! AonB \n BonA = false \n showθ = false')
    });
    document.getElementById('projBA').addEventListener('click', function() {
        ggb.evalCommand('BonA  = ! BonA \n AonB = false \n showθ = false')
    });
    document.getElementById('theta').addEventListener('click', function() {
        ggb.evalCommand('showθ = ! showθ \n AonB = false \n BonA = false')
    });
    document.getElementById('reset').addEventListener('click', function() {
        ggb.evalCommand('RunClickScript(Reset)');
        ggb.evalCommand('A=(-6,2,4)');
        ggb.evalCommand('B=(7,-4,6)');
        updateSlate()
    });

    ggb.registerUpdateListener(updateSlate);
    updateSlate();
}