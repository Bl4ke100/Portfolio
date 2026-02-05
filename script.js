// Dynamic text animation for hero section
const roles = [
    "An undergraduate Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Casual Gamer",
    "Graphic Designer",
    "Editor",
    "Content Creator"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const element = document.getElementById('changeText');
    if (!element) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        // Deleting text
        element.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        // Typing text
        element.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    // Check if word is complete
    if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end of word
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Move to next word
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
}

// Start the typing animation when page loads
document.addEventListener('DOMContentLoaded', function () {
    // Wait a bit for the page animations to settle
    setTimeout(typeText, 1500);
});

