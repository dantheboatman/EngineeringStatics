var listeners = function(ggb) {
    
const t1 = document.getElementById('ggb_2__13_table1').getElementsByTagName('tbody')[0]
const r = t1.getElementsByTagName('tr')[1].getElementsByTagName('td')[3]
const theta = t1.getElementsByTagName('tr')[2].getElementsByTagName('td')[3]
const vecR = t1.getElementsByTagName('tr')[4].getElementsByTagName('td')[3]

// update html (slate) when diagram changes
function coordinates(){
    return ['heading', xyz('a'), xyz('b'), xyz("c"), xyz("r")] 
}

function cell(r,c) {
    t1.getElementsByTagName('tr')[r].getElementsByTagName('td')[c].innerHTML= coordinates()[r][c]; 
};

function xyz(obj){ 
   return [obj, ggb.getXcoord(obj).toFixed(0), ggb.getYcoord(obj).toFixed(0)]
};


var updateSlate = function (){ 
    for (let i = 1; i < 5; i++) {
        for(let j=1; j < 3; j++)
        { cell(i,j) }
      }
   let mag =  `\\N{ ${ggb.getValue('round(abs(r),2)')} }` 
   let dir =  ggb.getValue('arg(r)/°').toFixed(1)
//   r.innerHTML = `\\(R = ${mag}  \\)`;
//   theta.innerHTML = `\\(\\theta = ${dir}° \\)`;
    vecR.innerHTML =  `\\(\\qquad= (${mag}\\, \\angle \\, ${dir}°) \\)`;
   if (window.MathJax) {
      MathJax.typesetPromise([r,theta,vecR]).then(() => {});
   }
}

ggb.registerObjectUpdateListener('a', updateSlate);
ggb.registerObjectUpdateListener('b', updateSlate);
ggb.registerObjectUpdateListener('c', updateSlate);
ggb.registerObjectUpdateListener('r', updateSlate);
updateSlate();
t1.getElementsByTagName('tr')[1].style.color='red';
t1.getElementsByTagName('tr')[2].style.color='blue';
t1.getElementsByTagName('tr')[3].style.color='darkgreen';
}