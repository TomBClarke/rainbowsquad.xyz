<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="Content-Type"   content="text/html; charset=utf-8" />
        <meta name="viewport"             content="width=device-width, initial-scale=1" />
        <meta property="og:url"           content="http://rainbowsquad.xyz/" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="Taste the rainbow!" />
        <meta property="og:description"   content="Taste the rainbow!" />
        <meta property="og:image"         content="http://rainbowsquad.xyz/img/favicon.png" />
        <meta name="url"                  content="http://rainbowsquad.xyz/" />
        <meta name="type"                 content="website" />
        <meta name="title"                content="Rainbow Squadron" />
        <meta name="description"          content="Taste the rainbow!" />
        <meta name="image"                content="http://rainbowsquad.xyz/img/favicon.png" />
        <meta name="keywords"             content="rainbow, rbw, squad, squadron">
        <title>Rainbow Squadron</title>
        <script src="js/jquery.js"></script>
        <script src="js/jquery-ui.js"></script>
        <script src="js/d3.js"></script>
        <script src="js/rbw.js"></script>
        <link type="text/css" rel="stylesheet" href="css/main.css"/>
        <link rel="icon" href="img/favicon.png">
    </head>
    <body onload="pulse(); setTimeout(showMain, 5000);">
        <div id="title">
            <h1>Welcome to the Rainbow Squadron!</h1>
        </div>
        <div id="controlPanel">
            Fast mode: </br>
            <label class="switch">
                <input id="speedSwitch" type="checkbox">
                <div class="slider"></div>
            </label>
        </div>
    </body>
</html>