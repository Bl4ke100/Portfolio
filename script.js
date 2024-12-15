document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        'An undergraduate Software Engineer',
        'A developer',
        'A designer', 
        'A gamer'
    ];

    const changeTextElement = document.getElementById('changeText');
    let currentIndex = 0;

    function changeText() {
        // Add exit animation class
        changeTextElement.classList.add('text-exit');

        // Wait for exit animation to complete
        setTimeout(() => {
            // Change text
            currentIndex = (currentIndex + 1) % texts.length;
            changeTextElement.textContent = texts[currentIndex];

            // Remove exit, add enter animation
            changeTextElement.classList.remove('text-exit');
            changeTextElement.classList.add('text-enter');

            // Remove enter animation after transition
            setTimeout(() => {
                changeTextElement.classList.remove('text-enter');
            }, 600);
        }, 600);
    }

    // Change text every 2 seconds
    setInterval(changeText, 2000);
});