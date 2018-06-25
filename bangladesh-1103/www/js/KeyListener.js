var controlsShown = true;
var timeout;

var keyListener = function(event) {
    clearTimeout(timeout);
    
    switch (event.keyCode) {
        case 33:
        case 37:
            $("#pdf-prev").trigger('click');
            break;
        case 34:
        case 39:
            $("#pdf-next").trigger('click');
            break;
        default:
            if (!controlsShown) {
                showControls();
                timeout = setTimeout(function() { hideControls(); }, 3000);
            } 
    }
};

document.addEventListener('keydown', keyListener);
document.addEventListener('mousedown', keyListener);

function showControls() {
    $("#file-to-upload").show();
    $("#pdf-meta").show();
    controlsShown = true;
}

function hideControls() {
    $("#file-to-upload").hide();
    $("#pdf-meta").hide();
    controlsShown = false;
}

function waitAndHideControls() {
    if (controlsShown) timeout = setTimeout(function() { hideControls(); }, 3000);
}