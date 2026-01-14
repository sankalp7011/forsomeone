
    const messages = [
  "Hi, cutie! 🦊",
  "Boop my nose! 😚",
  "You’re my favorite human!",
  "Guess what? I adore you!",
  "Psst... you’re lovely! 💕",
  "I’ve been waiting for you!",
  "You look extra cute today!",
  "Cats stick together! 🧡",
  "Love attack incoming! 💘",
  "You're my cozy corner.",
  "Snuggles? Always. 🛏️",
  "Catch me if you can!",
  "Got any snacks?",
  "Just a lil Cat missin’ you!",
  "Stay close, okay?",
  "You're my safe den.",
  "Tail wags for you! 🐾",
  "Let’s cause some mischief!",
  "I’d steal a sock for you!",
  "Peekaboo! 🫣",
  "Can I sit on your lap?",
  "Every day’s better with you!",
  "Cuddles unlocked! 🧸",
  "I saved this moment for you.",
  "Look at me, I’m adorable! 😌",
  "Wanna build a pillow fort?",
  "Heart = stolen by you 💝",
  "You make this den feel like home.",
  "Tag! You’re it! 🏃‍♀️💨"
];
if (!localStorage.getItem("fox")) {
    localStorage.setItem("fox", "disabled");
  }
// Show message after page loads, and hide it after 5 seconds
window.onload = function() {
  const messageContainer = document.getElementById("message-container");
  setTimeout(() => {
    messageContainer.style.display = "none"; // Hide the message after 5 seconds
  }, 2000);
};

// Function to make the fox speak
function foxSpeak() {
    if (localStorage.getItem("fox") === "enabled") {
  // Get a random message from the array
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  // Show the speech bubble
  const speechBubble = document.getElementById("fox-speech-bubble");
  
  const messageElement = document.getElementById("fox-message");

  // Set the fox's message and make the speech bubble visible
  messageElement.textContent = randomMessage;
  
  speechBubble.style.display = "block";

  // Start the tail wagging animation when the fox speaks
  const foxAvatar = document.getElementById("fox-avatar");
  foxAvatar.style.animation = "tailWag 1s infinite";

  // Start the ear twitch animation when the fox speaks
  foxAvatar.style.animation = "earTwitch 2s ease-in-out infinite";

  // Hide the speech bubble after 3 seconds
  setTimeout(() => {
    speechBubble.style.display = "none";
    foxAvatar.style.animation = ""; // Stop the animations after speech
  }, 4000);
}
}
function showSleepMessage() {
  const message = document.createElement('div');
  message.id = "fox-sleep-message";
  message.textContent = "Zzzzz...";
  document.getElementById("fox-avatar-container").appendChild(message);
}

function removeSleepMessage() {
  const message = document.getElementById("fox-sleep-message");
  if (message) message.remove();
}


// Add an event listener to make the fox "speak" when clicked
const foxAvatar = document.getElementById("fox-avatar");
foxAvatar.addEventListener("click", function() {
    foxSpeak();
  
});

window.onload = function() {
  const clickMessage = document.getElementById("click-message");
  setTimeout(() => {
    clickMessage.style.display = "none";
  }, 2000);
};

function startBlinking() {
  const fox = document.getElementById("fox-avatar");

  function blink() {
    fox.classList.add("blinking");
    setTimeout(() => fox.classList.remove("blinking"), 300);
    const nextBlink = Math.random() * 4000 + 6000; // 5–8 seconds
    setTimeout(blink, nextBlink);
  }

  blink();
}

startBlinking();

const fox = document.getElementById("fox-avatar");
const speechBubble = document.getElementById("fox-message");
let inactivityTimer;

const moodMessages = {
  happy: "Yay! I'm happy you're happy!",
  sad: "Aww, come cuddle. I'm here for you.",
  "in-love": "Aww, you're in love? So am I! 💕"
};

document.querySelectorAll("#mood-selector button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const mood = btn.getAttribute("data-mood");
    speechBubble.textContent = moodMessages[mood];
    showBubble();
  });
});

function showBubble() {
  speechBubble.parentElement.style.display = "block";
  setTimeout(() => {
    speechBubble.parentElement.style.display = "none";
  }, 3000);
}

// Fox sleeps after 10s of inactivity
function sleepFox() {
  fox.src = "fox-sleep23.png"; // change to sleeping fox image
  showSleepMessage();
  document.querySelectorAll("#mood-selector button").forEach(btn =>btn.style.display = 'none');
}


function resetInactivity() {
  if (localStorage.getItem("fox") === "enabled") {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(sleepFox, 40000);
  }
}

["click", "mousemove", "keydown"].forEach((evt) =>
  document.addEventListener(evt, resetInactivity)
);

