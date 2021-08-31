let btn = document.querySelector(".btn");
let coupon = document.querySelector(".coupon");

const copy = (e) => {
  e.preventDefault();

  coupon.select();
  coupon.setSelectionRange(0, coupon.size);
  document.execCommand("copy");
  btn.textContent = "Copied!";
  setTimeout(() => {
    btn.textContent = "Copy";
  }, 3000);
};

btn.addEventListener("click", copy);
