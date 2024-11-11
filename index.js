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
let time = 1500;
let contador = 0;
let buttonStartState = false;
let textButtonStart;

//Variables for extracting characters from timer
let minutes;
let seconds = 60;
let extract = true;
let timeString;

buttonStart.addEventListener("click", function()
{

    if(buttonStartState === false)
    {
        buttonStartState = true;
        intervalId = setInterval(() => {
            circleBarStatus();
            timerPace();
        }, 100);
        // console.log("Activo");
    }
    else
    {
        pauseCounter();
        // console.log("Inactivo");
    }

    buttonStartState ? textButtonStart = "Pause" : textButtonStart = "Start";
    buttonStart.innerHTML = textButtonStart;

})

/*Set timers values*/

pomodoroButton.addEventListener("click", function()
{
    timer.textContent = "25:00";
    time = 1500;//Segundos
    //25 min = 360°, 0.24°/sec
    stepTime = 0.24;
    //Change background colors and font colors
    pomodoroButton.style.backgroundColor = "#f06262";
    pomodoroButton.style.color = "#2b2d42";//Light font
    shortBreakButton.style.backgroundColor = "#232544";
    shortBreakButton.style.color = "#7b80b9";//Darken font
    longBreakButton.style.backgroundColor = "#232544";
    longBreakButton.style.color = "#7b80b9";//Darken font
    clearValues();
    initialcircleBarStatus();
    pauseCounter();
})

shortBreakButton.addEventListener("click", function()
{

    timer.textContent= "05:00";
    time = 300;//Segundos
    //5 min = 360°, 1.2°/sec
    stepTime = 1.2;
    //Change background colors and font colors
    pomodoroButton.style.backgroundColor = "#232544";
    pomodoroButton.style.color = "#7b80b9";//Light font
    shortBreakButton.style.backgroundColor = "#f06262";
    shortBreakButton.style.color = "#2b2d42";//Darken font
    longBreakButton.style.backgroundColor = "#232544";
    longBreakButton.style.color = "#7b80b9";//Darken font
    clearValues();
    initialcircleBarStatus();
    pauseCounter()
})

longBreakButton.addEventListener("click", function()
{

    timer.textContent= "15:00";
    time = 900;//Segundos
    //15 min = 360°, 0.4°/sec
    stepTime = 0.4;
    //Change background colors and font colors
    pomodoroButton.style.backgroundColor = "#232544";
    pomodoroButton.style.color = "#7b80b9";//Light font
    shortBreakButton.style.backgroundColor = "#232544";
    shortBreakButton.style.color = "#7b80b9";//Darken font
    longBreakButton.style.backgroundColor = "#f06262";
    longBreakButton.style.color = "#2b2d42";//Darken font
    clearValues();
    initialcircleBarStatus();
    pauseCounter()
})


function clearValues()
{
    startAngle1 = 0, endAngle1 = 360;
    startAngle2 = 0, endAngle2 = 360;
    extract = true;
}

const initialcircleBarStatus = () =>
{
    // 0deg 360deg, 0deg 0deg//Starting values of angles
    console.log("Ángulos:", startAngle1, endAngle1, startAngle2, endAngle2);
    circleBar.style.background = `conic-gradient(#e76868 ${startAngle1}deg ${endAngle1}deg, #232544 ${startAngle2}deg ${endAngle2}deg)`;
}

const circleBarStatus = () =>
{
    // 0deg 360deg, 0deg 0deg//Starting values of angles
    endAngle1 = endAngle1 - stepTime;
    startAngle2 = endAngle1;
    console.log("Ángulos:", startAngle1, endAngle1, startAngle2, endAngle2);
    circleBar.style.background = `conic-gradient(#e76868 ${startAngle1}deg ${endAngle1}deg, #232544 ${startAngle2}deg ${endAngle2}deg)`;
}

function pauseCounter()
{
    buttonStartState = false;
    clearInterval(intervalId);
    intervalId = null;
    buttonStartState ? textButtonStart = "Pause" : textButtonStart = "Start";
    buttonStart.innerHTML = textButtonStart;
}

function timerPace()
{
    if(extract === true)
    {
        extractTextFromCounter();
        //First interaction
        minutes = minutes - 1;
        seconds = 59;
        timeString = minutes + ":" + seconds;
        timer.innerText = timeString;
    }
    else
    {
        if(seconds > 0)
        {
            seconds = seconds - 1;
            if(seconds >= 0 && seconds <= 9)
            {
                timeString = minutes + ":" + "0" + seconds;
                timer.innerText = timeString;
            }
            else
            {
                timeString = minutes + ":" + seconds;
                timer.innerText = timeString;
            }
        }
        if(seconds === 0 && minutes > 0)
        {
            minutes = minutes - 1;
            timeString = minutes + ":" + "00";
            timer.innerText = timeString;
            seconds = 60;
        }
    }

    if(minutes === 0 && seconds === 0)
    {
        pauseCounter();
    }

    
}

const extractTextFromCounter = () =>
{
    minutes = timer.innerText.slice(0, 2);
    extract = false;
}











