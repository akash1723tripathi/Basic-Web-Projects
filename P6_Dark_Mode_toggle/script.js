const inputEl = document.querySelector('.input');
const bodyEl = document.querySelector('body');

function toggleDarkMode() {
     if (inputEl.checked) {
            bodyEl.style.backgroundColor = "black"
      } 
      else {
            bodyEl.style.backgroundColor = "white"
      }
}

inputEl.addEventListener("click", ()=>{
     toggleDarkMode(); 
});