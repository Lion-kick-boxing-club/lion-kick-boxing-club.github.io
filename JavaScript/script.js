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
    const responses = {
        "salut": "Salut! Cu ce te pot ajuta?",
        "buna": "Bună! Spune-mi cu ce te pot ajuta.",
        "bună ziua": "Bună ziua! Cum te pot ajuta?",
        "buna seara": "Bună seara! Vrei informații despre antrenamente sau abonamente?",
        "hello": "Hi! You can ask me about training, schedules, and prices.",
        "unde se afla sala": "Sala noastră este situată în Ialoveni, într-o zonă ușor accesibilă. Te așteptăm!",
"care este adresa salii": "Ne găsești în Ialoveni. Dacă ai nevoie de indicații, scrie-ne!",
"unde sunteți localizați": "Suntem în Ialoveni. Scrie-ne dacă vrei să-ți trimitem locația exactă!",
"cum ajung la sala": "Ne afli în Ialoveni – poți ajunge cu mașina sau transport public. Vrei o hartă?",
        "cum pot procura un abonament": "Poți procura un abonament direct la sală sau online, completând formularul de înscriere.",
"unde pot cumpara un abonament": "Abonamentele pot fi achiziționate direct la sală sau online, prin rezervare.",
"pot cumpara abonamentul online": "Da! Scrie-ne sau completează formularul de pe site și te vom contacta pentru confirmare.",
        "ce abonamente aveti?": "Avem abonamente lunare, pachete pentru sesiuni personale, pentru copii și adolescenți. Vrei prețuri exacte?",
        "cat costa abonamentul?": "Prețurile încep de la 500 MDL/lună pentru antrenamente de grup. Îți pot da detalii mai specifice?",
        "ce tipuri de antrenamente oferiti?": "Kickbox, fitness, autoapărare, antrenamente personale, sesiuni pentru copii și competiții.",
        "unde sunteti situati?": "Ne găsești în Ialoveni. Vezi secțiunea 'Contact' pentru hartă și detalii.",
        "cum pot ajunge la sala?": "Suntem în apropierea centrului din Ialoveni, cu acces ușor de pe traseele principale.",
        "care este programul?": "Luni-Vineri 08:00–22:00, Sâmbătă-Duminică 10:00–18:00.",
        "pot face o rezervare?": "Da! Scrie-ne sau completează formularul online.",
        "pot veni fara programare?": "Da, dar recomandăm o programare în prealabil pentru antrenamentele personale.",
        "aveti locuri disponibile?": "În general da, dar te sfătuim să ne contactezi pentru a verifica disponibilitatea.",
        "cine sunt antrenorii?": "Antrenorii noștri sunt profesioniști cu experiență în kickbox, fitness și arte marțiale.",
        "aveti antrenoare femei?": "Da, avem și antrenoare pentru sesiuni feminine sau copii.",
        "trebuie sa am experienta?": "Nu, poți începe de la zero. Acceptăm începători de toate vârstele.",
        "antrenorii sunt certificati?": "Absolut! Toți antrenorii noștri sunt acreditați și cu experiență reală în competiții.",
        "aveti vestiare?": "Da, avem vestiare curate și dotate cu dușuri.",
        "pot lasa lucrurile in siguranta?": "Desigur, avem dulapuri securizate pentru obiectele personale.",
        "sala are dusuri?": "Da, dușuri disponibile în vestiarele pentru femei și bărbați.",
        "e sigur sa vin la antrenament?": "Da! Respectăm toate normele de igienă și siguranță.",
        "daca am probleme de sanatate, pot participa?": "Îți recomandăm să consulți un medic înainte, dar avem opțiuni adaptate pentru fiecare nivel.",
        "sunt vaccinati antrenorii?": "Da, toți antrenorii respectă normele sanitare.",
        "este kickboxul periculos?": "Nu, sub supraveghere este sigur. Ne concentrăm pe control, tehnică și progres gradual.",
        "pot invata autoaparare?": "Sigur! Avem cursuri speciale pentru autoapărare, inclusiv pentru femei.",
        "cat dureaza pana vad rezultate?": "Depinde de frecvență, dar în 4-6 săptămâni vei simți diferența.",
        "cat dureaza o sesiune?": "Între 60 și 90 de minute, în funcție de tipul antrenamentului.",
        "de la ce varsta pot veni copiii?": "Îi acceptăm de la 6 ani în sus, cu programe adaptate.",
        "aveti cursuri pentru copii?": "Da, avem grupe speciale pentru copii și adolescenți.",
        "sunt cursuri pentru fete?": "Da! Avem clase mixte și unele doar pentru fete.",
        "organizati evenimente?": "Da! Organizăm competiții interne, demonstrații și tabere sportive.",
        "pot participa la competitii?": "Sigur, după o perioadă de antrenament îți poți testa abilitățile!",
        "pot veni cu un prieten?": "Desigur! Poți chiar primi o reducere dacă aduci un prieten.",
        "acceptati plata cu cardul?": "Da, acceptăm și numerar și card.",
        "aveti reduceri?": "Da! Pentru studenți, familii și plăți în avans.",
        "pot incerca gratuit?": "Da, oferim o primă ședință gratuită pentru toți noii membri!",
        "ce beneficii are kickboxul?": "Kickboxul dezvoltă forță, coordonare, încredere în sine și reduce stresul.",
        "aveti pagina de facebook?": "Da, ne găsești pe Facebook cu numele 'Lion Gym Ialoveni'.",
        "aveti instagram?": "Sigur! Urmărește-ne pe Instagram pentru poze și video din sală.",
        "pot sa fac pauza o luna?": "Desigur, putem suspenda abonamentul la cerere.",
        "aveti sala pentru femei?": "Antrenamentele sunt mixte, dar avem și ore rezervate pentru fete/femei.",
        "cat timp trebuie sa vin ca sa vad rezultate?": "Cu antrenamente constante, vei vedea schimbări în 4-8 săptămâni.",
        "": "Te rog să scrii o întrebare.",
    };

    return responses[input.toLowerCase()] || "Îmi pare rău, nu am înțeles. Poți reformula întrebarea?";
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
            alert('Toate câmpurile sunt completate! Formularul a fost trimis.');
            window.location.href = "./index.html";
        } else {
            alert('Te rugăm să completezi toate câmpurile!');
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
            alert('Toate câmpurile sunt completate! Formularul a fost trimis.');
            window.location.href = "./index.html";
        } else {
            alert('Te rugăm să completezi toate câmpurile!');
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
        <strong>Recomandări pentru reducerea masei corporale:</strong><br>
        - Creează un deficit caloric (~400 kcal/zi)<br>
        - 3-5 antrenamente/săptămână (cardio + forță)<br>
        - Evită alimentele procesate și zahărul<br>
        - Consumă multe legume și proteine slabe<br>
        - Hidratează-te constant<br><br>
        <strong>Necesar caloric estimativ:</strong> ${Math.round(calories)} kcal/zi
      `;
    } else if (goal === "mentinere") {
      recommendation = `
        <strong>Recomandări pentru menținerea greutății:</strong><br>
        - Consumă calorii în echilibru cu consumul zilnic<br>
        - Activitate fizică regulată (2-4 ori/săptămână)<br>
        - Menține o dietă echilibrată: proteine, carbohidrați, grăsimi<br><br>
        <strong>Necesar caloric estimativ:</strong> ${Math.round(calories)} kcal/zi
      `;
    } else if (goal === "surplus") {
      calories += 400;
      recommendation = `
        <strong>Recomandări pentru creșterea masei musculare:</strong><br>
        - Creează un surplus caloric (~400 kcal/zi)<br>
        - Consumă proteine de calitate (ouă, carne, iaurt)<br>
        - 4-6 antrenamente de forță/săptămână<br>
        - Dormi suficient și evită stresul<br><br>
        <strong>Necesar caloric estimativ:</strong> ${Math.round(calories)} kcal/zi
      `;
    } else {
      recommendation = "Te rugăm să alegi un obiectiv valid.";
    }

    recommendationsDiv.innerHTML = recommendation;
  });
});

