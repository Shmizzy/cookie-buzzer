


const button = document.querySelector(".red-button");
const divElement = document.getElementById("display");
console.dir(button);

button.addEventListener('click', ()=>{
    const textElement = document.createElement('h1')
    textElement.textContent = "YOU WON A COOKIE"
    divElement.appendChild(textElement);
})