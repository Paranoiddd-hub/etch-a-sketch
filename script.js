const box = document.getElementById('container');
const clearButton = document.getElementById('clear');
let mouseDown = false;
const size = document.getElementById('size');
let color = document.getElementById('color');

document.body.onmouseup = () => {mouseDown = false}
clearButton.addEventListener('click', clearContainer)
size.onfocus = () => {size.value = ""}
size.oninput = () => {
    clearContainer();
    drawDivs(size.value);
}
//size.onblur = () => {size.value = 10}

drawDivs(size.value);

function drawDivs(divNumber) {
    let div = 1;
    while (div <= divNumber*divNumber) {
        const newDiv = document.createElement('div');

        newDiv.addEventListener('mousedown', paintDiv);
        newDiv.addEventListener('mouseover', paintDiv);

        newDiv.style.height= box.clientHeight/divNumber+'px';
        newDiv.style.width= box.clientWidth/divNumber+'px';
        newDiv.classList.add('paintedDivs');

        box.append(newDiv);

        div++;
    }
}

function clearContainer() {
    const allDivs = document.querySelectorAll('.paintedDivs');
    allDivs.forEach(div => div.remove());
    drawDivs(size.value);
}

function paintDiv (e) {
    if (e.type === 'mousedown') {
        mouseDown = true;
    }

    if (mouseDown && (e.type === 'mouseover') || mouseDown) {
        e.target.style.backgroundColor = color.value;
    } else return
}