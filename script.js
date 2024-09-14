const cards = [
    "Let chaos take the lead momentarily.",
    "Simplify relentlessly, then rebuild.",
    "Make a choice by doing the exact opposite.",
    "Exchange your tools for unfamiliar ones.",
    "Listen as if it's your very first time.",
    "Break your own rules.",
    "Introduce randomness into order.",
    "Seek imbalance.",
    "Use a mistake as a new direction.",
    "Transform the smallest detail into the main idea.",
    "Switch speeds: slow down or speed up unnaturally.",
    "Embrace an idea that feels wrong.",
    "Repeat until repetition becomes innovation.",
    "Remove the main element and see what's left.",
    "Add constraints until it feels uncomfortable.",
    "Switch focus between details and the big picture.",
    "Start at the end and work your way backward.",
    "Ask someone to misunderstand your work on purpose.",
    "Borrow inspiration from an unlikely source.",
    "Imagine your work is already complete and react to it.",
    "Let two opposites coexist without resolving them.",
    "Treat success and failure as the same outcome.",
    "Find humor in something deadly serious.",
    "Deconstruct your most recent decision.",
    "Step away to let your work breathe.",
    "Allow discomfort to guide you forward.",
    "Ask yourself what you'd do if no one was watching.",
    "Consider your idea as a different art form.",
    "Choose the path that feels uncertain.",
    "Intentionally leave it unfinished.",
    "Turn your idea upside down, literally or metaphorically.",
    "Keep only what you can't explain.",
    "Collaborate with your least confident self.",
    "Make it worse before making it better.",
    "Act as if you're starting anew, regardless of progress.",
    "Embrace the shadows of your creation.",
    "Find beauty in imperfection.",
    "Collaborate with an unlikely partner.",
    "Restrict yourself to one color.",
    "Create using only found objects.",
    "Work in complete silence.",
    "Use your non-dominant hand.",
    "Create without editing.",
    "Incorporate a forgotten memory.",
    "Work blindfolded.",
    "Recreate a dream.",
    "Simplify, then simplify again.",
    "Use only recycled materials.",
    "Break a fundamental rule of your discipline.",
    "Repurpose a tool in an unconventional way.",
    "Use only negative space.",
    "Incorporate a historical event.",
    "Create without using your dominant sense.",
    "Make something for a non-human audience.",
    "Work at a different scale.",
    "Create something that changes over time.",
    "Design for an impossible space.",
    "Reverse your palette.",
    "Create in complete darkness.",
    "Incorporate a mathematical concept.",
    "Design for an extinct species.",
    "Use only one shape.",
    "Create something that can't be reproduced.",
    "Incorporate a current event.",
    "Use a child's toy in your process.",
    "Design for a fictional culture.",
    "Work in extreme temperature conditions.",
    "Use a random item from your trash.",
    "Create something edible.",
    "Use only sound.",
    "Create using only your feet.",
    "Create something that can only be experienced once.",
    "Incorporate a childhood game.",
    "Create something that interacts with the wind.",
    "Design for an imaginary sense.",
    "Use a tool from a different era.",
    "Incorporate a gesture.",
    "Work in a confined space.",
    "Design for a specific time of day.",
    "Create something that grows.",
    "Use only reflective surfaces.",
    "Incorporate a sound from your environment.",
    "Create something that changes with temperature.",
];

function getCardByTime() {
    const now = new Date();
    // Use the current day and minute to determine a card
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const hourOfDay = now.getHours();
    const minuteOfHour = now.getMinutes();
    const timeSeed = dayOfYear * 24 * 60 + hourOfDay * 60 + minuteOfHour;

    // Ensure the seed falls within the range of available cards
    const index = timeSeed % cards.length;
    return cards[index];
}

function displayCard() {
    const cardElement = document.getElementById('card');
    cardElement.textContent = getCardByTime();
}

// Function to create the animated dots
function createDots() {
    const numDots = 30; // Number of dots you want
    const dotsContainer = document.querySelector('.background-dots');
    for (let i = 0; i < numDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        // Random size between 2px and 12px
        const size = Math.random() * 10 + 2;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        // Random starting position
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        // Random animation duration between 30s and 60s
        const duration = Math.random() * 30 + 30;
        dot.style.animationDuration = `${duration}s`;
        // Random delay
        const delay = Math.random() * 20;
        dot.style.animationDelay = `${delay}s`;
        // Random opacity between 0.2 and 0.7
        const opacity = Math.random() * 0.5 + 0.2;
        dot.style.opacity = opacity;
        dotsContainer.appendChild(dot);
    }
}

// Initial display
displayCard();

// Create the dots
createDots();
