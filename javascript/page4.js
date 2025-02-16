const Score = document.getElementById('score');
const buttons = document.querySelectorAll('section .options button');
const answer = document.getElementById('answer');
const correctAnswer = document.getElementById('correctAnswer');
const checkAnswer = document.querySelector('.check-answer-button');
const person = document.getElementById('person');

person.textContent = localStorage.getItem('name');

function disableAllButtons() {
    buttons.forEach(btn => {
        btn.disabled = true;
    });
}

// Restore state on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedScore = localStorage.getItem('score');
    const page4Disabled = localStorage.getItem('page4Disabled');
    const page4Answer = localStorage.getItem('page4Answer');

    if (storedScore) {
        Score.innerHTML = storedScore;
    }

    if (page4Disabled === 'true') {
        disableAllButtons();
    }

    if (page4Answer) {
        answer.innerHTML = page4Answer;
    }
});

// Add event listeners to buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let score = parseInt(localStorage.getItem('score') || 0);

        if (button.textContent === 'Panjab Kings') {
            answer.innerHTML = 'Correct Answer! You got 5 points.';
            score += 5;
        } else {
            answer.innerHTML = 'Oops! Wrong Answer. You got 0 points.';
        }

        // Save score and answer
        Score.innerHTML = score;
        localStorage.setItem('score', score);
        localStorage.setItem('page4Answer', answer.innerHTML);

        // Disable buttons
        buttons.forEach(btn => btn.disabled = true);
        localStorage.setItem('page4Disabled', 'true');

        // Check Answer button
checkAnswer.addEventListener('click', () => {
    checkAnswer.innerHTML = 'Correct Answer';
    correctAnswer.innerHTML = 'Panjab Kings';
});
    });
});


