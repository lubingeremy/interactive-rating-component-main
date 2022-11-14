
const form = document.getElementById("myForm")
const rating = document.getElementById("rating")
const thanking = document.getElementById("thanking")
const submit = document.getElementById("submitButton")

var answer = 0

var submittedRating = document.getElementById("submittedRating")

const propositions = ["optionOne", "optionTwo", "optionThree", "optionFour", "optionFive"]

function setAnswer(rating){
  answer = rating 
}

function cardTransition(){
  rating.classList.add("slideOut")
  thanking.classList.add("slideIn")
}

function showThanks(){
  cardTransition()
  submittedRating.innerText = answer
  resetRadio()
}

function resetRadio(){
  for (index in propositions){
    document.getElementById(propositions[index]).checked = false;
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  answer = document.querySelector("input[name=ratingOption]:checked").value;
  showThanks()
})
