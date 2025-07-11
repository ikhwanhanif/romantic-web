document.addEventListener("DOMContentLoaded", () => {
  console.log("Love page loaded ❤️");

  // Fade in
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 2s";
  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 100);

  // Falling hearts
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.classList.add("falling-heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
  }

  // Typewriter effect
  const typewriterText = "This page is written just for you, Safa. 💗";
  let index = 0;

  function typeLetter() {
    if (index < typewriterText.length) {
      document.getElementById("typewriter-text").textContent += typewriterText.charAt(index);
      index++;
      setTimeout(typeLetter, 70);
    }
  }

  typeLetter();
});
