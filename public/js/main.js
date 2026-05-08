import { type } from './typing.js';

const loader = document.getElementById('loader');
const terminalEl = document.getElementById('bootTerminal');
const percentageEl = document.getElementById('loadPercentage');
const progressBarEl = document.getElementById('progressBar');
const enterButton = document.getElementById('enterButton');
const musicToggle = document.getElementById('musicToggle');

const audio = new Audio('/music.mp3');
audio.loop = true;

const bootSequences = [
  { text: "INITIALIZING CORE SYSTEM...", status: "PENDING" },
  { text: "DECRYPTING MEMORY CACHE...", status: "PENDING" },
  { text: "STATUS:", status: "OPTIMAL" },
  { text: "MAPPING NEURAL PATHWAYS...", status: "DONE" },
  { text: "POWERING INTERFACE MODULES...", status: "PENDING" },
  { text: "SECURITY FIREWALL BYPASS...", status: "DONE" },
  { text: "ESTABLISHING SECURE UPLINK...", status: "PENDING" },
  { text: "PROTOCOL:", status: "X7-STABLE" },
  { text: "SENSORY ARRAY CALIBRATION...", status: "DONE" },
  { text: "LOADING PERSONAL ARCHIVES...", status: "PENDING" },
  { text: "SYSTEM STATUS:", status: "READY" },
  { text: "USER ACCESS REQUIRED...", status: "AUTH" }
];

let currentLineIndex = 0;
let currentProgress = 0;

function updateLoader() {
  if (currentProgress < 100) {
    currentProgress += Math.random() * 0.8; // Slower, more cinematic progress
    if (currentProgress > 100) currentProgress = 100;
    
    const displayProgress = Math.floor(currentProgress);
    percentageEl.textContent = `${displayProgress}%`;
    progressBarEl.style.width = `${displayProgress}%`;

    const threshold = (currentLineIndex + 1) * (100 / bootSequences.length);
    if (currentProgress >= threshold && currentLineIndex < bootSequences.length) {
      if (terminalEl) {
        typeTerminalLine(bootSequences[currentLineIndex]);
      }
      currentLineIndex++;
    }

    requestAnimationFrame(updateLoader);
  } else {
    setTimeout(() => {
      enterButton.classList.add('active');
    }, 1200);
  }
}

async function typeTerminalLine(sequence) {
  if (!terminalEl) return;
  const existingLines = terminalEl.querySelectorAll('.terminal-line');
  existingLines.forEach(line => line.classList.add('old'));

  const lineEl = document.createElement('div');
  lineEl.className = 'terminal-line active';
  terminalEl.appendChild(lineEl);

  const prefix = "> ";
  lineEl.textContent = prefix;

  // Type the main text
  for (let i = 0; i < sequence.text.length; i++) {
    lineEl.textContent += sequence.text[i];
    await new Promise(r => setTimeout(r, Math.random() * 30 + 20));
  }

  // Add status if exists
  if (sequence.status) {
    const statusSpan = document.createElement('span');
    statusSpan.className = 'status-ok';
    statusSpan.style.opacity = '0';
    statusSpan.textContent = sequence.status === 'DONE' ? ' ✓ VERIFIED' : ` ${sequence.status}`;
    lineEl.appendChild(statusSpan);
    
    setTimeout(() => {
      statusSpan.style.opacity = '1';
      statusSpan.style.transition = 'opacity 0.3s';
      
      // Slight flicker on update
      if (Math.random() > 0.6) {
        lineEl.style.animation = 'glitch-line 0.1s 2';
      }
    }, 200);
  }
}

