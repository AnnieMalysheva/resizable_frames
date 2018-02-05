var frame1,
    frame2,
    resize,
    wrapper,
    container;

var isResizing = false;

frame1 = document.getElementById('div1');
frame2 = document.getElementById('div2');
resize = document.getElementById('resize');
wrapper = document.getElementById('wrapper');

resize.addEventListener('mousedown', onMouseDown);
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

function onMouseDown() {

    isResizing = true;

}

function onMouseMove(e) {

    if (!isResizing) return;

    requestAnimationFrame(onMouseMove);

    container = wrapper.getBoundingClientRect();

    frame1.style.width = e.clientX + 'px';
    frame2.style.width = container.width - e.clientX + 'px';

}

function onMouseUp() {

    isResizing = false;

}
