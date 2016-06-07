var delay = 5000;

$(document).ready(function() { 
    spectrum();

    function spectrum() {
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        $('body').animate( { backgroundColor: hue }, delay);
        setTimeout(spectrum, delay);
    }

});