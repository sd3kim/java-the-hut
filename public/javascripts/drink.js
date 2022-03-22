const add = document.getElementById("ad");
const sub = document.querySelector(".sub");
const input = document.querySelector(".input");
let total, inputVal;

// function adding() {
//   inputVal = parseInt(input.value);
//   total = inputVal + 1;
//   input.textContent = total;
//   console.log("total", total);
// }
function adding() {
  inputVal = input.valueAsNumber++;
  input.textContent = inputVal;
}
function substract() {
  inputVal = input.valueAsNumber--;
  input.textContent = inputVal;
}
ad.addEventListener("click", adding);

sub.addEventListener("click", substract);