// Wake fox on click
fox.addEventListener("click", () => {
  if (fox.src.includes("fox-sleep23.png")) {
    fox.src = "foxbot.webp";
    speechBubble.textContent = "Whew! That nap was good 🦊💤";
    removeSleepMessage();
    document.querySelectorAll("#mood-selector button").forEach(btn =>btn.style.display = 'inline-block');
    showBubble();
    resetInactivity();
  }
});

resetInactivity();


const gifts = [
  { emoji: "💖", message: "Sankalp's Heart for ya" },
  { emoji: "🌸", message: "Sankalp gave u a flower..." },
  { emoji: "🧁", message: "A CUPCAKE!" },
  { emoji: "🧸", message: "A tiny teddy to hug!" },
  { emoji: "🍫", message: "Chocolate therapy from Sankalp!" },
  { emoji: "📸", message: "A snapshot of our cutest memory!" },
  { emoji: "🐾", message: "Fox paw of friendship!" },
  { emoji: "🫶", message: "Love, handcrafted just for you!" },
  { emoji: "🍓", message: "Strawberry kisses!" },
  { emoji: "🎈", message: "A balloon to lift your mood!" },
  { emoji: "📖", message: "A story about you & me 💫" },
  { emoji: "🪶", message: "A magical feather from a fox" },
  { emoji: "🍯", message: "A pot of sweetness (you!)" },
  { emoji: "💌", message: "A secret love letter 💌" },
  { emoji: "🫖", message: "Some cozy tea time, just us!" },
  { emoji: "🔮", message: "A foxy fortune just for you!" },
{ emoji: "🎀", message: "Tied a ribbon ‘round my love for you!" }
];


function dropGift() {
  const { emoji, message } = gifts[Math.floor(Math.random() * gifts.length)];
  const giftEl = document.createElement("div");
  giftEl.className = "gift";
  giftEl.style.left = `${fox.offsetLeft + 60}px`;
  giftEl.innerHTML = `${emoji} <span style="font-size: 0.8rem;">${message}</span>`;
  document.getElementById("gift-container").appendChild(giftEl);

  setTimeout(() => {
    giftEl.remove();
  }, 5000);
}

setInterval(() => {
  if (!fox.src.includes("sleep") && localStorage.getItem("fox") == "enabled") {
  dropGift();
}
}, Math.random() * 1500 + 2000);

if (localStorage.getItem("theme") === "light") {
  document.querySelectorAll(".scrapbook-page").forEach(page => {
    page.style.backgroundColor = "#FF474D";
  });
  // Apply styles to body
  document.body.style.backgroundColor = "#ffffff";
  document.body.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/lined-paper.png")';

  // Apply styles to header
  const header = document.querySelector("header");
  if (header) {
    header.style.backgroundColor = "#157595";
    
    header.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/gray-floral.png")';
    header.style.backgroundRepeat = "repeat";
    header.style.color = "#D3D3D3";

    header.style.boxShadow = "0 4px 6px rgba(255, 255, 255, 0.1)";
    header.style.borderBottom = "5px dashed #ff0000";
  }

  // Apply styles to scrapbook-page
  const scrapbookPage = document.querySelector(".scrapbook-page");
  if (scrapbookPage) {
    scrapbookPage.style.minWidth = "100%";
    scrapbookPage.style.height = "80%";
    scrapbookPage.style.backgroundColor = "#FF474D";
  }
}

let lastScrollTop = 0;
let hopTimeout;

window.addEventListener("scroll", () => {
  // Add hop class
  fox.classList.add("fox-hop");

  // Remove it after animation completes
  clearTimeout(hopTimeout);
  hopTimeout = setTimeout(() => {
    fox.classList.remove("fox-hop");
  }, 500);
});
    let currentPage = 0;
    const scrapbook = document.getElementById('scrapbook');
    const pages = document.querySelectorAll('.scrapbook-page');
  
    function nextPage() {
      if (currentPage < pages.length - 1) {
        currentPage++;
        scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;

        
        if(currentPage === 10) {
          const prevButton = document.querySelector('button.prev-button[onclick="prevPage()"]');
const nextButton = document.querySelector('button.next-button[onclick="nextPage()"]');

if (prevButton) prevButton.style.display = 'none';
if (nextButton) nextButton.style.display = 'none';
         
          
        }
        if(currentPage === 11) {
          const prevButton = document.querySelector('button.prev-button[onclick="prevPage()"]');
const nextButton = document.querySelector('button.next-button[onclick="nextPage()"]');

if (prevButton) prevButton.style.display = 'none';
if (nextButton) nextButton.style.display = 'none';
         
          
        }
        /*if(currentPage === 5) {
          document.querySelectorAll('.prev-button, .next-button').forEach(btn => btn.style.display = 'none');
         
          
        }*/

        
        
        /*if(currentPage === 7){
          document.querySelectorAll('.prev-button, .next-button').forEach(btn => btn.style.display = 'none');
        }*/
        /*if(currentPage === 4){
          const prevButton = document.querySelector('button.prev-button[onclick="prevPage()"]');
const nextButton = document.querySelector('button.next-button[onclick="nextPage()"]');

if (prevButton) prevButton.style.display = 'none';
if (nextButton) nextButton.style.display = 'none';
        }*/
       /* if(currentPage === 5) {
          startQuiz();
          const prevButton = document.querySelector('button.prev-button[onclick="prevPage()"]');
const nextButton = document.querySelector('button.next-button[onclick="nextPage()"]');

if (prevButton) prevButton.style.display = 'none';
if (nextButton) nextButton.style.display = 'none';

        }  */
    }
    }
  
    function prevPage() {
      if (currentPage > 0) {
        currentPage--;
        scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;
      }
    }


