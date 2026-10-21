// Spooky messages for popup
const scaryMessages = [
    "You shouldn't have come...",
    "They're closer than you think...",
    "Don't look behind you...",
    "The door is locked...",
    "It's too late to run..."
];

// Enter Button — Show random scary message
const enterBtn = document.getElementById('enterBtn');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popupText');
const closePopup = document.getElementById('closePopup');

enterBtn.addEventListener('click', () => {
    const randomMsg = scaryMessages[Math.floor(Math.random() * scaryMessages.length)];
    popupText.textContent = randomMsg;
    popup.classList.remove('hidden');
});

closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
});

// Notify Button
const notifyBtn = document.getElementById('notifyBtn');
notifyBtn.addEventListener('click', () => {
    alert("You'll be notified... IF you survive 🔪");
});

// Random flicker effect
setInterval(() => {
    const flicker = document.querySelector('.flicker');
    if (Math.random() > 0.95) {
        flicker.style.background = 'rgba(255,0,0,0.08)';
        setTimeout(() => {
            flicker.style.background = 'rgba(0,0,0,0.03)';
        }, 50);
    }
}, 200);

// Console scare
console.log("%c⚠️ THEY SEE YOU ⚠️", "color: red; font-size: 24px; font-weight: bold;");