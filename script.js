const pages = [
    {
        heading: "The First Meeting",
        date: "4th April 2024",
        message: "This was the day we first saw each other in person. A simple meeting, yet the start of something unforgettable. There wasn’t much conversation, but something clicked between us. 😊",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        stickers: ["💖", "🌸", "✨"]
    },
    {
        heading: "The First Conversation",
        date: "15th April 2024",
        message: "The day we spoke to each other for the first time. It might have been a casual chat about water balls on Snapchat, but it laid the foundation for everything that followed. 🗣️",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        stickers: ["⭐", "💕", "🌸"]
    },
    {
        heading: "First WhatsApp Chat",
        date: "17th April 2024",
        message: "Our first chat on WhatsApp about ED Sheets for my friend, but this was where we truly started knowing each other beyond just words. 💬",
        background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        stickers: ["✨", "💖", "⭐"]
    },
    {
        heading: "My Birthday & First Call Conversation",
        date: "24th April 2024",
        message: "This was a special day for me. She finally spoke to me on call for the first time and said HAPPY BIRTHDAY 🤗. That call was likely filled with excitement, curiosity, and maybe a bit of nervousness. 🎂📞",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        stickers: ["💖", "🌸", "✨"]
    },
    {
        heading: "First Voice Note",
        date: "17th May 2024",
        message: "A simple yet special moment – hearing each other’s voice through a voice note. It made our bond feel more real and personal. 🎤",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        stickers: ["⭐", "💕", "🌸"]
    },
    {
        heading: "Meeting as Friends",
        date: "18th May 2024",
        message: "This was the day we finally met again after a very long time, but this time, not just as strangers or acquaintances. We were friends now, and it felt different, more comfortable. 🤝",
        background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        stickers: ["✨", "💖", "⭐"]
    },
    {
        heading: "The Fake Confession",
        date: "29th May 2024",
        message: "A playful moment where I made a fake confession. Maybe it was just a joke, but it made us think about the real feelings developing between us. 😜",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        stickers: ["💖", "🌸", "✨"]
    },
    {
        heading: "The Real Confession",
        date: "12th June 2024",
        message: "The day I finally confessed my feelings. This wasn’t a joke anymore; this was real. A turning point in our journey together. ❤️",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        stickers: ["⭐", "💕", "🌸"]
    },
    {
        heading: "The First Hug",
        date: "14th June 2024",
        message: "That first embrace, a hug that meant so much more than words. It wasn’t just a physical gesture; it was the beginning of deeper emotions. 🤗",
        background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        stickers: ["✨", "💖", "⭐"]
    },
    {
        heading: "Holding Hands for the First Time",
        date: "19th June 2024",
        message: "A simple yet deeply meaningful moment. Holding hands for the first time, feeling the warmth and assurance of each other’s presence. 🤝",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        stickers: ["💖", "🌸", "✨"]
    },
    {
        heading: "Talking Again After Two Days",
        date: "11th July 2024",
        message: "Two days might not seem long, but after being so used to talking, even that gap felt like an eternity. This conversation felt like reconnecting after ages. 📞",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        stickers: ["⭐", "💕", "🌸"]
    },
    {
        heading: "Another Hug",
        date: "29th July 2024",
        message: "Maybe it was casual, maybe it was special, but every hug carried meaning between us. 🤗",
        background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        stickers: ["✨", "💖", "⭐"]
    },
    {
        heading: "Holding Hands Again",
        date: "9th August 2024",
        message: "Another beautiful moment of connection, where just holding hands spoke more than words ever could. 🤝",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        stickers: ["💖", "🌸", "✨"]
    },
    {
        heading: "Her Surprise Visit",
        date: "12th August 2024",
        message: "She surprised me by unexpectedly coming to college to help me prepare for an exam.. That moment of joy, the unexpected happiness—priceless. 😲",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        stickers: ["⭐", "💕", "🌸"]
    },
    {
        heading: "My Surprise Visit",
        date: "14th August 2024",
        message: "This time, it was my turn to surprise her. Maybe I saw her eyes light up in excitement when she saw me. 😲",
        background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        stickers: ["✨", "💖", "⭐"]
    },
    {
        heading: "Our First Movie Together",
        date: "16th August 2024",
        message: "The first time we went for a movie together with three more friends, sitting side by side, lost in the film named STREE 2 and each other’s presence. 🎬",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        stickers: ["💖", "🌸", "✨"]
    },
    {
        heading: "Second Hug",
        date: "17th August 2024",
        message: "A hug again, deeper in meaning than before. Every hug felt more meaningful as our bond grew stronger. 🤗",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        stickers: ["⭐", "💕", "🌸"]
    },
    {
        heading: "Another Hug",
        date: "23rd August 2024",
        message: "Moments like these were small but carried so much warmth and emotion. 🤗",
        background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        stickers: ["✨", "💖", "⭐"]
    },
    {
        heading: "A Long Hug",
        date: "24th August 2024",
        message: "Not just a quick embrace, but a long, warm hug that made us feel safe and connected. 🤗",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        stickers: ["💖", "🌸", "✨"]
    },
    {
        heading: "Meeting After 15 Days, A Hug",
        date: "9th September 2024",
        message: "After being apart for 15 days, seeing each other again and hugging tightly—relief, happiness, everything in one moment. 🤗",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        stickers: ["⭐", "💕", "🌸"]
    },
    {
        heading: "Another Hug",
        date: "10th September 2024",
        message: "Just another way of saying, 'I missed you.' 🤗",
        background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        stickers: ["✨", "💖", "⭐"]
    },
    {
        heading: "A Short Long Hug",
        date: "12th September 2024",
        message: "A hug that was meant to be short but lasted longer than expected—because letting go wasn’t easy. 🤗",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        stickers: ["💖", "🌸", "✨"]
    },
    {
        heading: "The Longest & Tightest Hug, First Kiss",
        date: "13th September 2024",
        message: "This was a special day. The longest and tightest hug, feeling every emotion flow between us, and then, she kissed me on my cheek, that was an unforgettable moment for me. 💏",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        stickers: ["⭐", "💕", "🌸"]
    },
    {
        heading: "Our Second Outing (Phoenix) & First Ride Together",
        date: "21st September 2024",
        message: "We went out together again, this time to Phoenix Mall. The excitement of exploring a place together and sharing our first ride—it was magical. 🚗",
        background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        stickers: ["✨", "💖", "⭐"]
    },
    {
        heading: "I Gave Her a Letter",
        date: "30th September 2024",
        message: "A heartfelt letter, something to hold onto forever, filled with words that meant the world. 💌",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        stickers: ["💖", "🌸", "✨"]
    },
    {
        heading: "I went to Her Home & We Had Our Moments",
        date: "5th October 2024",
        message: "I visited her home, and we spent time together, just the two of us, creating memories that would last. Her mother prepared delicious food for me. 🏡",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        stickers: ["⭐", "💕", "🌸"]
    },
    {
        heading: "Staying Awake Till 3:30 AM",
        date: "26th/27th October 2024",
        message: "We stayed up late, talking, cherishing every second before I left for my hometown. 🌙",
        background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        stickers: ["✨", "💖", "⭐"]
    },
    {
        heading: "Our Third Outing & Many Special Moments",
        date: "9th November 2024",
        message: "Another beautiful day spent outside together, full of laughter, love, and unforgettable moments. 🌞",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        stickers: ["💖", "🌸", "✨"]
    },
    {
        heading: "A 3 AM Visit",
        date: "10th November 2024",
        message: "I, along with two friends, came to her home at 3 AM, making it a night to remember. 🌃",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        stickers: ["⭐", "💕", "🌸"]
    },
    {
        heading: "Many Gifts, A Prank & Our First Lip Kiss",
        date: "11th November 2024",
        message: "I gave her so many gifts, played a prank that almost upset her, and then we shared our first lip kiss—one of the most unforgettable moments. 🎁💋",
        background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        stickers: ["✨", "💖", "⭐"]
    },
    {
        heading: "She Came My Place for the First Time & Our First OG Kiss",
        date: "21st November 2024",
        message: "After all the chaos, she finally visited my place, and we shared our first real, deep kiss. 💏",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        stickers: ["💖", "🌸", "✨"]
    },
    {
        heading: "She Came My Place Again",
        date: "8th December 2024",
        message: "Another visit, another day filled with love and time spent together. 🏡",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        stickers: ["⭐", "💕", "🌸"]
    },
    {
        heading: "I went to Her Sister’s Wedding",
        date: "10th December 2024",
        message: "Being at such an important family event with her made it even more special. 💒",
        background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        stickers: ["✨", "💖", "⭐"]
    },
    {
        heading: "Another Visit & More Moments",
        date: "21st December 2024",
        message: "Another visit to my place, where we had our time together, making more beautiful memories. 🏡",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        stickers: ["💖", "🌸", "✨"]
    },
    {
        heading: "A Prank That Made Her Cry, Then Comforting Her",
        date: "13th January 2025",
        message: "I played a prank that made her cry, but then I consoled her, showing my caring side. 😢🤗",
        background: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        stickers: ["⭐", "💕", "🌸"]
    },
    {
        heading: "Our Third Movie Together",
        date: "25th January 2025",
        message: "Another movie date, another moment spent enjoying each other’s company. 🎬",
        background: "linear-gradient(135deg, #84fab0, #8fd3f4)",
        stickers: ["✨", "💖", "⭐"]
    }
];

