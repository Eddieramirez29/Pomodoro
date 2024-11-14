const pomodoroButton = document.getElementById("pomodoroButton");
const shortBreakButton = document.getElementById("shortBreakButton");
const longBreakButton = document.getElementById("longBreakButton");
const timer = document.getElementById("timer");
const circleBar = document.getElementById("circleBar");
const buttonStart = document.getElementById("buttonStart");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");

const font1 = document.getElementById("font1");
const font2 = document.getElementById("font2");
const font3 = document.getElementById("font3");

let intervalId = null; // Inicializamos intervalId en null
let startAngle1 = 0, endAngle1 = 360;
let startAngle2 = 0, endAngle2 = 360;
let stepTime = 0.24;
let time = 1500;
let buttonStartState = false;
let textButtonStart;

let minutes;
let seconds = 60;
let extract = true;
let timeString;
let backgroundColorSelected;
let colorOption;
let fontOption;
let init = true;

if(init === true)
{
    initialStyles();
}

function initialStyles()
{
    backgroundColorSelected = "#e76868";
    init = false;
}

applyButton.addEventListener("click", function()
{
    switch(colorOption)
    {
        case 1:
            backgroundColorSelected = "#e76868";
            color1.style.fontWeight = "900";
            color2.style.fontWeight = "500";
            color3.style.fontWeight = "500";
            setColors1();
            initialcircleBarStatus();
            break;
        case 2:
            backgroundColorSelected = "#3be0ef";
            color1.style.fontWeight = "500";
            color2.style.fontWeight = "900";
            color3.style.fontWeight = "500";
            setColors2();
            initialcircleBarStatus();
            break;
        case 3:
            backgroundColorSelected = "#e73bdb";
            color1.style.fontWeight = "500";
            color2.style.fontWeight = "500";
            color3.style.fontWeight = "900";
            setColors3();
            initialcircleBarStatus();
            break;
    }

    switch (fontOption)
    {
        case 1:
            timer.style.fontFamily = "'Montserrat', sans-serif";
            font1.style.fontWeight = "900";
            font2.style.fontWeight = "500";
            font3.style.fontWeight = "500";
            break;
        case 2:
            timer.style.fontFamily = "'Courier New', monospace";
            font1.style.fontWeight = "500";
            font2.style.fontWeight = "900";
            font3.style.fontWeight = "500";
            break;
        case 3:
            timer.style.fontFamily = "'Times New Roman', serif";
            font1.style.fontWeight = "500";
            font2.style.fontWeight = "500";
            font3.style.fontWeight = "900";
            break;
    }
    

});

color1.addEventListener("click", function()
{
    colorOption = 1;
});

color2.addEventListener("click", function()
{
    colorOption = 2;
});

color3.addEventListener("click", function()
{
    colorOption = 3;
});

font1.addEventListener("click", function()
{
    fontOption = 1;
});

font2.addEventListener("click", function()
{
    fontOption = 2;
});

font3.addEventListener("click", function()
{
    fontOption = 3;
});

buttonStart.addEventListener("click", function()
{

    if(buttonStartState === false)
    {
        buttonStartState = true;
        intervalId = setInterval(() => {
            circleBarStatus();
            timerPace();
        }, 1000);
    }
    else
    {
        pauseCounter();
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
    setColors1();
    clearValues();
    initialcircleBarStatus();
    pauseCounter();
});

const setColors1 = () =>
{
    //Change background colors and font colors
    pomodoroButton.style.backgroundColor = backgroundColorSelected;
    pomodoroButton.style.color = "#2b2d42";//Light font
    shortBreakButton.style.backgroundColor = "#232544";
    shortBreakButton.style.color = "#7b80b9";//Darken font
    longBreakButton.style.backgroundColor = "#232544";
    longBreakButton.style.color = "#7b80b9";//Darken font
}

shortBreakButton.addEventListener("click", function()
{

    timer.textContent= "05:00";
    time = 300;//Segundos
    //5 min = 360°, 1.2°/sec
    stepTime = 1.2;
    setColors2();
    clearValues();
    initialcircleBarStatus();
    pauseCounter()
})

const setColors2 = () =>
{
    //Change background colors and font colors
    pomodoroButton.style.backgroundColor = "#232544";
    pomodoroButton.style.color = "#7b80b9";//Light font
    shortBreakButton.style.backgroundColor = backgroundColorSelected;
    shortBreakButton.style.color = "#2b2d42";//Darken font
    longBreakButton.style.backgroundColor = "#232544";
    longBreakButton.style.color = "#7b80b9";//Darken font
}

longBreakButton.addEventListener("click", function()
{

    timer.textContent= "15:00";
    time = 900;//Segundos
    //15 min = 360°, 0.4°/sec
    stepTime = 0.4;
    setColors3();
    clearValues();
    initialcircleBarStatus();
    pauseCounter()
})

const setColors3 = () =>
{
    //Change background colors and font colors
    pomodoroButton.style.backgroundColor = "#232544";
    pomodoroButton.style.color = "#7b80b9";//Light font
    shortBreakButton.style.backgroundColor = "#232544";
    shortBreakButton.style.color = "#7b80b9";//Darken font
    longBreakButton.style.backgroundColor = backgroundColorSelected;
    longBreakButton.style.color = "#2b2d42";//Darken font
}


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
    circleBar.style.background = `conic-gradient(${backgroundColorSelected} ${startAngle1}deg ${endAngle1}deg, #232544 ${startAngle2}deg ${endAngle2}deg)`;
}

const circleBarStatus = () =>
{
    // 0deg 360deg, 0deg 0deg//Starting values of angles
    endAngle1 = endAngle1 - stepTime;
    startAngle2 = endAngle1;
    console.log("Ángulos:", startAngle1, endAngle1, startAngle2, endAngle2);
    circleBar.style.background = `conic-gradient(${backgroundColorSelected} ${startAngle1}deg ${endAngle1}deg, #232544 ${startAngle2}deg ${endAngle2}deg)`;
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

