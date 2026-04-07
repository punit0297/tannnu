const friendName = "Bestie";
const message = `Mubarak ho! 🎉 Aaj ka din mere liye bhi bohot special hai kyunki aaj aapka janamdin hai. 🌟

Aap jaise dost kismat se milte hain jo har pagalpan mein saath dein. Main bas yahi dua karta hoon ke aap hamesha aise hi muskurate rahein aur aapki zindagi mein dher saari khushiyan aur kamyabi aaye. Happy Birthday to my partner in crime! ❤️✨`;

const openBtn = document.getElementById('open-btn');
const landingScreen = document.getElementById('landing-screen');
const mainContent = document.getElementById('main-content');
const bgMusic = document.getElementById('bgMusic');
const typingElement = document.getElementById('typing-text');

// --- START SURPRISE ---
openBtn.addEventListener('click', () => {
    landingScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');
    bgMusic.play();
    bgMusic.volume = 0.5;
    
    // Start Star particles
    setInterval(createSparkle, 500);
    startTyping();
});

// --- TYPING EFFECT ---
let index = 0;
function startTyping() {
    if (index < message.length) {
        typingElement.innerHTML += message.charAt(index);
        index++;
        setTimeout(startTyping, 40);
    }
}

// --- STAR RAIN (Instead of Hearts) ---
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = '100vh';
    sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 4000);
}

// --- SLIDER ---
let currentSlide = 0;
function changeSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// --- MUTE TOGGLE ---
document.getElementById('mute-btn').addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        this.innerText = "🔊";
    } else {
        bgMusic.pause();
        this.innerText = "🔈";
    }
});

// --- FINAL BUTTON ---
document.getElementById('gift-btn').addEventListener('click', () => {
    alert("Pizza party pending from my side! 🍕 Happy Birthday, Legend!");
});