enterButton.addEventListener('click', () => {
  audio.play().catch(e => console.log("Audio block:", e));
  
  // High-end transition
  if (terminalEl) {
    terminalEl.style.transition = 'opacity 0.8s, transform 1s';
    terminalEl.style.opacity = '0';
    terminalEl.style.transform = 'translateX(-20px)';
  }
  
  const uiGroup = document.querySelector('.loading-ui-group');
  uiGroup.style.transition = 'opacity 0.8s, transform 1s';
  uiGroup.style.opacity = '0';
  uiGroup.style.transform = 'translateY(20px)';

  const loaderVideo = document.getElementById('loaderVideo');
  if (loaderVideo) {
    loaderVideo.style.transition = 'transform 3s cubic-bezier(0.16, 1, 0.3, 1), filter 2s';
    loaderVideo.style.transform = 'scale(1.1)';
    loaderVideo.style.filter = 'brightness(0.3)';
  }

  setTimeout(() => {
    loader.classList.add('fade-out');
    document.body.classList.add('app-active');
    
    if (typeof type === 'function') {
      setTimeout(type, 800);
    }
  }, 1000);
});

// Toggle for music in main UI
musicToggle.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    musicToggle.textContent = 'SYSTEM_AUDIO: ON';
  } else {
    audio.pause();
    musicToggle.textContent = 'SYSTEM_AUDIO: OFF';
  }
});

// Parallax for hero
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// Sound Effects
const playClickSound = () => {
  try {
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(1200, context.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, context.currentTime + 0.05);

    gain.gain.setValueAtTime(0.05, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.05);

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start();
    oscillator.stop(context.currentTime + 0.05);
  } catch (e) {
    console.log("Audio context failed:", e);
  }
};

// Add click listeners to interactive elements
document.addEventListener('click', (e) => {
  const target = e.target.closest('a, button, .card, .contact-card, .music-control');
  if (target) {
    playClickSound();
  }
});

// GSAP Animations for sections
function initGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  
  gsap.registerPlugin(ScrollTrigger);

  // Project Cards staggered entrance
  gsap.to('.card', {
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: 'expo.out'
  });

  // Contact Cards staggered entrance
  gsap.from('.contact-card', {
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 85%',
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out'
  });

  // Floating text reveal
  gsap.from('.floating-text', {
    scrollTrigger: {
      trigger: '.floating-text',
      start: 'top 95%',
    },
    opacity: 0,
    y: 20,
    duration: 1.5,
    ease: 'power2.out'
  });
}

// Start sequence
window.addEventListener('load', () => {
  updateLoader();
  checkVisualSystem();
  initGSAP();
});

function checkVisualSystem() {
  const spline = document.getElementById('splineMain');
  const fallback = document.getElementById('robotFallback');
  const backupVideo = document.getElementById('backupRoboVideo');
  
  const activateFallback = () => {
    console.warn("Visual system failure. Activating backup video.");
    if (spline) spline.style.display = 'none';
    if (backupVideo) {
      backupVideo.style.display = 'block';
      const playPromise = backupVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Backup video autoplay blocked, showing fallback text:", error);
          if (fallback) fallback.style.display = 'flex';
        });
      }
    } else if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  // 1. Check for WebGL 2 support
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('experimental-webgl2');
  if (!gl) {
    activateFallback();
    return;
  }

  // 2. Global error listener
  const visualErrorHandler = (event) => {
    if (event.message && (event.message.includes('clearBufferfv') || event.message.includes('WebGL') || event.message.includes('context lost'))) {
      activateFallback();
      window.removeEventListener('error', visualErrorHandler);
    }
  };
  window.addEventListener('error', visualErrorHandler);

  // 3. Timeout check for Spline
  const splineTimeout = setTimeout(() => {
    let splineLoaded = false;
    if (spline) {
      const internalCanvas = spline.shadowRoot?.querySelector('canvas') || spline.querySelector('canvas');
      if (internalCanvas) splineLoaded = true;
    }
    
    if (!splineLoaded) {
      console.warn("Spline load timeout. Activating fallback.");
      activateFallback();
    }
  }, 12000); 

  // 4. Success listener
  if (spline) {
    spline.addEventListener('load-complete', () => {
      console.log("Spline system integrated: Model loaded successfully.");
      clearTimeout(splineTimeout);
    });
  }
}

// Update Current Date in Contact Section
function updateSystemDate() {
  const dateEl = document.getElementById('currentDate');
  if (dateEl) {
    const now = new Date();
    // Format as YYYY_MM_DD
    const dateStr = now.toISOString().split('T')[0].replace(/-/g, '_');
    dateEl.textContent = dateStr;
  }
}
updateSystemDate();
