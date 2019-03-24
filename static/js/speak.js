const speechBubble = new Object();

speechBubble.joke = "No joke"

speechBubble.fetch_joke = async function () {
    var response = await fetch('/joke');
    speechBubble.joke = await response.text();
};

speechBubble.update = async function () {
    var elem = document.getElementById("joke");
    await speechBubble.fetch_joke()
    if (speechBubble.joke) {
        elem.textContent = speechBubble.joke
    } else {
        elem.textContent = "No joke"
    }
};

speechBubble.say = function (text) {
    text = text || speechBubble.joke;
    var msg = new SpeechSynthesisUtterance(text, lang="en");
    // voices = speechSynthesis.getVoices();
    // count = voices.length;
    // msg.voice = voices[count - 1];
    speechSynthesis.speak(msg);
};

