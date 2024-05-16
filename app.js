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
    } else if (message.includes('best time to visit Nuwara Eliya')) {
        speech.text = "The best time to visit Nuwara Eliya is from April to June and from December to February when the weather is cool and dry, making it perfect for exploring the tea estates and enjoying outdoor activities.";
    } else if (message.includes('top attractions in Nuwara Eliya')) {
        speech.text = "Some of the top attractions in Nuwara Eliya include Horton Plains National Park, Pedro Tea Estate, Gregory Lake, Victoria Park, and St. Clair's Falls.";
    } else if (message.includes('how to get to Nuwara Eliya from Colombo')) {
        speech.text = "You can get to Nuwara Eliya from Colombo by taking a train, bus, or hiring a private vehicle. The train journey is scenic and offers breathtaking views of the countryside.";
    } else if (message.includes('climate in Nuwara Eliya')) {
        speech.text = "Nuwara Eliya has a cool climate throughout the year due to its elevation. Daytime temperatures usually range between 15°C to 20°C, while nights can get chilly, especially during the winter months.";
    } 
    else if (message.includes('accommodation options in Nuwara Eliya')) {
        speech.text = "Nuwara Eliya offers a range of accommodation options including luxury hotels, boutique guesthouses, and budget-friendly homestays. Some popular choices include Grand Hotel, Jetwing St. Andrew's, and The Blackpool Hotel.";
    } else if (message.includes('tea plantations to visit in Nuwara Eliya')) {
        speech.text = "There are several tea plantations worth visiting in Nuwara Eliya, such as Mackwoods Labookellie Tea Centre, Blue Field Tea Gardens, Pedro Tea Estate, and Damro Tea Factory.";
    } else if (message.includes('local cuisine in Nuwara Eliya')) {
        speech.text = "Nuwara Eliya offers a variety of local cuisine influenced by its multicultural heritage. Don't miss trying traditional Sri Lankan dishes like hoppers, kottu roti, and fresh seafood.";
    } else if (message.includes('annual events in Nuwara Eliya')) {
        speech.text = "Nuwara Eliya hosts several annual events and festivals, including the Nuwara Eliya Season, which features horse racing, flower shows, and cultural performances, usually held during the month of April.";
    } else if (message.includes('bird watching spots in Nuwara Eliya')) {
        speech.text = "Nuwara Eliya is a paradise for bird watchers, with several excellent spots for birdwatching including Victoria Park, Horton Plains National Park, and Galway's Land Bird Sanctuary.";
    } else if (message.includes('family-friendly activities in Nuwara Eliya')) {
        speech.text = "There are plenty of family-friendly activities to enjoy in Nuwara Eliya, such as boating on Gregory Lake, horse riding at Strawberry Fields, visiting the Hakgala Botanical Garden, and exploring the Pidurutalagala Forest Reserve.";
    } else if (message.includes('historic sites in Nuwara Eliya')) {
        speech.text = "Nuwara Eliya has several historic sites and landmarks worth exploring, including the Queen Victoria Park, built to commemorate Queen Victoria's Diamond Jubilee, and the Nuwara Eliya Post Office, which is one of the oldest post offices in Sri Lanka.";
    } else if (message.includes('adventure sports in Nuwara Eliya')) {
        speech.text = "Adventure enthusiasts can indulge in activities like hiking, trekking, mountain biking, and zip-lining in Nuwara Eliya, with scenic trails and breathtaking views of the surrounding mountains.";
    } else if (message.includes('shopping in Nuwara Eliya')) {
        speech.text = "Nuwara Eliya offers unique shopping experiences with markets selling fresh produce, handmade crafts, and souvenirs. Visit the Nuwara Eliya Market or the Hillwood Strawberry Farm for fresh strawberries and strawberry-related products.";
    } else if (message.includes('nightlife in Nuwara Eliya')) {
        speech.text = "Nuwara Eliya has a vibrant nightlife scene with bars, clubs, and pubs offering live music, karaoke nights, and delicious cocktails. Some popular nightlife spots include the Hill Club, The Pub, and the Lounge Bar at the Grand Hotel.";
    }
    else if (message.includes('cultural experiences in Nuwara Eliya')) {
        speech.text = "Immerse yourself in the rich cultural heritage of Nuwara Eliya by visiting places like the Ambewela Farm, where you can experience traditional dairy farming, or by attending cultural performances and festivals.";
    } else if (message.includes('nature walks in Nuwara Eliya')) {
        speech.text = "Explore the natural beauty of Nuwara Eliya with scenic nature walks and hikes. Popular trails include the Lover's Leap Waterfall trail, the Moon Plains trek, and the Horton Plains Nature Trail.";
    } else if (message.includes('photography spots in Nuwara Eliya')) {
        speech.text = "Capture stunning landscapes and scenic vistas in Nuwara Eliya at photography spots like the Hakgala Botanical Garden, the Gregory Lake Park, and the viewpoints along the Pidurutalagala Mountain.";
    } else if (message.includes('spas and wellness centers in Nuwara Eliya')) {
        speech.text = "Relax and rejuvenate at spas and wellness centers in Nuwara Eliya, offering a range of treatments including Ayurvedic massages, herbal baths, and yoga sessions amidst tranquil surroundings.";
    } else if (message.includes('horse riding in Nuwara Eliya')) {
        speech.text = "Experience the thrill of horse riding in Nuwara Eliya with guided horseback tours through lush green valleys, tea estates, and scenic countryside.";
    } else if (message.includes('religious sites in Nuwara Eliya')) {
        speech.text = "Explore the religious diversity of Nuwara Eliya by visiting sacred sites like the Sri Bhakta Hanuman Temple, the Holy Trinity Church, and the Seetha Amman Temple, believed to be associated with the Ramayana.";
    } else if (message.includes('local festivals in Nuwara Eliya')) {
        speech.text = "Experience the vibrant culture of Nuwara Eliya by participating in local festivals like the Thai Pongal festival, the Wesak festival, and the Tamil New Year celebrations, which showcase the traditions and customs of the region.";
    } else if (message.includes('bicycle tours in Nuwara Eliya')) {
        speech.text = "Explore Nuwara Eliya at your own pace with bicycle tours, offering scenic rides through tea plantations, forests, and picturesque villages, with options for guided tours and bike rentals.";
    } else if (message.includes('botanical gardens in Nuwara Eliya')) {
        speech.text = "Discover the beauty of Nuwara Eliya's botanical gardens, such as the Hakgala Botanical Garden and the Victoria Park, home to a diverse range of plant species, colorful flower beds, and tranquil walking paths.";
    } else if (message.includes('local wildlife in Nuwara Eliya')) {
        speech.text = "Encounter diverse wildlife in Nuwara Eliya's natural habitats, with opportunities to spot species like sambar deer, wild boar, barking deer, and a variety of bird species in Horton Plains National Park and other protected areas.";
    }
    
    
     else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speech.text = `I found some information for "${message}" on Google.`;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}