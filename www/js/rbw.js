var currentThread = 0;
var delay = 5000;
var altDelay = 50;
var fadeTime = 3000;
var us = [];

function setup() {
    pulse(currentThread); 
    setTimeout(showMain, 5000);
    
    $('#speedSwitch').change(function() {
        changeSpeed();
    });
    
    $.ajax({
        url: 'img/us/us.json',
        dataType: "json",
        success: loadUs
    });
}

function loadUs(us_raw) {
    us = us_raw.us;
}

// Background and UI

function showMain() {
    $('#title').fadeOut(fadeTime);
    $('#controlPanel').fadeIn(fadeTime);
    $('#graph').fadeIn(fadeTime);
}

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

// D3

