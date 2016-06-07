var currentThread = 0;

function setup() {
    pulse(currentThread); 
    setTimeout(showMain, 5000);
    
    $('#speedSwitch').change(function() {
        changeSpeed();
    });
}

function showMain() {
    $('#title').fadeOut(fadeTime);
    $('#controlPanel').fadeIn(fadeTime);
}

var delay = 5000;
var altDelay = 50;
var fadeTime = 3000;

function pulse(myThreadNumber) {
    if (myThreadNumber != currentThread)
        return;
    
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    $('body').animate( { backgroundColor: hue }, delay);
    
    setTimeout(function() { pulse(myThreadNumber); }, delay);
}

function changeSpeed() {
    var tempDelay = delay;
    delay = altDelay;
    altDelay = tempDelay;
    $('body').stop();
    currentThread++;
    pulse(currentThread);
}