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
    loadGraph();
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

var nodes = [];
var force;
var height = window.innerHeight;
var width = window.innerWidth;
var radius = 100;
var color = d3.scale.category20b();

function loadGraph() {
    // need to set up nodes.
    // maybe
    node = us;
    
    force = d3.layout.force().charge(-100).size([width, height]);
    var svg = d3.select('#graph').append('svg');
    force.nodes(nodes).start();
    
    var node = svg.select('.node')
        .data(nodes)
        .enter()
        .append('g')
        .attr('class', 'gnode');
    
    var circle = node.append('circle')
        .attr('class', 'node')
        .attr('r', radius)
        .attr('xlink:href', function(d) { return d.img; })
        .style('stroke', function(d) { return d.colour; })
        .style('stoke-width', '10px')
        .call(force.drag);
    
    var labels = node.append('text')
        .attr('class', 'unselectable')
        .attr('dy', '.35em')
        .style('font-size', '1em')
        .style('color', 'white')
        .style('text=anchpr', 'middle')
        .text(function(d) { return d.name; });
    
    force.on('tick', tick);
}

function snapToXBounds(d) {
    var posX = d.x;
    var k = 0.1;
    var svgHeight = parseFloat(d3.select("svg").style("height"));
    var actual = (mmWidths.getScaledValue(d.c2 / (d.c1 + d.c2)) * 0.8 + 0.1) * width;
    dif = actual - posX;
    return posX += dif * k;
}

function collide(node) {
    var r = radius + 10,
        nx1 = node.x - r,
        nx2 = node.x + r,
        ny1 = node.y - r,
        ny2 = node.y + r;
    return function(quad, x1, y1, x2, y2) {
        if (quad.point && (quad.point !== node)) {
            var x = node.x - quad.point.x,
                y = node.y - quad.point.y,
                l = Math.sqrt(x * x + y * y),
                r = getRadius(node) + getRadius(quad.point);
            if (l < r) {
                l = (l - r) / l * .5;
                node.x -= x *= l;
                node.y -= y *= l;
                quad.point.x += x;
                quad.point.y += y;
            }
        }
        return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
    };
}

function tick(e) {
    var q = d3.geom.quadtree(nodes),
        i = 0,
        n = nodes.length;

    while (++i < n) q.visit(collide(nodes[i]));

    for(var i = 0; i < nodes.length; i++) {
        nodes[i].x = boundPosition(nodes[i].x, 0, width);
        nodes[i].y = boundPosition(nodes[i].y, 0, height);
    }

    d3.selectAll("circle")
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    d3.selectAll("text")
        .attr("x", function(d) { return d.x; })
        .attr("y", function(d) { return d.y; });

    nodes.forEach(function(d) {
        d.x = snapToXBounds(d);
    });
}

function boundPosition(value, min, max) {
    return Math.max(Math.min(value, max), min);
}


























