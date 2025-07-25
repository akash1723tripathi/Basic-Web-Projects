const textAreaEl = document.getElementById("text-area");
const totalCountEl = document.getElementById("total-counter");
const remainingCountEl = document.getElementById("Remaining");

const maxLength = 100; 

function updateCounter() {
    const textLength = textAreaEl.value.length;
    totalCountEl.innerText = textLength;
    remainingCountEl.innerText = maxLength - textLength;
}

textAreaEl.addEventListener("keyup", updateCounter);

updateCounter();
