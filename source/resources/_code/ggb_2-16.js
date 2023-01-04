var listeners = function(ggb) {
    


//name html elements
    
const Ax = document.getElementById('Ax');
const Ay = document.getElementById('Ay');
const Az = document.getElementById('Az');
const Bx = document.getElementById('Bx');
const By = document.getElementById('By');
const Bz = document.getElementById('Bz');
const AB = document.getElementById('AonB'); //button 
const BA = document.getElementById('BonA'); //button
const info = document.getElementById('info') //text


// update html (slate) when diagram changes

function xyz(obj){ 
   return `\\langle \\, ${ggb.getXcoord(obj).toFixed(3)}, ${ggb.getYcoord(obj).toFixed(3)}, ${ggb.getZcoord(obj).toFixed(3)}\\, \\rangle`
};




var updateSlate = function (){
    Ax.value = ggb.getXcoord('A').toFixed(1);
    Ay.value = ggb.getYcoord('A').toFixed(1);
    Az.value = ggb.getZcoord('A').toFixed(1);
    Bx.value = ggb.getXcoord('B').toFixed(1);
    By.value = ggb.getYcoord('B').toFixed(1);
    Bz.value = ggb.getZcoord('B').toFixed(1);
    
    
 // GGB booleans decide what to show, only one allowed at a time.;
    node = document.getElementById('info');
    node.innerHTML='';
    if (ggb.getValue('AonB')==true) {info.innerHTML = "$${\\textrm{proj}_BA = " + xyz('ProjAB') + "}$$"};
    if (ggb.getValue('BonA')==true) {info.innerHTML = "$${\\textrm{proj}_AB = " + xyz('ProjBA') + "}$$"};
    if (ggb.getValue('showθ')==true){info.innerHTML = "$${\\theta = " + ggb.getValue('θ/°').toFixed(1) + "°}$$"};
    if (window.MathJax) {
       MathJax.typesetPromise([node]).then(() => {});
    }
    
}   

ggb.registerUpdateListener(updateSlate);
updateSlate();

// update ggb diagram when html changes
 
var updateA = function (e){ 
    var cmd1 = 'A = (' + Ax.value + ',' + Ay.value + ',' + Az.value +')';
    ggb.evalCommand(cmd1);
};
var updateB = function (e){ 
    var cmd2 = 'B = (' + Bx.value + ',' + By.value + ',' + Bz.value +')';
    ggb.evalCommand(cmd2);
};

Ax.addEventListener('change', updateA);
Ay.addEventListener('change', updateA);
Az.addEventListener('change', updateA);
Bx.addEventListener('change', updateB);
By.addEventListener('change', updateB);
Bz.addEventListener('change', updateB);

// manage buttons

document.getElementById('projAB').addEventListener('click',function () { ggb.evalCommand('AonB  = ! AonB \n BonA = false \n showθ = false' )});
document.getElementById('projBA').addEventListener('click',function () { ggb.evalCommand('BonA  = ! BonA \n AonB = false \n showθ = false' )});
document.getElementById('theta').addEventListener('click',function  () { ggb.evalCommand('showθ = ! showθ \n AonB = false \n BonA = false' )});
document.getElementById('reset').addEventListener('click',function  () { ggb.evalCommand('RunClickScript(Reset)')});

}