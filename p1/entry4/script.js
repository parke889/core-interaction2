function getRandomPosition() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    return { x: x, y: y };
}

// Create spans with random positions
var bubbleDiv = document.getElementById("bubble");
for (var i = 0; i < 10; i++) { // Adjust the number of spans as needed
    var position = getRandomPosition();
    var span = document.createElement("span");
    span.style.left = position.x + "px";
    span.style.top = position.y + "px";
    bubbleDiv.appendChild(span);
}

// $(document).ready(function($) {
//     $(".bubble").click(function(event){
//         console.log(".bubble");         
//         event.preventDefault();
//         $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
//     });

// });
