const numerologyMap = {
    'A': 1, 'I': 1, 'J': 1, 'Q': 1, 'Y': 1,
    'B': 2, 'K': 2, 'R': 2,
    'C': 3, 'G': 3, 'L': 3, 'S': 3,
    'D': 4, 'M': 4, 'T': 4,
    'E': 5, 'H': 5, 'N': 5, 'X': 5,
    'U': 6, 'V': 6, 'W': 6,
    'O': 7, 'Z': 7,
    'F': 8, 'P': 8
};

const interpretations = {
    1: "Leadership & New Beginnings. Ideal for startups!",
    2: "Partnerships & Harmony. Great for collaborative ventures.",
    3: "Creativity & Expression. Perfect for media/design.",
    4: "Stability & Structure. Fits finance or logistics.",
    5: "Change & Freedom. Suits travel/dynamic industries.",
    6: "Responsibility & Nurturing. Ideal for healthcare/education.",
    7: "Analysis & Spirituality. Aligns with tech/research.",
    8: "Wealth & Power. Best for finance/real estate.",
    9: "Humanity & Compassion. Great for nonprofits.",
    11: "Visionary Master Number. For innovative leaders.",
    22: "Master Builder Number. For large-scale projects.",
    33: "Master Teacher Number. For education/healing."
};

const strengths = {
    1: "Strong leadership, innovation, and independence.",
    2: "Collaboration, diplomacy, and adaptability.",
    3: "Creativity, communication, and enthusiasm.",
    4: "Reliability, organization, and practicality.",
    5: "Versatility, freedom, and adventure.",
    6: "Responsibility, nurturing, and community focus.",
    7: "Analytical thinking, intuition, and spirituality.",
    8: "Ambition, financial success, and authority.",
    9: "Humanitarianism, vision, and global impact.",
    11: "Inspiration, intuition, and visionary leadership.",
    22: "Mastery of large-scale projects and practical vision.",
    33: "Healing, teaching, and global transformation."
};

const weaknesses = {
    1: "Can be overly aggressive or self-centered.",
    2: "May struggle with indecision or dependency.",
    3: "Can be scattered or overly dramatic.",
    4: "May resist change or become rigid.",
    5: "Can be impulsive or restless.",
    6: "May take on too much responsibility.",
    7: "Can be overly analytical or isolated.",
    8: "May become materialistic or power-hungry.",
    9: "Can be overly idealistic or self-sacrificing.",
    11: "May struggle with stress or unrealistic expectations.",
    22: "Can become overwhelmed by large responsibilities.",
    33: "May feel burdened by the need to help others."
};

const opportunities = {
    1: "Pioneer new ideas and lead with confidence.",
    2: "Build strong partnerships and foster harmony.",
    3: "Express creativity and inspire others.",
    4: "Create stable systems and achieve long-term goals.",
    5: "Embrace change and explore new opportunities.",
    6: "Serve others and build a strong community.",
    7: "Develop expertise and trust your intuition.",
    8: "Achieve financial success and lead with authority.",
    9: "Make a global impact and inspire humanity.",
    11: "Lead with vision and inspire innovation.",
    22: "Build large-scale projects and leave a legacy.",
    33: "Teach, heal, and transform the world."
};

const luckyColors = {
    1: "Red, Gold",
    2: "Orange, White",
    3: "Yellow, Green",
    4: "Blue, Brown",
    5: "Silver, Gray",
    6: "Indigo, Pink",
    7: "Purple, Violet",
    8: "Black, Maroon",
    9: "Gold, White",
    11: "Silver, Blue",
    22: "Gold, Green",
    33: "White, Gold"
};

const luckyDates = {
    1: "1st, 10th, 19th, 28th",
    2: "2nd, 11th, 20th, 29th",
    3: "3rd, 12th, 21st, 30th",
    4: "4th, 13th, 22nd, 31st",
    5: "5th, 14th, 23rd",
    6: "6th, 15th, 24th",
    7: "7th, 16th, 25th",
    8: "8th, 17th, 26th",
    9: "9th, 18th, 27th",
    11: "11th, 22nd",
    22: "22nd",
    33: "33rd"
};

