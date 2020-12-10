function renderTable() {
    let m=16, n=30,a=0.2;
    let tableEl=document.querySelector('.game-board table');

    let cells=[];
    for (let i=0;i<m;i++){
        let row=[];
        for (let j = 0; j<n;j++){
            let cell={};
            if (Math.random()<=a){
                cell.value='*';
            } else{
                cell.value=0;
            }   
            row.push(cell);
        }
        cells.push(row)
    }
    console.log(cells);

            for (let i=0;i<m;i++){
                let rowEl=document.createElement('tr');
                for (let j = 0; j<n;j++){
                    let cellEl=document.createElement('td');
                    let divEl = document.createElement('div');
                    if (cells[i][j].value === '*') {
                        divEl.innerText ='*';
                    } 
                    cellEl.append(divEl);
                    rowEl.append(cellEl);
                }
        
                tableEl.append(rowEl);
        }
    }
renderTable();