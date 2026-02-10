const container = document.getElementById('hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    
    // 1. Randomize Position
    heart.style.left = Math.random() * 100 + 'vw';
    
    // 2. Randomize Size (between 10px and 35px)
    const size = Math.floor(Math.random() * 25) + 10; 
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    
    // 3. Randomize Animation Speed
    const duration = Math.random() * 3 + 4;
    heart.style.setProperty('--duration', duration + 's');
    
    // 4. Randomize Opacity (for more depth)
    heart.style.opacity = Math.random() * 0.5 + 0.2;

    container.appendChild(heart);

    // Cleanup
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Generate a heart every 400ms
setInterval(createHeart, 400);

// Add this to your existing script.js
const letter = document.querySelector('.letter');

letter.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents the envelope from closing when clicking the letter
    window.location.href = 'letter.html';
});