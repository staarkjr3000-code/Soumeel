const typingText = document.getElementById('typing');
const words = [
  "STAARK", 
  "STUDENT", 
  "STARBORN", 
  "System Builder", 
  "SOUMEEL", 
  "Code Architect", 
  "Intelligence Engineer", 
  "Reality Designer", 
  "Neural Strategist", 
  "Vision in Progress", 
  "Becoming Limitless"
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 150;

export function type() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typeSpeed = 60;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typeSpeed = 150;
  }

  // Handle glow intensity based on word completion
  if (!isDeleting && charIndex === currentWord.length) {
    typingText.style.textShadow = "0 0 20px var(--cyan), 0 0 40px var(--cyan-glow)";
    isDeleting = true;
    typeSpeed = 2500; // Long pause on full word
  } else if (isDeleting && charIndex === 0) {
    typingText.style.textShadow = "0 0 10px var(--cyan-glow)";
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 400;
  } else {
    // Subtle flicker during typing
    if (Math.random() > 0.9) {
      typingText.style.opacity = "0.7";
      setTimeout(() => typingText.style.opacity = "1", 50);
    }
  }

  setTimeout(type, typeSpeed);
}

// Start typing animation
window.addEventListener('load', () => {
    // Only start if loader is gone or after click
    // We'll call this from main.js when the system initializes
});
