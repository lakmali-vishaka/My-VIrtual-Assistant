const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if (hr >= 0 && hr < 12) {
        speak("Good morning madam");
    } else if (hr == 12) {
        speak("Good noon madam");
    } else if (hr > 12 && hr <= 18) {
        speak("Good afternoon madam");
    } else {
        speak("Good evening madam");
    }
}

window.addEventListener('load', () => {
    speak("Activating Vishaa");
    speak("Going online");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    recognition.start();
});

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I did not understand what you said, please try again.";

    if (message.includes('hey') || message.includes('hello')) {
        speech.text = "Hello madam";
    } else if (message.includes('how are you')) {
        speech.text = "I am fine madam, tell me how can I help you.";
    } else if (message.includes('name')) {
        speech.text = "My name is Vishaa.";
    } else if (message.includes('open google')) {
        window.open(`https://www.google.com/`, "_blank");
        speech.text = "Opening Google.";
    } else if (message.includes('time')) {
        const time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' });
        speech.text = `The current time is ${time}`;
    } else if (message.includes('date')) {
        const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        speech.text = `Today's date is ${date}`;
    } else if (message.includes('fashion trends')) {
        speech.text = "Some current fashion trends include oversized blazers, statement sleeves, and chunky sneakers.";
    } else if (message.includes('body shape')) {
        speech.text = "To determine your body shape, measure your bust, waist, and hips, then compare the ratios to common body shapes like pear, apple, or hourglass.";
    } else if (message.includes('wardrobe staples')) {
        speech.text = "Essential wardrobe staples include a classic white shirt, well-fitting jeans, a little black dress, versatile blazers, and comfortable flats.";
    } else if (message.includes('dress appropriately')) {
        speech.text = "Dressing appropriately for different occasions involves understanding the dress code and selecting outfits that suit the event's tone and setting.";
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speech.text = `I found some information for "${message}" on Google.`;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
