const color = document.querySelector("h1");
const btn = document.querySelector(".btn");
const background = document.querySelector("body");
function randomColorGeneretor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;
}
btn.addEventListener("click", () => {
    const randomColor = randomColorGeneretor();
    background.style.backgroundColor = randomColor;
    color.innerHTML = randomColor;
})
btn.addEventListener("enter", () => {
    const randomColor = randomColorGeneretor();
    background.style.backgroundColor = randomColor;
})