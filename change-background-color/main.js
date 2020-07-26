var colors = ["pink", "lightblue", "limegreen", "coral", "grey", "olive"];
var colorCode = ["#FFCOCB", "#ADD8E6", "#32CD32", "#FF7F50", "#808080", "#808000"];
    var colorIndex = 0;
    function changeColor() {
        var col = document.getElementById("body");
        var a = document.getElementById("label");
        if( colorIndex >= colors.length ) {
            colorIndex = 0;
        }
        col.style.backgroundColor = colors[colorIndex];
        a.innerHTML = colorCode[colorIndex];
        colorIndex++;
    }