const containerElement = document.querySelector('.container');
const careers =["Youtuber", "Software Engineer", "Data Scientist", "Video Editor"]
let index = 0;
let charIndex = 0;

updateCareer()

function updateCareer(){
      charIndex++;
      containerElement.innerHTML = `<h1>I am a ${careers[index].slice(0,charIndex)}</h1>`
      
      setTimeout(() => {
            if(charIndex === careers[index].length){
                  index++;
                  charIndex = 0;
            }
            if(index === careers.length){
                  index = 0;
            }
            updateCareer();
      }, 200);

}
