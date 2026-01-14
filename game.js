const catcher = document.getElementById('catcher');
const scoreEl = document.getElementById('score');
let score = 0;

// Move catcher with mouse
document.addEventListener('mousemove', (e) => {
  let x = e.clientX;
  catcher.style.left = x - 40 + 'px'; // center it
});

// Create hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.animationDuration = (Math.random() * 2 + 2) + 's';

  document.getElementById('gameContainer').appendChild(heart);

  // Check for collision
  const fallDuration = parseFloat(heart.style.animationDuration) * 1000;
  const fallInterval = setInterval(() => {
    const heartRect = heart.getBoundingClientRect();
    const catcherRect = catcher.getBoundingClientRect();

    if (
      heartRect.bottom >= catcherRect.top &&
      heartRect.left < catcherRect.right &&
      heartRect.right > catcherRect.left
    ) {
      score++;
      scoreEl.textContent = 'Score: ' + score;
      heart.remove();
      clearInterval(fallInterval);
    }

    if (heartRect.top > window.innerHeight) {
      heart.remove();
      clearInterval(fallInterval);
    }
  }, 50);
}

// Generate hearts continuously
setInterval(createHeart, 800);
