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
    strings: ['Campion', 'Maestru','Profesionist','Învingător'],
    typeSpeed: 60,
    backSpeed:60,
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
    
    addMessage("Tu", userMessage, "user");
    
    setTimeout(() => {
        let botResponse = getBotResponse(userMessage);
        addMessage("Asistent", botResponse, "bot");
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
    let responses = {
        "Buna ziua": "Salut! Cum te pot ajuta?",
        "salut": "Salut! Cum te pot ajuta?",
        "ce abonamente aveti?": "Oferim abonamente pentru antrenamente de grup și sesiuni individuale. Vrei mai multe detalii?",
        "care este programul?": "Suntem deschiși de luni până vineri între 08:00 și 22:00, iar în weekend între 10:00 și 18:00.",
        "cum ma inscriu?": "Poți veni direct la sală sau ne poți contacta pentru a programa un antrenament gratuit!",
        "ce echipament am nevoie pentru kickbox?": "Pentru kickbox ai nevoie de mănuși, tibiere, proteză dentară, bandaje pentru mâini și echipament sportiv confortabil.",
        "kickboxul este potrivit pentru incepatori?": "Da! Avem antrenamente special concepute pentru începători, unde vei învăța tehnicile de bază și îți vei îmbunătăți condiția fizică.",
        "care sunt beneficiile kickboxului?": "Kickboxul îmbunătățește rezistența, forța, flexibilitatea și coordonarea. De asemenea, ajută la reducerea stresului și dezvoltă disciplina."
    };
    
    return responses[input.toLowerCase()] || "Îmi pare rău, nu am înțeles. Poți reformula?";
}
