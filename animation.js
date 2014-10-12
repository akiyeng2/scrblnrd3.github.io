var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var width = canvas.width;
var height = canvas.height;
var increment = 2 * Math.PI / 180;
var radius = 100;
var center = {x: 100, y: 500};
var xResolution = (2 * Math.PI) / (width - radius * 2);
var yResolution = xResolution;

function draw(angle) {
    ctx.strokeStyle = "black";
    if(Math.abs(angle - Math.PI * 2) < 1e-6) {
        angle = 0;
    }

    ctx.clearRect(0, 0, width, height);

    ctx.fillRect(center.x - radius, center.y, radius * 2, 1);
    ctx.fillRect(center.x, center.y - radius, 1, radius * 2);
    ctx.beginPath();


    ctx.lineWidth = 1;
    ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillRect(center.x + radius, center.y - radius, 1, radius * 2);
    ctx.fillRect(center.x - radius, center.y - radius, radius * 2, 1);

    var x1 = center.x + radius * Math.cos(angle);
    var y1 = center.y - radius * Math.sin(angle);

    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(x1, y1);
    ctx.stroke();


    ctx.strokeStyle = "blue";

    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(center.x + radius, center.y - radius * Math.sin(angle + increment));
    ctx.stroke();


    ctx.lineWidth = 2;
    for(var theta = angle, x = 200; theta < angle + 2 * Math.PI;) {
        ctx.beginPath();
        ctx.moveTo(x, center.y - radius * Math.sin(theta));
        theta += increment;
        x += xResolution * 140;
        ctx.lineTo(x, center.y - radius * Math.sin(theta));
        ctx.stroke();
    }

    ctx.strokeStyle = "red";

    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(center.x + radius * Math.cos(angle), center.y - radius);
    ctx.stroke();

    ctx.lineWidth = 2;

    for(var theta = angle, y = 400; theta < angle + 2 * Math.PI;) {
        ctx.beginPath();
        ctx.moveTo(center.x + radius * Math.cos(theta), y);
        theta += increment;
        y -= yResolution * 140;
        ctx.lineTo(center.x + radius * Math.cos(theta), y);
        ctx.stroke();
    }

    angle += increment;


    requestAnimationFrame(function() {
        draw(angle);
    })

}

draw(0);


