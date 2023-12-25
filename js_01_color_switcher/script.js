const body = document.querySelector("body")
const buttons = document.querySelectorAll(".button")

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "green"){
      body.style.backgroundColor = event.target.id
    }
    if (event.target.id === "blue"){
      body.style.backgroundColor = event.target.id
    }
    if (event.target.id === "grey"){
      body.style.backgroundColor = event.target.id
    }
    if (event.target.id === "black"){
      body.style.backgroundColor = event.target.id
    }
    if (event.target.id === "purple"){
      body.style.backgroundColor = event.target.id
    }
  })
})