const famousBrands = {
    1: "Google, Tesla, Microsoft",
    2: "Slack, Airbnb, WhatsApp",
    3: "Disney, Netflix, Coca-Cola",
    4: "IBM, Ford, Walmart",
    5: "Uber, FedEx, eBay",
    6: "UNICEF, Zoom, Pfizer",
    7: "Apple, Intel, SpaceX",
    8: "JPMorgan, Shell, Goldman Sachs",
    9: "Amazon, UNICEF, Patagonia",
    11: "Tesla, SpaceX, Whole Foods",
    22: "NASA, Boeing, SpaceX",
    33: "UNESCO, Doctors Without Borders"
};

const idealPartners = {
    1: "Numbers 3, 5, and 7 for innovation and creativity.",
    2: "Numbers 4, 6, and 8 for stability and collaboration.",
    3: "Numbers 1, 5, and 9 for inspiration and growth.",
    4: "Numbers 2, 6, and 8 for teamwork and success.",
    5: "Numbers 1, 3, and 7 for adventure and change.",
    6: "Numbers 2, 4, and 8 for nurturing and stability.",
    7: "Numbers 1, 5, and 9 for intuition and wisdom.",
    8: "Numbers 2, 4, and 6 for financial success and balance.",
    9: "Numbers 3, 6, and 11 for humanitarian impact.",
    11: "Numbers 1, 7, and 22 for visionary leadership.",
    22: "Numbers 4, 8, and 33 for large-scale projects.",
    33: "Numbers 6, 9, and 22 for global transformation."
};



function calculateNumerology() {
    const name = document.getElementById('businessName').value.toUpperCase().replace(/[^A-Z]/g, '');
    let total = 0;

    // Calculate total using Chaldean values
    for (let char of name) {
        total += numerologyMap[char] || 0; // Use 0 for unmapped characters
    }

    // Reduce to destiny number
    let sumBeforeReduction = total;
    let finalNumber = total;
    while (finalNumber > 9 && ![11, 22, 33].includes(finalNumber)) {
        finalNumber = String(finalNumber).split('').reduce((acc, d) => acc + parseInt(d), 0);
    }

    const resultDiv = document.getElementById('result');
    if (name.length === 0) {
        alert("Please enter a valid business name!");
        return;
    }

    // Update UI
    resultDiv.style.display = 'block';
    document.getElementById('totalSum').textContent = sumBeforeReduction;
    document.getElementById('destinyNumber').textContent = finalNumber;
    document.getElementById('finalNumberDisplay').textContent = finalNumber;
    document.getElementById('businessNameResult').textContent = `Business Name: ${name}`;
    document.getElementById('interpretationText').innerHTML = `<strong>Key Traits:</strong> ${interpretations[finalNumber] || "Universal alignment."}`;
    document.getElementById('strengths').innerHTML = `<strong>Strengths:</strong> ${strengths[finalNumber]}`;
    document.getElementById('weaknesses').innerHTML = `<strong>Weaknesses:</strong> ${weaknesses[finalNumber]}`;
    document.getElementById('opportunities').innerHTML = `<strong>Opportunities:</strong> ${opportunities[finalNumber]}`;
    document.getElementById('luckyColors').innerHTML = `<strong>Lucky Colors:</strong> ${luckyColors[finalNumber]}`;
    document.getElementById('luckyDates').innerHTML = `<strong>Lucky Dates:</strong> ${luckyDates[finalNumber]}`;
    document.getElementById('famousBrands').innerHTML = `<strong>Famous Brands:</strong> ${famousBrands[finalNumber]}`;
    document.getElementById('idealPartners').innerHTML = `<strong>Ideal Partners:</strong> ${idealPartners[finalNumber]}`;
}