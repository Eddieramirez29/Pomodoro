const pomodoroButton = document.getElementById("pomodoroButton");
const shortBreakButton = document.getElementById("shortBreakButton");
const longBreakButton = document.getElementById("longBreakButton");
const timer = document.getElementById("timer");
const circleBar = document.getElementById("circleBar");




/*Set timers values*/

pomodoroButton.addEventListener("click", function()
{
    timer.textContent= "25:00";
    //Change background colors and font colors
    pomodoroButton.style.backgroundColor = "#f06262";
    pomodoroButton.style.color = "#2b2d42";//Light font
    shortBreakButton.style.backgroundColor = "#232544";
    shortBreakButton.style.color = "#7b80b9";//Darken font
    longBreakButton.style.backgroundColor = "#232544";
    longBreakButton.style.color = "#7b80b9";//Darken font
    clearCircleBar();
})

shortBreakButton.addEventListener("click", function()
{
    timer.textContent= "05:00";
    //Change background colors and font colors
    pomodoroButton.style.backgroundColor = "#232544";
    pomodoroButton.style.color = "#7b80b9";//Light font
    shortBreakButton.style.backgroundColor = "#f06262";
    shortBreakButton.style.color = "#2b2d42";//Darken font
    longBreakButton.style.backgroundColor = "#232544";
    longBreakButton.style.color = "#7b80b9";//Darken font
    clearCircleBar();
})

longBreakButton.addEventListener("click", function()
{
    timer.textContent= "15:00";
    //Change background colors and font colors
    pomodoroButton.style.backgroundColor = "#232544";
    pomodoroButton.style.color = "#7b80b9";//Light font
    shortBreakButton.style.backgroundColor = "#232544";
    shortBreakButton.style.color = "#7b80b9";//Darken font
    longBreakButton.style.backgroundColor = "#f06262";
    longBreakButton.style.color = "#2b2d42";//Darken font
    clearCircleBar();
})

const clearCircleBar = () =>
{
    circleBar.style.background = `conic-gradient(#e76868 0deg 0deg, #232544 0deg 360deg)`;
}



