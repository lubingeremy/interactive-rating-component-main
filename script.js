
const rating = document.getElementById("rating")
const thanking = document.getElementById("thanking")
const submit = document.getElementById("submitButton")
var answer = 0
var submittedRating = document.getElementById("submittedRating")

// console.log(rating, thanking)

function setAnswer(rating){
  answer = rating 
  console.log(answer)
}

function showThanks(){
  event.preventDefault()
  rating.style.display = "none"
  thanking.style.display = "flex"
  submittedRating.innerText = answer
}