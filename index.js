const container = document.querySelector('#container');

function changeCellBackground(e){
    console.log(e.target);
    e.target.style.background = 'black';
}

function createCell(){
    const cell = document.createElement('div');
    cell.classList.add('cell'); 
    return cell;
}

function createSquareDivs(rows, cols){
    const row = document.createElement('div');
    row.classList.add('row');
    let cells = [];

    for(let j = 1; j <= cols; j++){
        cells.push(createCell());
    }

    for(let i = 1; i <= rows; i++){
        row.append(...cells);
        container.append(row.cloneNode(true))
    }
}

createSquareDivs(16, 16);
