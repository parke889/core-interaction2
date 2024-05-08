let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let container = document.querySelector('.container');
let sun = document.querySelector('.hour-circle');
let body = document.querySelector('body')

function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();

    // Convert 24-hour format to 12-hour format
    if (hh > 12) {
        hh = hh - 12;
    }

    // Check if hour is between 6 am and 6 pm
    let isDayTime = hh >= 6 && hh < 18;

    // Change background color based on time
    container.style.backgroundColor = isDayTime ? 'white' : '#5900b3';
    sun.style.backgroundColor = isDayTime ? '#ff0000' : 'yellow';
    body.style.backgroundColor = isDayTime ? 'skyblue' : '#5900b3' ;

    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 15 * hh + mm / 4; // Adjusted rotation for 24-hour format
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    // Calculate color based on seconds
    let secColor = `rgb(0, 0, ${(ss / 59) * 255})`;
    sec.style.setProperty('--clr', secColor);

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
