const $ = e => document.querySelector(e);
const block = $('#block');

function moveHoriz(x) {
   const currentLeft = parseInt(block.style.left.slice(0, -2));
   block.style.left = `${currentLeft + x}px`
   
   block.style.left = `${currentLeft + x}px`;
}

function moveVert(y) {
    const currentTop = parseInt(block.style.top.slice(0, -2));
    block.style.top = `${currentTop + y}px`
}

function changeSize(s) {
    const currentWidth  = parseInt(block.style.width.slice(0, -2)),
          currentHeight = parseInt(block.style.height.slice(0, -2));

    block.style.width  = `${currentWidth + s}px`;
    block.style.height = `${currentHeight + s}px`;
}

function rotate(r) {
    const currentAngle = parseInt(block.style.transform.slice(7,-4));
    block.style.transform = `rotate(${currentAngle + r}deg)`
}

(function() {

$('#smaller').onclick = () =>
    changeSize(-10)

$('#bigger').onclick = () =>
    changeSize(10)

$('#rotateLeft').onclick = () =>
    rotate(-15);

$('#rotateRight').onclick = () =>
    rotate(15);

$('#color').onchange = e =>
    block.style.backgroundColor = e.target.value;

$('#reset').onclick = e =>
    block.style = "left: 10px; top: 10px; width: 100px; height: 100px; transform: rotate(0deg)";

document.onkeydown = e => {
    switch (e.key) {
        case 'a':
            moveHoriz(-5);
            break;

        case 'd':
            moveHoriz(5)
            break;

        case 'w':
            moveVert(-5);
            break;

        case 's':
            moveVert(5);
            break;

        case 'ArrowRight':
            rotate(15);
            break;

        case 'ArrowLeft':
            rotate(-15);
            break;

        case 'ArrowUp':
            changeSize(10);
            break;

        case 'ArrowDown':
            changeSize(-10);
            break;

        default:
            break;
    }
}

})();