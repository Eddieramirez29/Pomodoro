const settingsButton = document.getElementById("settingsButton");
const buttonSettingsClose = document.getElementById("buttonSettingsClose");
const containerSettings = document.querySelector(".containerSettings");
const limits = [
    { upButton: "buttonUp1",
        downButton: "buttonDown1",
        label: "label1", max: 99 },

    { upButton: "buttonUp2",
        downButton: "buttonDown2",
        label: "label2", max: 20 },
        
    { upButton: "buttonUp3",
        downButton: "buttonDown3",
        label: "label3", max: 59 }
];


/*Section for settings */
settingsButton.addEventListener("click", function()
{
    //Show off settings menu
    containerSettings.style.display = "block";
});

buttonSettingsClose.addEventListener("click", function()
{
    //Hide settings menu
    containerSettings.style.display = "none";
});

limits.forEach(({ upButton, downButton, label, max }) => {
    const buttonUp = document.getElementById(upButton);
    const buttonDown = document.getElementById(downButton);
    const labelElement = document.getElementById(label);

    buttonUp.addEventListener("click", () => {
        let value = Number(labelElement.innerText) + 1;
        labelElement.innerText = value > max ? max : value;
    });

    buttonDown.addEventListener("click", () => {
        let value = Number(labelElement.innerText) - 1;
        labelElement.innerText = value < 0 ? 0 : value;
    });
});
