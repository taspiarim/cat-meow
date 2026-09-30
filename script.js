const cat = document.getElementById("cat");
const message = document.getElementById("message");
const meowSound = document.getElementById("meowSound");

function meow() {
    message.textContent = "MEOW! 🐱💕";

    meowSound.currentTime = 0;
    meowSound.play();
}

cat.addEventListener("mouseenter", meow);

cat.addEventListener("click", meow);

cat.addEventListener("mouseleave", function() {
    message.textContent = "Waiting for pets... 🐾";
});
