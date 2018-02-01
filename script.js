var frame,
    bounds,
    x,
    leftBound,
    minWidth;

minWidth = 550;

var clicked = {};


frame = document.getElementById('div2');

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);

function calculate(e) {

    bounds = frame.getBoundingClientRect();
    x = e.clientX - bounds.left;
    leftBound = x < 10 && x > 0;

}

function onMouseDown(e) {

    calculate(e);

    clicked = {
        cx: e.clientX,
        x: x,
        w: bounds.width,
        leftBound: leftBound
    };

    if (leftBound) {

        frame.style.cursor = 'ew-resize';
    } else {
        frame.style.cursor = 'default';
    }
}

function onMouseUp(e) {

    calculate(e);

    var currentWidth = Math.max(clicked.cx + clicked.w - e.clientX, minWidth);
    if (currentWidth > minWidth && currentWidth > bounds.width) {
        frame.style.width = currentWidth + 'px';
        frame.style.left = e.clientX + 'px';
    }

}

