let greet = document.querySelector("#greet-time");
let currentTime = new Date().getHours();
let clockElement = document.querySelector("#clock");
let timeElement = document.querySelector("#timeDate");

const monthArray = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November" , "December"] ;

// hello to user base on time

if (currentTime >= 21 || currentTime <= 5) {
    greet.textContent = "🌙 Night, Human" ;
}
else if (currentTime>= 6 && currentTime<= 11) {
    greet.textContent ="☀️ Good Morning, Human";
}
else if (currentTime >= 12 && currentTime <= 15) {
    greet.textContent = "🌤️ Good Afternoon, Human";
}
else if (currentTime >= 16 && currentTime <= 20) {
    greet.textContent ="🌇 Good Evening, Human";
}

// Time

function clock() {
    let clockTime = new Date();

    let hours = clockTime.getHours();
    let minutes =clockTime.getMinutes();
    let seconds = clockTime.getSeconds();

    let displayHours;
    let displayMinutes;
    let displaySeconds;

    if (hours<10) {
        displayHours = "0" + hours;
    }
    else {
        displayHours = hours;
    }

    if (minutes<10) {
        displayMinutes = "0" + minutes;
    }
    else {
        displayMinutes = minutes;
    }

    if (seconds<10) {
        displaySeconds = "0" + seconds;
    }
    else {
        displaySeconds  = seconds;
    }

      
    
    clockElement.textContent = `${displayHours} : ${displayMinutes} : ${displaySeconds}`;
    
}
  clock();
  setInterval(clock, 1000);

  // Date 
  function date() {
    let today = new Date();

    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let displayMonth = monthArray[month];
    


    if (day<10) {
        displayDay = "0" + day;
    }
    else {
        displayDay = day;
    }
   
    timeElement.textContent = `${displayDay} - ${displayMonth} - ${year}`;
  }
  
  date();
 
 