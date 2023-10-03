const background = document.querySelector(".main-container");
const lightBulbImg = document.querySelector(".bulb-image");

let islLightOn = false;
console.log("light is on:",islLightOn);

const toggleLightBulb = () => {
    lightBulbImg.classList.toggle("bulb-light");
    background.classList.toggle("background-light")
    islLightOn = !islLightOn;
    console.log("light is on:",islLightOn);
}

lightBulbImg.addEventListener("click",toggleLightBulb)

document.body.addEventListener("dblclick",toggleLightBulb);