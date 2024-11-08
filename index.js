const pomodoroButton = document.getElementById("pomodoroButton");
const shortBreakButton = document.getElementById("shortBreakButton");
const longBreakButton = document.getElementById("longBreakButton");
const timer = document.getElementById("timer");
const circleBar = document.getElementById("circleBar");
const buttonStart = document.getElementById("buttonStart");

let intervalId = null; // Inicializamos intervalId en null
let startAngle1 = 0, endAngle1 = 360;
let startAngle2 = 0, endAngle2 = 360;
let stepTime = 0.24;
let stepTimeDefine = 0;
let time;
let contador = 0;

let buttonStartState = false;
let textButtonStart;

buttonStart.addEventListener("click", function()
{
    setStepTime();

    if(buttonStartState === false)
    {
        buttonStartState = true;
        intervalId = setInterval(() => {
            circleBar();
            timerPace();
        }, 1000);
        console.log("Activo");
    }
    else
    {
        buttonStartState = false;
        clearInterval(intervalId);
        intervalId = null;
        console.log("Inactivo");
    }

    buttonStartState ? textButtonStart = "Pause" : textButtonStart = "Start";
    buttonStart.innerHTML = textButtonStart;

})

/*Set timers values*/

pomodoroButton.addEventListener("click", function()
{
    timer.textContent = "25:00";
    time = 1500;//Segundos
    //Change background colors and font colors
    pomodoroButton.style.backgroundColor = "#f06262";
    pomodoroButton.style.color = "#2b2d42";//Light font
    shortBreakButton.style.backgroundColor = "#232544";
    shortBreakButton.style.color = "#7b80b9";//Darken font
    longBreakButton.style.backgroundColor = "#232544";
    longBreakButton.style.color = "#7b80b9";//Darken font
    clearValues();
    circleBarStatus();
    clearInterval(intervalId);
    intervalId = null;
    //25 min = 360°, 0.24°/sec
    stepTimeDefine = 0.24;
})

shortBreakButton.addEventListener("click", function()
{

    timer.textContent= "05:00";
    time = 300;//Segundos
    //Change background colors and font colors
    pomodoroButton.style.backgroundColor = "#232544";
    pomodoroButton.style.color = "#7b80b9";//Light font
    shortBreakButton.style.backgroundColor = "#f06262";
    shortBreakButton.style.color = "#2b2d42";//Darken font
    longBreakButton.style.backgroundColor = "#232544";
    longBreakButton.style.color = "#7b80b9";//Darken font
    circleBarStatus();
    clearValues();
    clearInterval(intervalId);
    intervalId = null;
    //5 min = 360°, 1.2°/sec
    stepTimeDefine = 1.2;
})

longBreakButton.addEventListener("click", function()
{

    timer.textContent= "15:00";
    time = 900;//Segundos
    //Change background colors and font colors
    pomodoroButton.style.backgroundColor = "#232544";
    pomodoroButton.style.color = "#7b80b9";//Light font
    shortBreakButton.style.backgroundColor = "#232544";
    shortBreakButton.style.color = "#7b80b9";//Darken font
    longBreakButton.style.backgroundColor = "#f06262";
    longBreakButton.style.color = "#2b2d42";//Darken font
    circleBarStatus();
    clearValues();
    clearInterval(intervalId);
    intervalId = null;
    //15 min = 360°, 0.4°/sec
    stepTimeDefine = 0.4;
})

function setStepTime()
{
    stepTime = stepTimeDefine;
}

function clearValues()
{
    startAngle1 = 0, endAngle1 = 360;
    startAngle2 = 0, endAngle2 = 360;
    stepTime = 0.24;
    stepTimeDefine = 0;
}

const circleBarStatus = () =>
{
    // 0deg 360deg, 0deg 0deg//Starting values of angles
    endAngle1 = endAngle1 - stepTime;
    startAngle2 = endAngle1;
    console.log("Ángulos:", startAngle1, endAngle1, startAngle2, endAngle2);
    circleBar.style.background = `conic-gradient(#e76868 ${startAngle1}deg ${endAngle1}deg, #232544 ${startAngle2}deg ${endAngle2}deg)`;
}

function timerPace()
{
    timer = timer - 1;
    console.log(timer);
}











