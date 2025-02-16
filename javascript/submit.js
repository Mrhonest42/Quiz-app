const score = document.getElementById('score');
const person = document.getElementById('name');

person.textContent = localStorage.getItem('name');

const finalScore = localStorage.getItem('score');
score.innerHTML = finalScore;

document.getElementById("downloadBtn").addEventListener("click", function () {
    let container = document.querySelector(".final-section"); 
    html2canvas(container).then((canvas) => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "quiz-score.png";
        link.click();
    });
});
