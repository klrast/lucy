// 1. Setup Variables
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const heartsContainer = document.getElementById('hearts-container');

// 2. The "Yes" Button Redirect Condition
yesBtn.addEventListener('click', () => {
    // Replace 'celebration.html' with your actual filename
    window.location.href = "celebration.html"; 
});

// 3. The "No" Button Runaway Logic
noBtn.addEventListener('mouseover', () => {
    // Switch to fixed position so it can fly over the whole screen
    if (noBtn.style.position !== 'fixed') {
        noBtn.style.position = 'fixed';
    }

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    // Padding so it doesn't touch the very edge
    const padding = 30;
    const randomX = Math.max(padding, Math.floor(Math.random() * (maxX - padding)));
    const randomY = Math.max(padding, Math.floor(Math.random() * (maxY - padding)));
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// 4. Floating Hearts Logic
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    
    heart.style.left = Math.random() * 100 + 'vw';
    
    const size = Math.floor(Math.random() * 18) + 10;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    
    const duration = Math.random() * 3 + 4;
    heart.style.setProperty('--duration', duration + 's');
    heart.style.setProperty('--opacity', Math.random() * 0.5 + 0.3);

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Start heart animation
setInterval(createHeart, 300);