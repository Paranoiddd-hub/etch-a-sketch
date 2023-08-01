const box = document.getElementById('container');
let mouseDown = false;
document.body.onmousedown = (e) => {mouseDown = true};
document.body.onmouseup = (e) => {mouseDown = false};

function drawDivs(divNumber) {
    let div = 1;
    while (div <= divNumber*divNumber) {
        div++;
        const newDiv = document.createElement('div');
        newDiv.addEventListener('mousedown', paintDiv);
        newDiv.addEventListener('mouseover', paintDiv);
        newDiv.style.height= box.clientHeight/divNumber+'px';
        newDiv.style.width= box.clientWidth/divNumber+'px';
        newDiv.classList.add('paintedDivs');
        box.append(newDiv);
      // console.log(newDiv.clientWidth);
    }
}

function clearContainer() {
    const allDivs = document.querySelectorAll('.paintedDivs')
    llDivs.forEach(div => div.remove())
}

function paintDiv (e) {
   if (e.type = 'mouseover' && mouseDown) {
        e.target.style.backgroundColor = 'blue';
   } else return;
   // e.stopPropagation();
   
    console.log(e.type);
}
   



drawDivs(10);