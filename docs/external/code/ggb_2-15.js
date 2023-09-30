var listeners = function(ggb) {


    var nodes = []
    nodes.push(document.getElementById("ggb_2__15_u"));
    nodes.push(document.getElementById("ggb_2__15_v"));
   

    var updateSlate = function() {
        var val = {
            A: `\\langle ${ggb.getXcoord('a').toFixed(1)}, ${ggb.getYcoord('a').toFixed(1)} \\rangle`,
            B: `\\langle ${ggb.getXcoord('b').toFixed(1)}, ${ggb.getYcoord('b').toFixed(1)} \\rangle`,
            Ahat: `\\langle ${(ggb.getXcoord('a')/ggb.getValue('abs(a)')).toFixed(2)}, ${(ggb.getYcoord('a')/ggb.getValue('abs(a)')).toFixed(2)} \\rangle`,
            Bhat: `\\langle ${(ggb.getXcoord('b')/ggb.getValue('abs(b)')).toFixed(2)}, ${(ggb.getYcoord('b')/ggb.getValue('abs(b)')).toFixed(2)} \\rangle`,
            u: `\\langle ${ggb.getXcoord('u').toFixed(2)}, ${ggb.getYcoord('u').toFixed(2)} \\rangle`,
            v: `\\langle ${ggb.getXcoord('v').toFixed(2)}, ${ggb.getYcoord('v').toFixed(2)} \\rangle`
        };


        var latex = [

            `\\begin{align*} \\vec{A} \\amp= ${val.A} \\amp \\vec{B} \\amp=${val.B}\\\\
             \\hat{\\vec{A}} \\amp = \\frac{\\vec{A}}{|\\vec{A}|} = ${val.Ahat} \\amp
             \\vec{u}  \\amp = \\proj_AB = (\\hat{\\vec{A}} \\cdot \\vec{B}) \\hat{\\vec{A}} =${val.u}  
             \\end{align*}`,

            `\\begin{align*} \\vec{A} \\amp= ${val.A} \\amp \\vec{B} \\amp=${val.B}\\\\
             \\hat{\\vec{B}} \\amp = \\frac{\\vec{B}}{|\\vec{B}|} = ${val.Bhat} \\amp
             \\vec{v}  \\amp = \\proj_BA = (\\hat{\\vec{B}} \\cdot \\vec{A}) \\hat{\\vec{B}} =${val.v}  
             \\end{align*}`
        ];
        
        for (let i = 0; i < 2; i++) {
            nodes[i].innerHTML = `\\( { ${latex[i]} } \\)`;
        };
        if (window.MathJax) {
            MathJax.typesetPromise([nodes]).then(() => {});
        }
    };

    var toggleVisibility = function() {

        if (ggb.getValue('show') == 1) {
            nodes[1].style.display = 'none';
            nodes[0].style.display = 'block';
        } else {
            nodes[1].style.display = 'block';
            nodes[0].style.display = 'none';
        
        };
    }


    ggb.registerObjectUpdateListener("a", updateSlate);
    ggb.registerObjectUpdateListener("b", updateSlate);
    ggb.registerObjectUpdateListener("show", toggleVisibility);
    toggleVisibility();
    updateSlate();


}