function showPage(pageNumber) {
  const scrapbook = document.getElementById("scrapbook");
  const totalPages = scrapbook.children.length;

  // Set the current page index
  currentPage = pageNumber;

  // Slide the scrapbook
  scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;

  // Show/hide navigation buttons


  // Add more per-page logic here if needed
}

  // Check for dev page index to jump to
  const devPage = localStorage.getItem("devPage");

  if (devPage) {
    // Go to that page
    showPage(parseInt(devPage));
    // Clear the flag so it doesn't redirect again
    localStorage.removeItem("devPage");
  }


  

    var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
   
  }
}



function showSuccessAlert(message) {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert success';

  alertDiv.innerHTML = `
    <span class="closebtn">&times;</span>
    <strong>Success!</strong> ${message}
  `;

  document.body.appendChild(alertDiv);

  // Manual close button
  alertDiv.querySelector('.closebtn').onclick = function () {
    alertDiv.style.opacity = '0';
    setTimeout(() => alertDiv.remove(), 500); // Smooth remove
  };

  // Auto fade and remove after 2.5 seconds
  setTimeout(() => {
    alertDiv.style.opacity = '0';
    setTimeout(() => alertDiv.remove(), 500);
  }, 2000);
}

if (localStorage.getItem("fox") === "enabled") {
  // Initialize fox features
  
}
if (localStorage.getItem("fox") !== "enabled") {
  document.querySelectorAll("#mood-selector button").forEach(btn =>btn.style.display = 'none');
fox.src = "";
showBubble();
fox.src = ""; // or use a transparent image like 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='
  fox.style.display = "none"; // Optional: Hide the element entirely

}


  
/*window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('gameCompleted') === 'yes') {
    //currentPage = 10;
    //scrapbook.style.transform = `translateX(-${currentPage * 200}%)`;
    localStorage.removeItem('gameCompleted'); // Optional: clear flag
  }
});
*/
const quizQuestions = [
  {
    question: "What is my favorite color?",
    options: ["Red", "Blue", "Black"],
    correct: 0, // Blue
  },
  {
    question: "Which animal do I like the most?",
    options: ["Cat", "Fox", "Dog"],
    correct: 0, // Cat
  },
  {
    question: "Which of these do I find the most relaxing?",
    options: ["Doing a Hobby", "A cold bath", "Watching a movie"],
    correct: 1, // A cold bath
  },
  {
    question: "What is my favorite season of the year?",
    options: ["Monsoon", "Summer", "Winter"],
    correct: 2, // Winter
  },
  {
    question: "What’s my guilty pleasure TV show?",
    options: ["Dexter", "Breaking Bad ", "Class"],
    correct: 2, // Class
  },
  {
    question: "If I could go back and give my younger self one piece of advice, what would it be?",
    options: ["Take care of your mental health and well-being", "Time flies—enjoy every moment!", "Don’t be afraid to take risks"],
    correct: 0, // Take care of your mental health and well-being
  },
  {
    question: "What do I want people to remember about me?",
    options: ["That I gained their trust", "That I was always there for them, no matter what", "That I made a positive impact, however small"],
    correct: 1, // That I was always there for them, no matter what
  },
  {
    question: "What do I want to change about my life right now?",
    options: ["Focus more on my career and professional goals", "Take more time for self-care and reflection", "Build stronger connections with friends and family"],
    correct: 2, // Build stronger connections with friends and family
  },
  {
    question: "What does love mean to me, and how do I express it?",
    options: ["Love is about sharing experiences and creating memories together", "Love is about showing care and being there for each other", "Love is about understanding and accepting each other’s flaws"],
    correct: 1, // Love is about showing care and being there for each other
  },
  {
    question: "Am I Gay?",
    options: ["", ""],
    correct: 4, // Remains the same
  },
  {
    question: "Am I a weirdo?",
    options: ["No[Yes]", "No"],
    correct: 1, // No
  },
];

  let currentQuizIndex = 0;
  let quizScore = 0;
  let quizTimer;
  let quizTimeLeft = 15;

  function startQuiz() {
  document.getElementById("quizPage").style.display = "flex";
  document.getElementById("quizSummaryPage").style.display = "none";
  currentQuizIndex = 0;
  quizScore = 0;
  showQuizQuestion();
}

