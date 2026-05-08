const scrollProgress = document.querySelector(".scroll-progress");
const transitionSection = document.getElementById("transition");
const transitionVideo = document.getElementById("transitionVideo");

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Scroll Progress Tracker
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolledPercent = (scrolled / height) * 100;
  if (scrollProgress) {
    scrollProgress.style.width = scrolledPercent + "%";
  }
});

// Transition Video Scrubbing
if (transitionSection && transitionVideo) {
  transitionVideo.addEventListener("loadedmetadata", () => {
    initTransitionScroll();
  });

  if (transitionVideo.readyState >= 2) {
    initTransitionScroll();
  }
}

function initTransitionScroll() {
  const duration = transitionVideo.duration;
  if (!duration) return;

  // We use a simple tween on 'currentTime'
  // GSAP 3 handles the property scrubbing efficiently
  gsap.to(transitionVideo, {
    currentTime: duration,
    ease: "none",
    scrollTrigger: {
      trigger: "#transition",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5, // Increased scrub for smoother "high-end" inertia
      pin: ".transition-sticky",
      // Removed manual onUpdate to avoid collision with the tween
      onLeave: () => {
        // Ensure video is at exact end
        transitionVideo.currentTime = duration;
      },
      onLeaveBack: () => {
        // Ensure video is at exact start
        transitionVideo.currentTime = 0;
      }
    }
  });
}

// Section reveal animations
const sections = document.querySelectorAll("section");
const observerOptions = {
  threshold: 0.2
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});
