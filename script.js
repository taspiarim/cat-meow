const cat = document.getElementById("cat");
const message = document.getElementById("message");
const meowSound = document.getElementById("meowSound");

cat.addEventListener("mouseenter", function() {

    message.textContent = "MEOW! 🐱💕";

    meowSound.currentTime = 0;
    meowSound.play();

});

cat.addEventListener("mouseleave", function() {

    message.textContent = "Waiting for pets... 🐾";

});