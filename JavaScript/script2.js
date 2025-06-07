let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Champion', 'Master', 'Professional', 'Winner'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
});

document.querySelectorAll('.join-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('formContainer').style.display = 'block';
    });
});

document.getElementById('closeForm').addEventListener('click', function() {
    document.getElementById('formContainer').style.display = 'none';
});

document.getElementById("chatbot-toggle").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "flex";
});
document.getElementById("close-chat").addEventListener("click", function() {
    document.getElementById("chatbot-container").style.display = "none";
});
document.getElementById("chatbot-send").addEventListener("click", sendMessage);
document.getElementById("chatbot-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let inputField = document.getElementById("chatbot-input");
    let userMessage = inputField.value.trim();
    if (!userMessage) return;
    
    addMessage("You", userMessage, "user");
    
    setTimeout(() => {
        let botResponse = getBotResponse(userMessage);
        addMessage("Assistant", botResponse, "bot");
    }, 500);
    
    inputField.value = "";
}

function addMessage(sender, message, className) {
    let chatbox = document.getElementById("chatbot-messages");
    let messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input) {
    const responses = {
        "hello": "Hi! How can I help you?",
        "hi": "Hello! What would you like to know?",
        "good afternoon": "Good afternoon! How can I assist you?",
        "good evening": "Good evening! Looking for info about training or subscriptions?",
        "where is the gym": "Our gym is located in Ialoveni, in an easy-to-reach area. You're welcome anytime!",
        "what is the gym address": "You’ll find us in Ialoveni. Need directions? Let us know!",
        "where are you located": "We’re in Ialoveni. Message us if you want the exact location!",
        "how to get to the gym": "We’re in Ialoveni – accessible by car or public transport. Want a map?",
        "how can I get a subscription": "You can get a subscription at the gym or online by filling out the registration form.",
        "where to buy a subscription": "Subscriptions are available at the gym or online via reservation.",
        "can I buy the subscription online": "Yes! Message us or fill out the form on the website and we’ll contact you for confirmation.",
        "what subscriptions do you have?": "We offer monthly plans, personal training packages, and options for kids and teens. Want exact prices?",
        "how much does a subscription cost?": "Prices start at 500 MDL/month for group sessions. Want more detailed info?",
        "what types of training do you offer?": "Kickboxing, fitness, self-defense, personal sessions, kids training, and competitions.",
        "where exactly are you?": "You’ll find us in Ialoveni. See the 'Contact' section for the map and details.",
        "how to get to the gym?": "We're near the center of Ialoveni, with easy access from main roads.",
        "what is the schedule?": "Monday–Friday 08:00–22:00, Saturday–Sunday 10:00–18:00.",
        "can I make a reservation?": "Yes! Message us or complete the online form.",
        "can I come without a reservation?": "Yes, but we recommend booking in advance for personal training.",
        "do you have available spots?": "Usually yes, but contact us to confirm availability.",
        "who are the coaches?": "Our coaches are professionals with experience in kickboxing, fitness, and martial arts.",
        "do you have female trainers?": "Yes, we have female coaches for women’s or kids' sessions.",
        "do I need experience?": "No, you can start from scratch. We welcome beginners of all ages.",
        "are the coaches certified?": "Absolutely! All our coaches are accredited and experienced in real competitions.",
        "do you have lockers?": "Yes, we have clean lockers with showers.",
        "can I leave my things safely?": "Of course, we have secure lockers for personal items.",
        "does the gym have showers?": "Yes, showers are available in both men's and women’s changing rooms.",
        "is it safe to train there?": "Yes! We follow all hygiene and safety regulations.",
        "if I have health issues, can I train?": "We recommend checking with a doctor, but we have adapted options for all levels.",
        "are the coaches vaccinated?": "Yes, all our coaches follow health safety regulations.",
        "is kickboxing dangerous?": "No, it’s safe under supervision. We focus on control, technique, and gradual progress.",
        "can I learn self-defense?": "Definitely! We offer special self-defense classes, including for women.",
        "how long until I see results?": "Depends on frequency, but you’ll feel a difference in 4–6 weeks.",
        "how long is a session?": "Between 60 and 90 minutes, depending on the type of training.",
        "from what age can kids join?": "We accept children from age 6 and up, with tailored programs.",
        "do you have classes for kids?": "Yes, we have special groups for kids and teens.",
        "are there classes for girls?": "Yes! We offer both mixed and girls-only classes.",
        "do you organize events?": "Yes! We host internal competitions, demonstrations, and sports camps.",
        "can I compete?": "Yes, after some training you can test your skills!",
        "can I come with a friend?": "Of course! You can even get a discount if you bring a friend.",
        "do you accept card payments?": "Yes, we accept both cash and cards.",
        "do you offer discounts?": "Yes! For students, families, and advance payments.",
        "can I try a free session?": "Yes, we offer a free first session for all new members!",
        "what are the benefits of kickboxing?": "Kickboxing builds strength, coordination, self-confidence, and reduces stress.",
        "do you have a Facebook page?": "Yes, find us on Facebook at 'Lion Gym Ialoveni'.",
        "do you have Instagram?": "Of course! Follow us on Instagram for gym photos and videos.",
        "can I pause for a month?": "Sure, we can freeze your subscription upon request.",
        "do you have a women’s section?": "Training is mixed, but we have special time slots for women.",
        "how often do I need to train to see results?": "With regular training, you'll notice results in 4–8 weeks.",
        "": "Please type a question.",
    };

    return responses[input.toLowerCase()] || "Sorry, I didn't understand. Can you rephrase the question?";
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('joinForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (firstName && lastName && email && phone) {
            alert('All fields are completed! Form submitted successfully.');
            window.location.href = "./index2.html";
        } else {
            alert('Please complete all fields!');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('All fields are completed! Form submitted successfully.');
            window.location.href = "./index2.html";
        } else {
            alert('Please complete all fields!');
        }
    });
});


