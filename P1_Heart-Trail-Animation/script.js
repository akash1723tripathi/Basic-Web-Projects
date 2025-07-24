const bodyE1 = document.querySelector("body")

bodyE1.addEventListener("mousemove", (e) => {
      const xPos = e.offsetX
      const yPos = e.offsetY
      const spanE1 = document.createElement("span")
      spanE1.style.left = xPos + "px"
      spanE1.style.top = yPos + "px"
      bodyE1.appendChild(spanE1)
      const size = Math.random()*100
      spanE1.style.width = size+"px";
      spanE1.style.height = size+"px";
      setTimeout(() => {
            spanE1.remove()
      }, 3000)
      
})