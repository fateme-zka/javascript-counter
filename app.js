// Dom
let counter = document.querySelector("#counter");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");
const decreaseBtn = document.querySelector(".decrease");

// Event listeners
addEventListener("load", onloadLS);
increaseBtn.addEventListener("click", increaseOne);
resetBtn.addEventListener("click", reset);
decreaseBtn.addEventListener("click", decreaseOne);

// Functions
function increaseOne() {
  counter.innerHTML = Number(counter.innerHTML) + 1;
  saveToLS(counter.innerHTML);
}

function reset() {
  counter.innerHTML = 0;
  saveToLS(counter.innerHTML);
}

function decreaseOne() {
  counter.innerHTML = Number(counter.innerHTML) - 1;
  saveToLS(counter.innerHTML);
}

function saveToLS(counter) {
  localStorage.setItem("counter", counter);
}

function onloadLS() {
  counter.innerHTML = localStorage.getItem("counter");
}
