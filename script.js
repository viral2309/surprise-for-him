// ===============================
// SCREEN ELEMENTS
// ===============================

const screens = [
    document.getElementById("screen1"),
    document.getElementById("screen2"),
    document.getElementById("screen3"),
    document.getElementById("screen4"),
    document.getElementById("screen5"),
    document.getElementById("screen6"),
    document.getElementById("screen7")
];


// ===============================
// SHOW SCREEN
// ===============================

function showScreen(number) {

    screens.forEach(function(screen) {
        screen.classList.add("hidden");
    });

    screens[number - 1].classList.remove("hidden");
}


// ===============================
// MUSIC
// ===============================

const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

backgroundMusic.volume = 0.4;


// ===============================
// OPEN ME → SCREEN 2 + MUSIC
// ===============================

document.getElementById("openButton").onclick = function() {

    showScreen(2);

    backgroundMusic.play()
        .then(function() {

            musicButton.textContent = "🔊 Music ON";

        })
        .catch(function(error) {

            console.log("Music error:", error);

        });

};


// ===============================
// MUSIC ON / OFF
// ===============================

musicButton.onclick = function() {

    if (backgroundMusic.paused) {

        backgroundMusic.play()
            .then(function() {

                musicButton.textContent = "🔊 Music ON";

            })
            .catch(function(error) {

                console.log("Music error:", error);

            });

    } else {

        backgroundMusic.pause();

        musicButton.textContent = "🔇 Music OFF";

    }

};


// ===============================
// SCREEN 2 → SCREEN 3
// ===============================

document.getElementById("promiseButton").onclick = function() {

    showScreen(3);

};


// ===============================
// SCREEN 3 → SCREEN 4
// ===============================

document.getElementById("nextMemory").onclick = function() {

    showScreen(4);

};


// ===============================
// SCREEN 4 → SCREEN 5
// ===============================

document.getElementById("messageButton").onclick = function() {

    showScreen(5);

};


// ===============================
// SCREEN 5 → SCREEN 6
// ===============================

document.getElementById("reasonsButton").onclick = function() {

    showScreen(6);

};


// ===============================
// REASON CARDS
// ===============================

function showReason(card) {

    card.classList.toggle("flipped");

}


// ===============================
// SCREEN 6 → SCREEN 7
// ===============================

document.getElementById("finalButton").onclick = function() {

    showScreen(7);

    startTyping();

};


// ===============================
// TYPING EFFECT
// ===============================

const typingText = document.getElementById("typingText");
const finalMessage = document.getElementById("finalMessage");

const textToType =
    "Maybe I don't say it enough... but having you in my life means more to me than I can explain. ❤️";

let index = 0;


function startTyping() {

    typingText.textContent = "";

    finalMessage.classList.add("hidden");

    index = 0;

    typeText();

}


function typeText() {

    if (index < textToType.length) {

        typingText.textContent += textToType[index];

        index++;

        setTimeout(typeText, 50);

    } else {

        setTimeout(function() {

            finalMessage.classList.remove("hidden");

        }, 800);

    }

}

