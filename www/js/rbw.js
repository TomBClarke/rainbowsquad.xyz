// The background bit:

var delay = 5000;
var altDelay = 50;
var fadeTime = 3000;
var isFast = false;

function pulse() {
    if ($('#speedSwitch').is(':checked') && !isFast) {
        changeSpeed();
        isFast = true;
    } else if (!$('#speedSwitch').is(':checked') && isFast) {
        changeSpeed();
        isFast = false;
    }
    
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $('body').animate( { backgroundColor: hue }, delay);
    
    setTimeout(pulse, delay);
}

function showMain() {
    $('#title').fadeOut(fadeTime);
    $('#controlPanel').fadeIn(fadeTime);
}

function changeSpeed() {
    var tempDelay = delay;
    delay = altDelay;
    altDelay = tempDelay;
}