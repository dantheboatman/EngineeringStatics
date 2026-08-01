var listeners = function(ggb) {
    const t1 = document.getElementById('ggb_7__2_table').getElementsByTagName('tbody')[0];
    const info = document.getElementById('ggb_7__2_info');

    
    const data = [
        ['Part',  'A_i', 'x_i', 'y_i', 'A_i x_i', 'A_i y_i'],
        ['A2', 'B2', 'C2', 'D2', 'E2','F2'],
        ['A3', 'B3', 'C3', 'D3', 'E3','F3'],
        ['A4', 'B4', 'C4', 'D4', 'E4','F4']
    ]; // cells in ggb spreadsheet

    function cell(r,c){
         return t1.getElementsByTagName('tr')[r].getElementsByTagName('td')[c];
    }

    function updateTable() {
        // copy ggb spredsheet cells to html table

        for (let r = 1; r < 4; r++) {
            for (let c = 1; c < 6; c++) {
                cell(r,c).innerHTML = ggb.getValue(data[r][c]);
            }
        }
        cell(1,0).innerText = '\\(' + ggb.getValueString(data[1][0]) + '\\)'; // rectangle
        cell(2,0).innerText = '\\(' + ggb.getValueString(data[2][0]) + '\\)'; // hole
        cell(3,2).innerText ='';
        cell(3,3).innerText ='';
        info.innerText= '\\(' + ggb.getValueString('info') + ' \\)'; // hole
    };


    var updateSlate = function() {
        updateTable();
        if (window.MathJax) {
            MathJax.typesetPromise([cell(1,0),cell(2,0),info]).then(() => {});
        }
    }

    ggb.registerUpdateListener(updateSlate);
    updateSlate();
}
