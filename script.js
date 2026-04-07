// CONFIGURATION
const name = "Bestu";
const message = `Suno Bestu, Happy Birthday! 🎉 Aap mere liye sirf ek friend nahi, life ka sabse bada support system ho. Shukriya har us pal ke liye jab aapne mujhe hasaya. Main bas dua karta hoon ke aapka ye naya saal aapki hansi ki tarah sparkling aur magic se bhara ho! Hamesha aise hi rehna, bilkul original! ✨`;

const activateBtn = document.getElementById('activate-btn');
const landingScreen = document.getElementById('landing-screen');
const mainContent = document.getElementById('main-content');
const song = document.getElementById('birthdaySong');
const typeMsg = document.getElementById('type-msg');

// Star Generator
function initStars() {
    const field = document.getElementById('star-field');
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 'px';
        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.setProperty('--d', Math.random() * 3 + 2 + 's');
        field.appendChild(star);
    }
}

// Bubble Generator
function initBubbles() {
    const container = document.getElementById('bubbles');
    setInterval(() => {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 40 + 10 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + 'vw';
        container.appendChild(bubble);
        setTimeout(() => bubble.remove(), 10000);
    }, 1000);
}

initStars();
initBubbles();

// START SURPRISE
activateBtn.addEventListener('click', () => {
    song.play(); // FIX: Audio plays on click
    landingScreen.style.opacity = '0';
    
    setTimeout(() => {
        landingScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        startTyping();
        initScrollReveal();
    }, 800);
});

// TYPEWRITER
let i = 0;
function startTyping() {
    if (i < message.length) {
        typeMsg.innerHTML += message.charAt(i);
        i++;
        setTimeout(startTyping, 40);
    }
}

// SCROLL REVEAL LOGIC
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// MUTE
document.getElementById('mute-btn').addEventListener('click', function() {
    if (song.paused) { song.play(); this.innerText = "🔊"; }
    else { song.pause(); this.innerText = "🔈"; }
});

// DM GIFT BUTTON
document.getElementById('dm-btn').addEventListener('click', () => {
    alert("🎁 Surprise! Aapka asli birthday gift DM mein bhej diya hai (ya abhi bhej raha hoon). Jaldi se check karo! 📱");
});