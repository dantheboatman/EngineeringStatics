var listeners = function(ggb) {
    const t1 = document.getElementById('ggb_10__8_table').getElementsByTagName('tbody')[0];

    
    const data = [
        ['Part',  'b_i', 'h_i', 'A_i', 'd_i', '\\bar{I}_x','A d^2', 'I_x'],
        ['A2', 'B2', 'C2', 'D2', 'E2','F2', 'G2', 'H2'],
        ['A3', 'B3', 'C3', 'D3', 'E3','F3', 'G3', 'H3'],
        ['A4', 'B4', 'C4', 'D4', 'E4','F4', 'G4', 'H4']
    ]; // cells in ggb spreadsheet

    function cell(r,c){
         return t1.getElementsByTagName('tr')[r].getElementsByTagName('td')[c];
    }

    function updateTable() {
        // copy ggb spredsheet cells to html table
        for (let r = 1; r < 3; r++) {
            for (let c = 1; c < 8; c++) {
                let n = ggb.getValue(data[r][c]);
                cell(r,c).innerHTML = (c<5 ? n : n.toPrecision(4));
            }
        }
        cell(3,7).innerHTML = "<b>"+ggb.getValue(data[3][7]).toPrecision(4) + "</b> units<sup>4</sup>";  // grand total
    };


    var updateSlate = function() {
        updateTable();
        if (window.MathJax) {
            MathJax.typesetPromise([]).then(() => {});
        }
    }

    ggb.registerUpdateListener(updateSlate);
    updateSlate();
}
