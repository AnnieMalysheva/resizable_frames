var frame1,
    frame2,
    bounds,
    x,
    leftBound,
    rightBound,
    minWidth;

minWidth = 550;

var clicked;

frame1 = document.getElementById('div1');
frame2 = document.getElementById('div2');

document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);

function calculate(e) {

    bounds = frame2.getBoundingClientRect();
    x = e.clientX - bounds.left;
    leftBound = x < 10 && x > 0;
    rightBound = x < 0;

}

function onMouseDown(e) {

    calculate(e);

    console.log(clicked);

    clicked = {
        cx: e.clientX,
        x: x,
        w: bounds.width,
        leftBound: leftBound,
        rightBound: rightBound
    };

    if (0 < x < 10 || x < 0) {
        frame2.style.cursor = 'ew-resize';
    } else {
        frame2.style.cursor = 'default';
    }
}

function onMouseUp(e) {

    calculate(e);

    console.log(clicked);

    if (clicked && (clicked.leftBound || clicked.rightBound)) {
        var currentWidth;

        if (clicked.leftBound) {

            currentWidth = Math.max(clicked.cx + clicked.w - e.clientX, minWidth);
            if (currentWidth > minWidth && currentWidth > bounds.width) {
                frame2.style.width = currentWidth + 'px';
                frame2.style.left = e.clientX + 'px';

                frame1.style.width = e.clientX + 'px';
            }

        }

        if (clicked.rightBound) {
            currentWidth = Math.max(clicked.cx + clicked.w - e.clientX, minWidth);
            if (currentWidth < bounds.width) {
                frame1.style.width = e.clientX + 'px';

                frame2.style.left = e.clientX + 'px';
                frame2.style.width = currentWidth + 'px';
            }
        }

    }

}

