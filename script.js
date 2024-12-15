const texts = ["A Developer", "A Gamer", "A Designer", "A Freelancer"];
const textElement = document.getElementById('changing-text');
let currentIndex = 0;

function changeText() {
    textElement.style.opacity = 0;
    setTimeout(() => {
        textElement.textContent = texts[currentIndex];
        textElement.style.opacity = 1;
        currentIndex = (currentIndex + 1) % texts.length;
    }, 500);
}

// Start changing text after 2 seconds, then every 2 seconds
setTimeout(() => {
    setInterval(changeText, 2000);
}, 2000);