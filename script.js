
const form = document.getElementById("myForm")
const rating = document.getElementById("rating")
const thanking = document.getElementById("thanking")
const submit = document.getElementById("submitButton")

// console.log(main)

var answer = 0

var submittedRating = document.getElementById("submittedRating")

const propositions = ["optionOne", "optionTwo", "optionThree", "optionFour", "optionFive"]

function setAnswer(rating){
  answer = rating 
}

function cardTransition(){
  rating.classList.add("slideOut")
  setTimeout(function() {
    rating.style.display = "none"; // Masque la première section après la transition
  }, 500); 
  setTimeout(function() {
    thanking.style.display = "flex"; // Affiche la deuxième section
  }, 600); 
  setTimeout(function() {
    thanking.classList.add("slideIn")
  }, 700); 
  
  // rating.style.display = "none"
  // thanking.classList.add("slideIn")
  // document.getElementById("main").style.height = "25rem"
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
