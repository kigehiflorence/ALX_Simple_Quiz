document.addEventListener("DOMContentLoaded", function() {
    // Function declaration
    function checkAnswer() {
        // Identify the correct answer
        const correctAnswer = "4";

        // Retrieve the user's answer
        const selectedOption = document.querySelector('input[name="quiz"]:checked');

        // Get the feedback element
        const feedback = document.getElementById("feedback");

        // Check if an option was selected
        if (!selectedOption) {
            feedback.textContent = "Please select an answer before submitting.";
            return;
        }

        const userAnswer = selectedOption.value;

        // Compare and give feedback
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    }

    // Add event listener to the submit button
    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
});
