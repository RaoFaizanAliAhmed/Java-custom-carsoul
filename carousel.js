var elm = document.getElementById("imgTag"); 
var links = ["download.png", "images.jpeg", "images.png"]; 
var count = 0;  

function fun(value) {
    if (value === '+') {
        count++;  
    } else {
        count--; 
    }

    if (count >= links.length) {
        count = 0;
    }

    if (count < 0) {
        count = links.length - 1;
    }

    elm.setAttribute("src", links[count]);
}

setInterval(function() {
    fun('+');  
}, 2000);
