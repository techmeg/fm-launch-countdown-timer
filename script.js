const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const secondsToo = document.querySelector('.seconds');
const minutesToo = document.querySelector('.minutes');
const hoursToo = document.querySelector('.hours');
const daysToo = document.querySelector('.days');

// originally thought I would set the launch timing here...but ultimately just hard coded to match the design
var secondsRemaining =  seconds.innerText;
var minutesRemaining = minutes.innerText;
var hoursRemaining = hours.innerText;
var daysRemaining = days.innerText;

var countdown = setInterval(callback, 1000);

function callback () {
    secondsRemaining--;
// Note: if a launch is chosen such that any of the columns start at zero and will not change, 
// for example,  00 01 23 04 where days will not change;
// the if statement must be adjusted to compare the remainder to '00'
    if((daysRemaining === 0 ) && (hoursRemaining ===  0) && (minutesRemaining === 0) && (secondsRemaining === 0)){
        clearInterval(countdown);
    } else {
        if(secondsRemaining < 0){
            secondsRemaining = 59;
            minutesRemaining--;
            if(minutesRemaining < 0){
                minutesRemaining = 59;
                hoursRemaining--;       
                if(hoursRemaining < 0){
                    hoursRemaining = 23;
                    daysRemaining --;
                }
            }
        } 
  
    }

    seconds.innerText = secondsRemaining.toString().padStart(2, '0');
    secondsToo.textContent = secondsRemaining.toString().padStart(2, '0');

    minutes.innerText = minutesRemaining.toString().padStart(2, '0');
    minutesToo.textContent = minutesRemaining.toString().padStart(2, '0');

    hours.innerText = hoursRemaining.toString().padStart(2, '0');
    hoursToo.textContent = hoursRemaining.toString().padStart(2, '0');

    days.innerText = daysRemaining.toString().padStart(2, '0');
    daysToo.textContent = daysRemaining.toString().padStart(2, '0');

}