const quotes = [
  "Vision turns chaos into architecture.",
  "Silence is where systems are born.",
  "The future rewards relentless creators.",
  "Ideas evolve through execution.",
  "Innovation begins beyond comfort.",
  "Dreams require engineered discipline.",
  "Builders shape what others consume.",
  "Pressure reveals true intelligence.",
  "Architecture is the blueprint, code is the soul.",
  "Elegance is the ultimate sophistication in engineering.",
  "Machines compute, but visionary minds create.",
  "Breaking boundaries is standard operating procedure.",
  "Simplicity is the final layer of complexity.",
  "Optimizing for impact, not just performance.",
  "Digital signals, human resonance.",
  "The interface is the bridge between thought and reality.",
  "Calculated risks yield exponential returns.",
  "Legacy isn't what you leave behind, it's what you build forward.",
  "Algorithmically driven, creatively inspired.",
  "Refined by failure, defined by execution.",
  "The grid is a playground for those who see beyond lines.",
  "Synchronizing ambition with technical precision.",
  "Beyond the logic lies the soul of the machine.",
  "Code is the modern alchemy of transformation."
];

async function updateQuote() {
  const quoteEl = document.getElementById("aiQuote");
  if (!quoteEl) return;

  try {
    const categories = [
      "Generate one short futuristic motivational quote.",
      "Generate one cinematic visionary quote.",
      "Generate one intelligent inspirational quote.",
      "Generate one short dark-to-light motivational quote.",
      "Generate one elegant innovation quote."
    ];
    const query = categories[Math.floor(Math.random() * categories.length)];
    
    // Using pollination for dynamic quotes if available
    const response = await fetch(`https://text.pollinations.ai/${encodeURIComponent(query)}`);
    let text = await response.text();
    
    // Clean up
    text = text.replace(/["']/g, "").replace(/by\s.+/gi, "").replace(/—.*/g, "").trim();
    
    if (!text || text.length < 10 || text.length > 120) throw new Error("Bad quote");
    
    quoteEl.innerText = `"${text}"`;
  } catch (error) {
    console.log("Pollination fallback triggered");
    const fallbackQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.innerText = `"${fallbackQuote}"`;
  }
}

document.addEventListener("DOMContentLoaded", updateQuote);
