let greet = document.querySelector("#greet-time");
let currentTime = new Date().getHours();
let clockElement = document.querySelector("#clock");

console.log(currentTime);


if (currentTime >= 21 || currentTime <= 5) {
    greet.innerHTML = "🌙 Night, Human" ;
}
else if (currentTime>= 6 && currentTime<= 11) {
    greet.innerHTML ="☀️ Good Morning, Human";
}
else if (currentTime >= 12 && currentTime <= 15) {
    greet.innerHTML = "🌤️ Good Afternoon, Human";
}
else if (currentTime >= 16 && currentTime <= 20) {
    greet.innerHTML ="🌇 Good Evening, Human";
}

function clock() {
    let clockTime = new Date();

    let hours = clockTime.getHours();
    let minutes =clockTime.getMinutes();
    let seconds = clockTime.getSeconds();

      
    
    clockElement.textContent = `${hours} : ${minutes} : ${seconds}`;
    
}
  clock();
  setInterval(clock, 1000);
 