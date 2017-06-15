if (window.addEventListener) {
   window.addEventListener('load', function() { init(); });
}

var started = false;
var canvas, context;
var stampId = '';
var lastColor = 'black';
var lastStampId = '';
function init() {
    canvas = $('#imageView').get(0);
    context = canvas.getContext('2d');
    // Auto-adjust canvas size to fit window.
    canvas.width  = window.innerWidth - 580;
    canvas.height = window.innerHeight - 300;
    canvas.addEventListener('mousemove', onMouseMove, false);
    canvas.addEventListener('click', onClick, false);
    // Add events for toolbar buttons.
    $('#red').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#yellow').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
    $('#blue').get(0).addEventListener('click', function(e) { 
     onColorClick(e.target.id); }, false);
     }

     function onMouseMove(ev) {
    var x, y;
    // Get the mouse position.
    if (ev.layerX >= 0) {
        // Firefox
        x = ev.layerX - 0;
        y = ev.layerY - 0;
    }
    else if (ev.offsetX >= 0) {
        // Opera
        x = ev.offsetX - 0;
        y = ev.offsetY - 0;
    }
    if (!started) {
        started = true;
        context.beginPath();
        context.moveTo(x, y);        
    }
    else {
        context.lineTo(x, y);
        context.stroke();
    }
    $('#stats').text(x + ', ' + y);
}

function onClick(e) {
    if (stampId.length > 0) {
        context.drawImage($(stampId).get(0), e.pageX - 90, e.pageY - 60, 80, 80);
    }
}

function onColorClick(color) {
    // Start a new path to begin drawing in a new color.
    context.closePath();
    context.beginPath();
    // Select the new color.
    context.strokeStyle = color;
    // Highlight selected color.
    var borderColor = 'white';
    if (color == 'white' || color == 'yellow') {
        borderColor = 'black';
    }
    $('#' + lastColor).css("border", "0px dashed white");
    $('#' + color).css("border", "1px dashed " + borderColor);
    // Store color so we can un-highlight it next time around.
    lastColor = color;
}