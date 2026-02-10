const textElement = document.getElementById('typewriter-text');
const paperElement = document.querySelector('.paper');
const message = "For my dearest Lucy,\n\nPlaying this song feels like a playback of everything we've been through, and everytime I hear it, I'm reminded of how lucky I am to be loved by you. Looking back over the past years, who would've thought we'd end up with what we have now?? Seeing how far we've come and how much we've grown together makes me reallyyyy proud of us.\nI'll always be thankful for what we have and for giving me the privilege to be the one to get to know you, spend time with you, and the one to love you, and may this letter be a reminder of how easy it is to love you, and that you will always be loved. Know that even when everything gets loud and uncertain, I will always be here, choosing you over and over again.\nWith all that in mind, thought I'd ask...\nWill you be my valentine?";

let index = 0;
const speed = 60; 

function typeWriter() {
    if (index < message.length) {
        textElement.textContent += message.charAt(index);
        index++;
        paperElement.scrollTop = paperElement.scrollHeight;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(showDoneButton, 2000); // Reduced wait time to 2 seconds
    }
}

function showDoneButton() {
    if(!document.querySelector('.done-button')) {
        const btn = document.createElement('button');
        btn.innerHTML = "Done Reading";
        btn.className = "done-button";
        paperElement.appendChild(btn);
        btn.onclick = () => { window.location.href = "question.html"; };
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    
    heart.style.left = Math.random() * 100 + 'vw';
    const size = Math.floor(Math.random() * 20) + 10; 
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    
    const duration = Math.random() * 3 + 5;
    heart.style.setProperty('--duration', duration + 's');
    heart.style.setProperty('--opacity', Math.random() * 0.5 + 0.3);

    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, duration * 1000);
}