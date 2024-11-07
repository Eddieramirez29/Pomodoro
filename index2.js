
let rbg1, rgb2, rgb3, rgb4;
let angle1, angle2, angle3, angle4;



// Selecciona el elemento
const circleBar = document.getElementById("circleBar");

// Obtiene el valor de backgroundImage
const backgroundValue = getComputedStyle(circleBar).backgroundImage;

// Expresión regular mejorada para capturar colores y ángulos opcionales
const gradientRegex = /(#\w{3,6}|\w+\([\d,.\s]+\))(?:\s+(\d+deg))?(?:\s+(\d+deg))?/g;
let match;


const extraerGradiente = () =>
{
    let count = 1;

    while ((match = gradientRegex.exec(backgroundValue)) !== null)
        {
            const color = match[1];        // Color RGB
            const startAngle = match[2];    //Angle
        
            console.log("Color:", color);
            console.log("Ángulo de inicio:", startAngle || "No especificado");

            if(count === 1)
            {
                rbg1 = color;
                angle1 = startAngle;
                console.log(count);
            }
            else
            if(count === 2)
            {
                rbg1 = color;
                angle1 = startAngle;
                console.log(count);
            }
            else
            if(count === 3)
            {
                rbg1 = color;
                angle1 = startAngle;
                console.log(count);
            }
            else
            if(count === 4)
            {
                rbg1 = color;
                angle1 = startAngle;
                console.log(count);
            }

            count++
        }
}

extraerGradiente();

