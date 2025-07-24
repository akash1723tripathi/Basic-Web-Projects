const monthNameEl = document.getElementById("monthName")
const dayNameEl = document.getElementById("dayName")
const dateEl = document.getElementById("date")
const yearEl = document.getElementById("year")

const date = new Date()
console.log(date);

// const updatedMonth = date.getMonth() + 1
monthNameEl.innerHTML = date.toLocaleString("en",{month: "long"})
dayNameEl.innerHTML = date.toLocaleString('en', { weekday: 'long' })
dateEl.innerHTML = date.getDate()
yearEl.innerHTML = date.getFullYear()
