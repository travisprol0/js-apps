const btn = document.querySelector(".generate")
const number = document.querySelector(".random")
number.innerHTML = Math.floor(Math.random() * 100);
btn.addEventListener("click", () => {
    number.innerHTML = Math.floor(Math.random() * 100);
})