document.querySelectorAll('.service-video').forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});

document.querySelectorAll('.about-video').forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });
    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.getElementById("goalsFormContainer");
    const recommendationsDiv = document.getElementById("recommendations");
  
    document.getElementById("goalsBtn").addEventListener("click", () => {
      formContainer.style.display = "block";
    });
  
    document.getElementById("closeGoalsForm").addEventListener("click", () => {
      formContainer.style.display = "none";
    });
  
    function calculateBMR(weight, height, age, gender) {
      return gender === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    document.getElementById("goalsForm").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const weight = parseFloat(document.getElementById("weight").value);
      const age = parseInt(document.getElementById("age").value);
      const height = parseFloat(document.getElementById("height").value);
      const gender = document.getElementById("gender").value;
      const activity = parseFloat(document.getElementById("activity").value);
      const goal = document.getElementById("goal").value;
  
      const bmr = calculateBMR(weight, height, age, gender);
      let calories = bmr * activity;
  
      let recommendation = "";
  
      if (goal === "deficit") {
        calories -= 400;
        recommendation = `
          <strong>Recommendations for Fat Loss:</strong><br>
          - Create a daily caloric deficit (~400 kcal/day)<br>
          - 3–5 workouts per week (cardio + strength)<br>
          - Avoid processed foods and sugar<br>
          - Eat plenty of vegetables and lean proteins<br>
          - Stay well hydrated<br><br>
          <strong>Estimated Caloric Need:</strong> ${Math.round(calories)} kcal/day
        `;
      } else if (goal === "mentinere") {
        recommendation = `
          <strong>Recommendations for Weight Maintenance:</strong><br>
          - Consume calories in balance with daily needs<br>
          - Regular physical activity (2–4 times/week)<br>
          - Maintain a balanced diet: proteins, carbs, fats<br><br>
          <strong>Estimated Caloric Need:</strong> ${Math.round(calories)} kcal/day
        `;
      } else if (goal === "surplus") {
        calories += 400;
        recommendation = `
          <strong>Recommendations for Muscle Gain:</strong><br>
          - Create a daily caloric surplus (~400 kcal/day)<br>
          - Eat quality proteins (eggs, meat, yogurt)<br>
          - 4–6 strength workouts per week<br>
          - Get enough sleep and manage stress<br><br>
          <strong>Estimated Caloric Need:</strong> ${Math.round(calories)} kcal/day
        `;
      } else {
        recommendation = "Please select a valid goal.";
      }
  
      recommendationsDiv.innerHTML = recommendation;
    });
  });
  