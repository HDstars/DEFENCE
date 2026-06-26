document.addEventListener("DOMContentLoaded", () => {
    
    const exploreBtn = document.getElementById("exploreBtn");
    const quizBtn = document.getElementById("quizBtn");

    // Action when user clicks "Start Preparation" button
    exploreBtn.addEventListener("click", () => {
        const examsSection = document.getElementById("exams");
        examsSection.scrollIntoView({ behavior: "smooth" });
    });

    // Action when user clicks "Take Daily Quiz" button
    quizBtn.addEventListener("click", () => {
        const answer = confirm("Question: Which academy trains Army officers in Dehradun?\n\nClick OK for Indian Military Academy (IMA)\nClick CANCEL for Officers Training Academy (OTA)");
        
        if (answer) {
            alert("Correct! The Indian Military Academy (IMA) is situated in Dehradun.");
        } else {
            alert("Incorrect. OTA is in Chennai/Gaya. IMA is located in Dehradun. Keep trying!");
        }
    });
});
