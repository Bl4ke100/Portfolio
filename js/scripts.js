// @prepros-append vendor/jquery-3.3.1.min.js
// @prepros-append vendor/popper.min.js
// @prepros-append vendor/bootstrap.min.js
// @prepros-append vendor/owl.carousel.min.js
// @prepros-append vendor/aos.js
// @prepros-append vendor/isotope.pkgd.min.js
// @prepros-append vendor/jquery.animateNumber.min.js
// @prepros-append vendor/jquery.waypoints.min.js
// @prepros-append vendor/TweenMax.min.js
// @prepros-append vendor/jquery.easing.1.3.js
// @prepros-append vendor/jarallax.min.js
// @prepros-append vendor/jarallax-video.min.js
// @prepros-append vendor/jquery.validate.min.js
// @prepros-append vendor/jquery.fancybox.min.js
// @prepros-append vendor/stickyfill.min.js
// @prepros-append vendor/imagesloaded.pkgd.min.js
// @prepros-append vendor/ScrollMagic.min.js
// @prepros-append vendor/scrollmagic.animation.gsap.min.js

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