const imageConatiner = document.querySelector('.imageContainer');

const btnEL = document.querySelector('.btn');

btnEL.addEventListener("click",()=>{
      imageNum=10;
      addRanomImage();
})

function addRanomImage() {
      for (let index = 0; index < imageNum; index++) {   
            const newImg = document.createElement('img');
            newImg.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`;
            imageConatiner.appendChild(newImg);
      }
}