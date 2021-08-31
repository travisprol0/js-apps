let btn = document.querySelector(".btn");
let result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  let word = document.querySelector(".input-text").value;
  let flipped = word.split("").reverse().join("");

  if (word == flipped) {
    result.innerText = word + " is a palindrome";
  } else {
    result.innerText = word + " is not a palindrome";
  }
}
