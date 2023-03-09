// Get the elements from HTML
var answer = document.getElementById("answer");
var submit = document.getElementById("submit");
var message = document.getElementById("message");

// Store the correct answer
var correctAnswer = "watch";

// Add an event listener to submit button
submit.addEventListener("click", function() {

 // Get the user input
 var userInput = answer.value.toLowerCase();

 // Check if user input matches with correct answer
 if (userInput === correctAnswer) {

   // Redirect to another page
   window.location.href = "backup.html";

 } else {

   // Display an error message
   message.textContent = "sorry! That's not correct.";

 }

});