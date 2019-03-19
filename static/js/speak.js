const say = (text) => {
    var msg = new SpeechSynthesisUtterance(text);
    voices = speechSynthesis.getVoices();
    count = voices.length;
    // msg.voice = voices[3];
    speechSynthesis.speak(msg);
}