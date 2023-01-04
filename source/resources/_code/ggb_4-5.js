var listeners = function(ggb) {
    const t1 = document.getElementById('ggb_4__5_table1').getElementsByTagName('tbody')[0];
    const t2 = document.getElementById('ggb_4__5_table2').getElementsByTagName('tbody')[0]
    const ggb_cells = [
        ['heading'],
        ['A', 'B2', 'C2', 'D2'],
        ['P_1', 'B3', 'C3', 'D3'],
        ['P_2', 'B4', 'C4', 'D4']
    ]; // cells in ggb spreadsheet

    function xyz(obj, p = 2) {
        return [obj, ggb.getXcoord(obj).toFixed(p), ggb.getYcoord(obj).toFixed(p), ggb.getZcoord(obj).toFixed(p)]
    };

    updateGGB = function(val, obj) {
        // copy html table cells to ggb spreadsheet
        console.log(obj, val);
        ggb.setValue(obj, val);
    }




    function updateTable1(tableNode) {
        // copy ggb spredsheet cells to html table
        var data = ggb_cells;
        for (let r = 1; r < 4; r++) {
            for (let c = 1; c < 4; c++) {
                var cellNode = tableNode.getElementsByTagName('tr')[r].getElementsByTagName('td')[c];
                var inputNode = cellNode.firstElementChild;
                inputNode.value = ggb.getValue(data[r][c]).toFixed(2);
            }
        }
    };

    function updateTable2(tableNode) {
        var data = ['heading', xyz('r'), xyz('λ'), xyz('f'), xyz('m')];
        for (let r = 1; r < 5; r++) {
            for (let c = 1; c < 4; c++) {
                cellNode = tableNode.getElementsByTagName('tr')[r].getElementsByTagName('td')[c];
                cellNode.innerHTML = data[r][c];
            }
        }
    };

    function updateFmag() {
        var node = document.getElementById('fMag');
        node.value = ggb.getValue('F');
    }

    function injectInputElements() {
        for (let r = 1; r < 4; r++) {
            for (let c = 1; c < 4; c++) {
                var cellNode = t1.getElementsByTagName('tr')[r].getElementsByTagName('td')[c];
                cellNode.innerHTML = `<input size="4" onchange="updateGGB(this.value,'${ggb_cells[r][c]}')" />`;
            }
        }
        const fNode = document.getElementById('fNode');
        //fNode.innerHTML= `<input size="4" id='fMag' onchange="updateGGB(this.value,'B5')" />`;
        const inputNode = document.createElement('input');
        inputNode.size = 4;
        inputNode.id = 'fMag';
        inputNode.onchange = function() {
            ggb.setValue('B5', this.value);
        };
        fNode.appendChild(inputNode);

    }


    var updateSlate = function() {
        updateFmag();
        updateTable1(t1);
        updateTable2(t2);

        if (window.MathJax) {
            MathJax.typesetPromise([]).then(() => {});
        }
    }

    ggb.registerUpdateListener(updateSlate);
    injectInputElements();
    t1.getElementsByTagName('tr')[1].style.color = 'blue';
    t2.getElementsByTagName('tr')[1].style.color = 'blue';
    t2.getElementsByTagName('tr')[3].getElementsByTagName('td')[1].style.color = 'red';
    t2.getElementsByTagName('tr')[3].getElementsByTagName('td')[2].style.color = 'red';
    t2.getElementsByTagName('tr')[3].getElementsByTagName('td')[3].style.color = 'red';
    updateSlate();
}
