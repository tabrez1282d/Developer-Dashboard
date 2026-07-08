let greet = document.querySelector("#greet-time");
let currentTime = new Date().getHours();

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