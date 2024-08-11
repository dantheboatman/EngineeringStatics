var listeners = function(ggb) {
    const t1 = document.getElementById('ggb_7__1_table').getElementsByTagName('tbody')[0];
    const info = document.getElementById('ggb_7__1_info');

    
    const data = [
        ['Part',  'A_i', 'x_i', 'y_i', 'A_i x_i', 'A_i y_i'],
        ['A2', 'B2', 'C2', 'D2', 'E2','F2'],
        ['A3', 'B3', 'C3', 'D3', 'E3','F3'],
        ['A4', 'B4', 'C4', 'D4', 'E4','F4'],
        ['A5', 'B5', 'C5', 'D5', 'E5','F5']
    ]; // cells in ggb spreadsheet

    function cell(r,c){
         return t1.getElementsByTagName('tr')[r].getElementsByTagName('td')[c];
    }

    function updateTable() {
        // copy ggb spredsheet cells to html table

        for (let r = 1; r < 5; r++) {
            for (let c = 1; c < 6; c++) {
                cell(r,c).innerHTML = ggb.getValue(data[r][c]).toPrecision(3);
            }
        }
        cell(1,0).innerText = 'Rectagle'; // rectangle
        cell(2,0).innerText = 'Triangle'; // triangle
        cell(3,0).innerText = 'Circle'; // hole
        cell(4,2).innerText ='';
        cell(4,3).innerText ='';
        info.innerText= '\\(' + ggb.getValueString('info') + ' \\)';
    };


    var updateSlate = function() {
        updateTable();
        if (window.MathJax) {
            MathJax.typesetPromise([info]).then(() => {});
        }
    }

    ggb.registerUpdateListener(updateSlate);
    updateSlate();
}
