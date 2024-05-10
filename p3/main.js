let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let container = document.querySelector('.container');
let sun = document.querySelector('.hour-circle');
let body = document.querySelector('body');
let audioA = new Audio('day.mp3'); 
let audioB = new Audio('night.mp3'); 
let isDayTime = false;

function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();

    // Check if hour is between 6 am and 6 pm
    isDayTime = hh >= 6 && hh < 18; // Remove 'let' keyword

    // Change background color based on time
    container.style.backgroundColor = isDayTime ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 0.001)'; // Set the opacity here
    sun.style.backgroundColor = isDayTime ? '#ff0000' : 'yellow';
    body.style.backgroundColor = isDayTime ? 'skyblue' : '#5900b3' ;

    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 15 * hh + mm / 4; // Adjusted rotation for 24-hour format
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    // Calculate color based on seconds
    let secColor = isDayTime ? `rgb(255, ${(ss / 59) * 255}, 0)` : 'rgba(255, 255, 255, 1)'; // Color changes based on day/night
    sec.style.setProperty('--clr', secColor);

    
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);

function playAudio() {
    if (isDayTime) {
        audioA.play();
    } else {
        audioB.play();
    }

    let title = document.querySelector('.title');
    title.style.transition = 'opacity 1s'; // Apply transition
    title.style.opacity = (title.style.opacity === '0' || !title.style.opacity) ? '1' : '0'; // Toggle opacity}
}


document.addEventListener('click', playAudio);

function createCloud() {
    // Create a new image element
    let newCloud = document.createElement('img');
    newCloud.setAttribute('src', 'cloud.png');
    newCloud.setAttribute('class', 'whitecloud');

    // Set random position
    let randomX = Math.floor(Math.random() * window.innerWidth);
    let randomY = Math.floor(Math.random() * window.innerHeight);
    newCloud.style.left = randomX + 'px';
    newCloud.style.top = randomY + 'px';

    // Append the new cloud to the clouds container
    let cloudsContainer = document.querySelector('.clouds');
    cloudsContainer.appendChild(newCloud);

       // Set random size between 100px to 150px
       let randomSize = Math.floor(Math.random() * 70) + 200; // Generates a random number between 100 and 150
       newCloud.style.width = randomSize + 'px';
       newCloud.style.height = randomSize + 'px';
   

    // Remove the cloud after 5 seconds
    setTimeout(() => {
        cloudsContainer.removeChild(newCloud);
    }, 10000);
}

// Call createCloud every 2 seconds
setInterval(createCloud, 2000);
