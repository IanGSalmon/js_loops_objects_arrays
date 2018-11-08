var html = '';
var red;
var green;
var blue;
var rgbColor;

function getColorNumber() {
    var num = Math.floor(Math.random() * 256);
    return num;
}

function print(message) {
    document.write(message);
}

for (i=0; i < 100; i += 1) {
    red = getColorNumber();
    green = getColorNumber();
    blue = getColorNumber();
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);