function showQuizQuestion() {
  const q = quizQuestions[currentQuizIndex];
  document.getElementById("questionBox").innerHTML = `<h3>${q.question}</h3>`;

  // Check if the question requires an input field
  if (q.input) {
    document.getElementById("optionsBox").innerHTML = `<input type="text" id="answer-input" placeholder="Type your answer...">`;
  } else {
    // Display multiple-choice options
    const optionsHTML = q.options.map((opt, idx) => 
      `<button class="optionBtn" onclick="checkAnswer(${idx})">${opt}</button>`
    ).join("");
    document.getElementById("optionsBox").innerHTML = optionsHTML;
  }

  quizTimeLeft = 15;
  document.getElementById("time").innerText = quizTimeLeft;
  clearInterval(quizTimer);
  quizTimer = setInterval(updateQuizTimer, 1000);
}


  function smoothRefresh() {
  const message = document.createElement('div');
  message.id = 'refresh-message';
  message.textContent = 'Refreshing...';
  document.body.appendChild(message);


  setTimeout(() => {
    location.reload();
  }, 1200); // wait 1.5 seconds before reloading
}

  function gosetting() {
  setTimeout(() => {
    location.href = "settings.html"
  }, 1200); // wait 1.5 seconds before reloading
}


  function updateQuizTimer() {
    quizTimeLeft--;
    document.getElementById("time").innerText = quizTimeLeft;
    if (quizTimeLeft === 0) {
      clearInterval(quizTimer);
      nextQuizQuestion();
    }
  }

  function checkAnswer(selected) {
    clearInterval(quizTimer);
    const q = quizQuestions[currentQuizIndex];
    const buttons = document.querySelectorAll(".optionBtn");

    buttons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correct) {
        btn.style.backgroundColor = "green";
      }
      if (idx === selected && selected !== q.correct) {
        btn.style.backgroundColor = "black";
      }
    });

    if (selected === q.correct) {
      quizScore++;
      confettiEffect();
    }

    setTimeout(nextQuizQuestion, 1500);
  }

  function nextQuizQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length) {
      showQuizQuestion();
    } else {
      showQuizSummary();
    }
  }

  function showQuizSummary() {
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("quizSummaryPage").style.display = "flex";
    document.getElementById("quizResult").innerText = `You got ${quizScore} out of ${quizQuestions.length} correct!`;
    document.querySelectorAll('.next-button').forEach(btn => btn.style.display = 'inline-block');
    fetch('http://localhost:3000/save-quiz-result', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Quiz Game',
    score: quizScore,
    total: quizQuestions.length
  })
})
.then(res => res.text())
.then(data => console.log(data))
.catch(err => console.error(err));



  }

  function confettiEffect() {
    const confetti = document.createElement("div");
    confetti.innerText = "🎉";
    confetti.style.position = "fixed";
    confetti.style.top = "50%";
    confetti.style.left = "50%";
    confetti.style.fontSize = "5rem";
    confetti.style.transform = "translate(-50%, -50%)";
    confetti.style.zIndex = 9999;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1000);
  }
  


window.onload = () => {
  const completed = localStorage.getItem('gameCompleted');
  if (completed === 'true') {
    showSuccessAlert('You can continue playing the game by clicking on "Go To Game" or else Click on next to visit more..');

    currentPage++;
    scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;
    currentPage++;
    scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;
    currentPage++; 
    scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;
    currentPage++; 
    scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;
    currentPage++; 
    scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;
    currentPage++; 
    scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;
    currentPage++; 
    scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;
    currentPage++; 
    scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;
    currentPage++; 
    scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;
    currentPage++; 
    scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;
  


scrapbook.style.transform = `translateX(-${currentPage * 100}%)`;
document.querySelectorAll('.prev-button, .next-button').forEach(btn => btn.style.display = 'inline-block');

    // Optional: reset the flag
    localStorage.removeItem('gameCompleted');
  }
};
//test
//https://www.codewithfaraz.com/article/128/collection-of-100-html-and-css-mini-projects-for-beginners-with-source-code#97-pagination
//https://www.codewithfaraz.com/article/128/collection-of-100-html-and-css-mini-projects-for-beginners-with-source-code#51-list
//https://www.codewithfaraz.com/article/128/collection-of-100-html-and-css-mini-projects-for-beginners-with-source-code#21-neon-button
//https://www.codewithfaraz.com/article/128/collection-of-100-html-and-css-mini-projects-for-beginners-with-source-code#17-to-do-list

