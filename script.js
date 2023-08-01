const box = document.getElementById('container');

function drawDivs(divNumber) {
    let div = 1;
    while (div <= divNumber*divNumber) {
        div++;
        const newDiv = document.createElement('div');
        newDiv.style.height= box.clientHeight/divNumber+'px';
        newDiv.style.width= box.clientWidth/divNumber+'px';
        newDiv.classList.add('paintedDivs');
        box.append(newDiv);
      // console.log(newDiv.clientWidth);
    }
}

function clearContainer() {
    const allDivs = document.querySelectorAll('.paintedDivs')
    allDivs.forEach(div => div.remove())
}

drawDivs(20);