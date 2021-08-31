let btn = document.querySelector(".btn");
let result = document.querySelector(".result");

btn.addEventListener("click", vowels);

function vowels() {
  let vowels = ["a", "e", "i", "o", "u"];
  let word = document.querySelector(".input-text").value.toLowerCase();
  let count = 0;
  for (let i = 0; i < vowels.length; i++) {
    if (word.includes(vowels[i])) {
      count++;
    }
  }
  result.innerHTML = word + ` contains ${count} vowels`;
}
