const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");
// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");

buttons.addEventListener("click", (e) => {
    let className = e.target.className;
    switch(className){
        case "add":
            count.innerHTML++;
            break;
        case "subtract":
            count.innerHTML--
            break;
        case "reset":
            count.innerHTML = 0;
            break;
        default:
            console.log("Clicked");
    }
    setColor();
} )

const setColor = () => {
    if (count.innerHTML > 0 ) {
        count.style.color = "yellow"
    } else if (count.innerHTML < 0){
        count.style.color = "orangered"
    } else {
        count.style.color = "#fff"
    }
}

// add.addEventListener("click", (e) => {
//     count.innerHTML++;
// })

// sub.addEventListener("click", () => {
//     count.innerHTML--
// })

// resetCount.addEventListener("click", () => {
//     count.innerHTML = 0;
// })