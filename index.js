const container = document.querySelector('#container');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.prompt-btn');
const cancelModalBtn = document.querySelector('.pop-btn.cancel');
const saveModalBtn = document.querySelector('.pop-btn.save');
const sizeInput = document.querySelector('#size');
const defaultSize = 16;

function getRandomNumber(max){
    return Math.floor(Math.random() * max + 1)
}

function getRandomColor(){
    return `rgb(${getRandomNumber(255)}, ${getRandomNumber(255)}, ${getRandomNumber(255)})`
}

function changeCellBackground(e){
    if(e.target.classList.contains('cell')){
      e.target.style.background = getRandomColor();  
    }
}

function openModal(){
    modal.classList.add('open');
}

function closeModal(){
    modal.classList.remove('open');
}

function saveSizeInput(){
    const size = sizeInput.value;
    container.innerHTML = '';
    createGrid(size, size);
    closeModal();
    sizeInput.value = '';
}

function createCell(totalCells){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    const containerSize = container.clientWidth;
    const cellSize = Math.floor(containerSize / totalCells);
    cell.style.height = `${cellSize}px`;    
    cell.style.width = `${cellSize}px`;   
    return cell;
}

function createGrid(rows, cols){
    const row = document.createElement('div');
    row.classList.add('row');
    let cells = [];

    for(let j = 1; j <= cols; j++){
        cells.push(createCell(rows));
    }

    for(let i = 1; i <= rows; i++){
        row.append(...cells);
        container.append(row.cloneNode(true))
    }
}


createGrid(defaultSize, defaultSize);
container.addEventListener('mouseover', changeCellBackground);
modalBtn.addEventListener('click', openModal);
cancelModalBtn.addEventListener('click', closeModal);
saveModalBtn.addEventListener('click', saveSizeInput);