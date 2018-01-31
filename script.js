var frame2,
    leftBound;

frame2 = document.getElementById('div2');

document.addEventListener('mouseover', onMouseDown);

function onMouseDown(e) {

    var bounds = frame2.getBoundingClientRect();
    var x = e.clientX - bounds.left;
    leftBound = x <10;

    if (leftBound) {
        frame2.style.cursor = 'ew-resize';
    } else {
        frame2.style.cursor = 'default';
    }
}
