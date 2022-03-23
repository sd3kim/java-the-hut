const button = document.querySelectorAll(".remove");
const productItems = document.querySelectorAll(".product-items");
function removeFunction() {
  productItems.forEach(function (e) {
    e.remove();
  });
}

button.addEventListener("click", removeFunction);
