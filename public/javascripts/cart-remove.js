const button = document.querySelectorAll(".remove");
const productItems = document.querySelectorAll(".product-items");
const add = document.querySelectorAll(".add");
const sub = document.querySelectorAll(".sub");
const input = document.querySelectorAll(".input");

function removeFunction() {
  productItems.forEach(function (e) {
    e.remove();
  });
}

button.addEventListener("click", removeFunction);
