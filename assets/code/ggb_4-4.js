var listeners = function(ggb) {
    
const t1 = document.getElementById('ggb_4__4_table').getElementsByTagName('tbody')[0]
    //    console.log(theta);

// update html (slate) when diagram changes
function coordinates(){
    return ['heading', xyz('A'), xyz('B'),  xyz("M")] 
}

function cell(r,c) {
    t1.getElementsByTagName('tr')[r].getElementsByTagName('td')[c].innerHTML= coordinates()[r][c]; 
};

function xyz(obj){ 
   return [obj, ggb.getXcoord(obj).toFixed(0), ggb.getYcoord(obj).toFixed(0) , ggb.getZcoord(obj).toFixed(0)]
};


var updateSlate = function (){ 
    for (let i = 1; i < 4; i++) {
        for(let j=1; j < 4; j++)
        { cell(i,j) }
      }
      if (window.MathJax) {
      MathJax.typesetPromise([]).then(() => {});
   }
}

ggb.registerObjectUpdateListener('A', updateSlate);
ggb.registerObjectUpdateListener('B', updateSlate);
updateSlate();
t1.getElementsByTagName('tr')[1].style.color='blue';
t1.getElementsByTagName('tr')[2].style.color='red';
}