let currentPage = 0;
const startingPage = document.getElementById('starting-page');
const mainContent = document.getElementById('main-content');
const startBtn = document.getElementById('startBtn');
const headingElement = document.querySelector('.heading');
const dateElement = document.querySelector('.date-title'); // Updated selector
const messageElement = document.querySelector('.message');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const background = document.querySelector('.background');
const stickers = document.querySelectorAll('.sticker');

// Show main content when "Let's Begin" is clicked
startBtn.addEventListener('click', () => {
  startingPage.style.display = 'none';
  mainContent.style.display = 'block';
  updatePage();
});

function updatePage() {
  // Zoom-out effect for the current date
  dateElement.style.animation = 'zoomOut 0.5s ease-in-out';

  // Wait for the zoom-out animation to finish before updating the content
  setTimeout(() => {
    // Update content
    headingElement.textContent = pages[currentPage].heading;
    dateElement.textContent = pages[currentPage].date;
    dateElement.style.animation = 'zoomIn 1s ease-in-out'; // Zoom-in effect for the new date

    // Clear previous message
    messageElement.innerHTML = "";

    // Split message into words and add them one by one
    const words = pages[currentPage].message.split(" ");
    words.forEach((word, index) => {
      const wordSpan = document.createElement('span');
      wordSpan.textContent = word + " ";
      wordSpan.style.animationDelay = `${index * 0.2}s`; // Delay each word
      wordSpan.style.marginRight = '7px'; // Add space between words
      messageElement.appendChild(wordSpan);
    });

    // Update background
    background.style.background = pages[currentPage].background;

    // Update stickers
    stickers.forEach((sticker, index) => {
      sticker.textContent = pages[currentPage].stickers[index] || "";
      sticker.classList.toggle("visible", !!pages[currentPage].stickers[index]);
    });

    // Change heading color once per page
    headingElement.style.color = getRandomColor();
  }, 500); // Wait for 0.5s (duration of zoom-out animation)
}

function getRandomColor() {
  const colors = ['#ff6f61', '#ff3b2f', '#84fab0', '#a1c4fd', '#ffcc00', '#00ccff', '#cc00ff'];
  return colors[Math.floor(Math.random() * colors.length)];
}

let previousPage = currentPage;

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    previousPage = currentPage;
    currentPage--;
    if (previousPage !== currentPage) {
      updatePage();
    }
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    previousPage = currentPage;
    currentPage++;
    if (previousPage !== currentPage) {
      updatePage();
    }
  }
});