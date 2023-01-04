var listeners = function(ggb) {
    
const tbody = document.getElementById('ggb_2__14_table').getElementsByTagName('tbody')[0]

// update html (slate) when diagram changes
function coordinates(){
    return [[], xyz('A'), xyz('B'), xyz("R")] 
}

function cell(r,c) {
    console.log('r,c: ', r,c, coordinates()[r][c]);
    tbody.getElementsByTagName('tr')[r].getElementsByTagName('td')[c].innerHTML= coordinates()[r][c]; 
};

function xyz(obj){ 
   return [[], ggb.getXcoord(obj).toFixed(0), ggb.getYcoord(obj).toFixed(0),  ggb.getZcoord(obj).toFixed(0)]
};


var updateSlate = function (){ 
    for (let i = 1; i < 4; i++) {
        for(let j=1; j < 4; j++)
        cell(i,j)
      }   
}
    
ggb.registerUpdateListener(updateSlate);
updateSlate();
tbody.getElementsByTagName('tr')[1].style.color='red';
tbody.getElementsByTagName('tr')[2].style.color='blue';

}