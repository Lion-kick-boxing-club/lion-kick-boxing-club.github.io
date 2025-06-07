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
    strings: ['Чемпион', 'Владелец','Профессиональный','Победитель'],
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
        "salut": "Привет! Чем могу помочь?",
        "buna": "Здравствуйте! Чем могу помочь?",
        "bună ziua": "Добрый день! Чем могу помочь?",
        "buna seara": "Добрый вечер! Хотите узнать о тренировках или абонементах?",
        "hello": "Здравствуйте! Вы можете спросить меня о тренировках, расписании и ценах.",
        "unde se afla sala": "Наш зал находится в Яловенах, в удобном месте. Ждём вас!",
        "care este adresa salii": "Нас можно найти в Яловенах. Напишите нам, если нужны указания!",
        "unde sunteți localizați": "Мы находимся в Яловенах. Напишите нам, и мы отправим точную локацию!",
        "cum ajung la sala": "Мы в Яловенах – можно добраться на машине или общественным транспортом. Нужна карта?",
        "cum pot procura un abonament": "Абонемент можно приобрести напрямую в зале или онлайн, заполнив форму регистрации.",
        "unde pot cumpara un abonament": "Абонементы можно приобрести в зале или зарезервировать онлайн.",
        "pot cumpara abonamentul online": "Да! Напишите нам или заполните форму на сайте, и мы свяжемся с вами.",
        "ce abonamente aveti?": "У нас есть месячные абонементы, персональные тренировки, занятия для детей и подростков. Хотите узнать цены?",
        "cat costa abonamentul?": "Цены начинаются от 500 леев в месяц за групповые тренировки. Нужны точные детали?",
        "ce tipuri de antrenamente oferiti?": "Кикбоксинг, фитнес, самооборона, персональные тренировки, детские и соревновательные программы.",
        "unde sunteti situati?": "Нас можно найти в Яловенах. Смотрите раздел 'Контакты' для карты и деталей.",
        "cum pot ajunge la sala?": "Мы находимся рядом с центром Яловен, удобный доступ с главных маршрутов.",
        "care este programul?": "Пн-Пт: 08:00–22:00, Сб-Вс: 10:00–18:00.",
        "pot face o rezervare?": "Да! Напишите нам или заполните форму онлайн.",
        "pot veni fara programare?": "Да, но для персональных тренировок рекомендуется предварительная запись.",
        "aveti locuri disponibile?": "Обычно да, но лучше уточнить по наличию, написав нам.",
        "cine sunt antrenorii?": "Наши тренеры – профессионалы с опытом в кикбоксинге, фитнесе и боевых искусствах.",
        "aveti antrenoare femei?": "Да, у нас есть тренерши для женщин и детей.",
        "trebuie sa am experienta?": "Нет, можно начинать с нуля. Принимаем новичков всех возрастов.",
        "antrenorii sunt certificati?": "Конечно! Все тренеры сертифицированы и имеют реальный соревновательный опыт.",
        "aveti vestiare?": "Да, есть чистые раздевалки с душевыми.",
        "pot lasa lucrurile in siguranta?": "Да, есть шкафчики для хранения личных вещей.",
        "sala are dusuri?": "Да, душевые доступны в раздевалках для женщин и мужчин.",
        "e sigur sa vin la antrenament?": "Да! Соблюдаем все нормы гигиены и безопасности.",
        "daca am probleme de sanatate, pot participa?": "Рекомендуем проконсультироваться с врачом, но у нас есть адаптированные программы.",
        "sunt vaccinati antrenorii?": "Да, все тренеры соблюдают санитарные нормы.",
        "este kickboxul periculos?": "Нет, под контролем тренера это безопасно. Мы делаем упор на технику и прогресс.",
        "pot invata autoaparare?": "Конечно! У нас есть курсы самообороны, в том числе для женщин.",
        "cat dureaza pana vad rezultate?": "Зависит от частоты тренировок, но через 4–6 недель почувствуете результат.",
        "cat dureaza o sesiune?": "От 60 до 90 минут, в зависимости от вида тренировки.",
        "de la ce varsta pot veni copiii?": "Мы принимаем детей с 6 лет. Есть адаптированные программы.",
        "aveti cursuri pentru copii?": "Да, есть специальные группы для детей и подростков.",
        "sunt cursuri pentru fete?": "Да! Есть смешанные группы и занятия только для девушек.",
        "organizati evenimente?": "Да! Проводим внутренние соревнования, показательные выступления и спортивные лагеря.",
        "pot participa la competitii?": "Конечно, после подготовки можно попробовать свои силы!",
        "pot veni cu un prieten?": "Да! Приведи друга — получи скидку.",
        "acceptati plata cu cardul?": "Да, принимаем оплату наличными и по карте.",
        "aveti reduceri?": "Да! Есть скидки для студентов, семей и при оплате заранее.",
        "pot incerca gratuit?": "Да, для новых участников первая тренировка бесплатна!",
        "ce beneficii are kickboxul?": "Кикбокс развивает силу, координацию, уверенность в себе и снижает стресс.",
        "aveti pagina de facebook?": "Да, найдите нас на Facebook: 'Lion Gym Ialoveni'.",
        "aveti instagram?": "Конечно! Подписывайтесь на нас в Instagram — там фото и видео из зала.",
        "pot sa fac pauza o luna?": "Конечно, можем приостановить абонемент по запросу.",
        "aveti sala pentru femei?": "Тренировки проходят в смешанных группах, но есть и часы только для девушек/женщин.",
        "cat timp trebuie sa vin ca sa vad rezultate?": "С регулярными тренировками увидите изменения через 4–8 недель.",
        "": "Пожалуйста, задайте вопрос.",
        "привет": "Привет! Чем могу помочь?",
        "здравствуйте": "Здравствуйте! Чем могу помочь?",
        "добрый день": "Добрый день! Чем могу помочь?",
        "добрый вечер": "Добрый вечер! Хотите узнать о тренировках или абонементах?",
        "hello": "Здравствуйте! Вы можете спросить меня о тренировках, расписании и ценах.",
        "где находится зал": "Наш зал находится в Яловенах, в удобном месте. Ждём вас!",
        "какой адрес у зала": "Нас можно найти в Яловенах. Напишите нам, если нужны указания!",
        "где вы находитесь": "Мы находимся в Яловенах. Напишите нам, и мы отправим точную локацию!",
        "как добраться до зала": "Мы в Яловенах – можно добраться на машине или общественным транспортом. Нужна карта?",
        "как я могу купить абонемент": "Абонемент можно приобрести напрямую в зале или онлайн, заполнив форму регистрации.",
        "где можно купить абонемент": "Абонементы можно приобрести в зале или зарезервировать онлайн.",
        "могу ли я купить абонемент онлайн": "Да! Напишите нам или заполните форму на сайте, и мы свяжемся с вами.",
        "какие абонементы у вас есть": "У нас есть месячные абонементы, персональные тренировки, занятия для детей и подростков. Хотите узнать цены?",
        "сколько стоит абонемент": "Цены начинаются от 500 леев в месяц за групповые тренировки. Нужны точные детали?",
        "какие тренировки вы предлагаете": "Кикбоксинг, фитнес, самооборона, персональные тренировки, детские и соревновательные программы.",
        "где вы расположены": "Нас можно найти в Яловенах. Смотрите раздел 'Контакты' для карты и деталей.",
        "как добраться до вас": "Мы находимся рядом с центром Яловен, удобный доступ с главных маршрутов.",
        "какое расписание": "Пн-Пт: 08:00–22:00, Сб-Вс: 10:00–18:00.",
        "могу ли я записаться": "Да! Напишите нам или заполните форму онлайн.",
        "могу ли я прийти без записи": "Да, но для персональных тренировок рекомендуется предварительная запись.",
        "есть ли у вас свободные места": "Обычно да, но лучше уточнить по наличию, написав нам.",
        "кто ваши тренеры": "Наши тренеры – профессионалы с опытом в кикбоксинге, фитнесе и боевых искусствах.",
        "у вас есть женщины-тренеры": "Да, у нас есть тренерши для женщин и детей.",
        "нужен ли опыт": "Нет, можно начинать с нуля. Принимаем новичков всех возрастов.",
        "тренеры сертифицированы": "Конечно! Все тренеры сертифицированы и имеют реальный соревновательный опыт.",
        "у вас есть раздевалки": "Да, есть чистые раздевалки с душевыми.",
        "могу ли я оставить вещи в безопасности": "Да, есть шкафчики для хранения личных вещей.",
        "у вас есть душевые": "Да, душевые доступны в раздевалках для женщин и мужчин.",
        "безопасно ли приходить на тренировку": "Да! Соблюдаем все нормы гигиены и безопасности.",
        "если у меня проблемы со здоровьем, могу ли я тренироваться": "Рекомендуем проконсультироваться с врачом, но у нас есть адаптированные программы.",
        "тренеры вакцинированы": "Да, все тренеры соблюдают санитарные нормы.",
        "кикбокс опасен": "Нет, под контролем тренера это безопасно. Мы делаем упор на технику и прогресс.",
        "можно ли научиться самообороне": "Конечно! У нас есть курсы самообороны, в том числе для женщин.",
        "через сколько будет результат": "Зависит от частоты тренировок, но через 4–6 недель почувствуете результат.",
        "сколько длится тренировка": "От 60 до 90 минут, в зависимости от вида тренировки.",
        "с какого возраста принимаете детей": "Мы принимаем детей с 6 лет. Есть адаптированные программы.",
        "есть ли у вас курсы для детей": "Да, есть специальные группы для детей и подростков.",
        "есть ли курсы для девушек": "Да! Есть смешанные группы и занятия только для девушек.",
        "вы проводите мероприятия": "Да! Проводим внутренние соревнования, показательные выступления и спортивные лагеря.",
        "можно ли участвовать в соревнованиях": "Конечно, после подготовки можно попробовать свои силы!",
        "можно прийти с другом": "Да! Приведи друга — получи скидку.",
        "можно оплатить картой": "Да, принимаем оплату наличными и по карте.",
        "у вас есть скидки": "Да! Есть скидки для студентов, семей и при оплате заранее.",
        "можно попробовать бесплатно": "Да, для новых участников первая тренировка бесплатна!",
        "какая польза от кикбокса": "Кикбокс развивает силу, координацию, уверенность в себе и снижает стресс.",
        "у вас есть фейсбук": "Да, найдите нас на Facebook: 'Lion Gym Ialoveni'.",
        "у вас есть инстаграм": "Конечно! Подписывайтесь на нас в Instagram — там фото и видео из зала.",
        "можно сделать паузу на месяц": "Конечно, можем приостановить абонемент по запросу.",
        "у вас зал только для женщин": "Тренировки проходят в смешанных группах, но есть и часы только для девушек/женщин.",
        "когда будут видны результаты": "С регулярными тренировками увидите изменения через 4–8 недель.",
        "": "Пожалуйста, введите вопрос.",
        

    };

    return responses[input.toLowerCase()] || "Извините, я не понял. Можете переформулировать вопрос?";
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
            alert('Все поля заполнены! Форма отправлена.');
            window.location.href = "./index.html";
        } else {
            alert('Пожалуйста, заполните все поля!');
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
            alert('Все поля заполнены! Форма отправлена.');
            window.location.href = "./index.html";
        } else {
            alert('Пожалуйста, заполните все поля!');
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
          <strong>Рекомендации для снижения веса:</strong><br>
          - Создайте ежедневный дефицит калорий (~400 ккал/день)<br>
          - 3–5 тренировок в неделю (кардио + силовые)<br>
          - Избегайте обработанных продуктов и сахара<br>
          - Употребляйте больше овощей и нежирного белка<br>
          - Поддерживайте достаточный уровень гидратации<br><br>
          <strong>Оценочная потребность в калориях:</strong> ${Math.round(calories)} ккал/день
        `;
      } else if (goal === "mentinere") {
        recommendation = `
          <strong>Рекомендации для поддержания веса:</strong><br>
          - Потребляйте калории в соответствии с дневными потребностями<br>
          - Регулярная физическая активность (2–4 раза в неделю)<br>
          - Сбалансированное питание: белки, углеводы, жиры<br><br>
          <strong>Оценочная потребность в калориях:</strong> ${Math.round(calories)} ккал/день
        `;
      } else if (goal === "surplus") {
        calories += 400;
        recommendation = `
          <strong>Рекомендации для набора мышечной массы:</strong><br>
          - Создайте ежедневный профицит калорий (~400 ккал/день)<br>
          - Употребляйте качественные белки (яйца, мясо, йогурт)<br>
          - 4–6 силовых тренировок в неделю<br>
          - Достаточно спите и избегайте стресса<br><br>
          <strong>Оценочная потребность в калориях:</strong> ${Math.round(calories)} ккал/день
        `;
      } else {
        recommendation = "Пожалуйста, выберите корректную цель.";
      }
  
      recommendationsDiv.innerHTML = recommendation;
    });
  });
  