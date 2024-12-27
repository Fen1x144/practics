let isLoggedIn = false;

// Переключение между страницами

window.onload = function() {
    const userData = localStorage.getItem('name');
    if (userData) {
        isLoggedIn = true;
    } else {
        document.getElementById('login').style.display = 'block';
        document.getElementById('main').classList.remove('active');
    }
};

function showContainer(containerName) {
    if(!isLoggedIn && containerName !== 'login') {
        return;
    }

    const containers = document.querySelectorAll('.container');
    containers.forEach(container => container.classList.remove('active'));

    document.getElementById(containerName).classList.add('active')
}

// Регистрация

function register() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const gender = document.getElementById('gender').value;
    const errorElement = document.getElementById('reg-error');

    // Валидация имени
    const namePattern = /^[А-Яа-яЁё\s]+$/;
    if (!namePattern.test(name)) {
        errorElement.innerText = "Введите ваше имя русскими буквами."
        return;
    }

    if (name === "" || date === "" || gender === "" ) {
        errorElement.innerText = "Пожалуйста, заполните все поля.";
        return;
    }

    // Валидация даты рождения
    const dateDate = new Date(date);
    const minDate = new Date('1950-01-01');
    const maxDate = new Date('2024-12-28');

    if (dateDate < minDate || dateDate > maxDate) {
        errorElement.innerText = "Выберите дату в период с 01.01.1950 - 28.12.2024 года.";
        return;
    }

    if (name && date && gender) {
        localStorage.setItem('name', name);
        localStorage.setItem('date', date);
        localStorage.setItem('gender', gender);
        isLoggedIn = true; 
        document.getElementById('login').style.display = 'none';
        document.getElementById('main').classList.add('active')
        container[0].classList.add('active');
    }
}

// Словарь

    const dictionary = {
        "Световой меч": "Оружие джедаев и ситхов, состоящее из энергетического лезвия, способного прорезать почти любой материал.",
        "Татуин": "Пустынная планета, родина Люка Скайуокера, известная своими двумя солнцами.",
        "Империя": "Авторитарный режим, стремящийся к контролю над галактикой, противостоящий Альясну повстанцев.",
        "Альянс повстанцев": "Группа, борющаяся против Империи, стремящаяся восстановить демократию в галактике.",
        "Дроид": "Робот, выполняющий различные функции, от боевых до обслуживающих, часто обладающий уникальной личностью.",
        "Космический корабль": "Транспортное средство, используемое для путешествий между планетами и звездными системами.",
        "Галактика": "Обшироное пространство, населённое множеством планет, рас и существ, где разворачиваются события \"Звёздных Войн\".",
        "Мандалорец": "Представитель мандалорской культуры, известный своим кодексом чести и мастерством в боевых искусствах.",
        "Клон": "Генетически созданный солдат, используищейся в армии Галактической Республики, особенно во время Войн клонов.",
        "Сенат": "Законодательный орган Галактической Республики, представляющий интересы различных планет и систем.",
        "Тёмная сторона": "Аспект Силы, связанный с агрессией, ненавистью и жаждой власти, используемый ситхами.",
        "Светлая сторона": "Аспект Силы, связанный с миром, состроданием и самопожертвованием, используемый джедаями.",
    };

    function displayTerms(terms) {
        const termList = document.getElementById("termList");
        termList.innerHTML = ""; // очищаем список

        terms.forEach(term => {
            const termItem = document.createElement("div");
            termItem.textContent = term;
            termItem.className = "term-item";
            termItem.onclick = () => showDescription(term);
            termList.appendChild(termItem);
        });
    }

    // Функция для отображения описания термина
    function showDescription(term) {
        const termDescription = document.getElementById("termDescription");
        termDescription.textContent = dictionary[term];
        
        // Добавляем выделение выбранного элемента
        const items = document.querySelectorAll(".term-item");
        items.forEach(item => item.classList.remove("selected")); // Убираем выделение
        event.target.classList.add("selected"); // Выделяем текущий элемент
    }

    // Функция для фильтрации терминов
    function filterTerms() {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        const filteredTerms = Object.keys(dictionary).filter(term => 
            term.toLowerCase().includes(searchInput)
        );
        displayTerms(filteredTerms);
    }

    // Инициализация
    displayTerms(Object.keys(dictionary));

// Галерея

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const currentDisplay = document.getElementById('current');
const totalDisplay = document.getElementById('total');

totalDisplay.textContent = totalSlides;

document.querySelector('.next').addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlide();
    }
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlide();
    }
});

function updateSlide() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
    currentDisplay.textContent = currentSlide + 1; // Слайды с 1, не с 0
}

// Тест
    document.getElementById('proverka').addEventListener('click', validateQuiz);

    function validateQuiz() {
        const question = ["q1", "q2", "q3", "q4", "q5", "q6"]
    }

// Личный кабинет
    const prLogin = document.getElementById("pr-login")
    const prDate = document.getElementById("pr-birthday")
    const prGender = document.getElementById("pr-gender")
    const storedLogin = localStorage.getItem("name")
    const storedDate = localStorage.getItem("date")
    const storedGender = localStorage.getItem("gender")

    if (storedLogin) {
        prLogin.textContent = storedLogin;
        prDate.textContent = storedDate || "Не указано";
        prGender.textContent = storedGender === "male" ? "Мужской" : "Женский";
    }

    // Выход
    function exit(){
        localStorage.removeItem('name');
        localStorage.removeItem('date');
        localStorage.removeItem('gender');
        isLoggedIn= false;
        document.getElementById('login').style.display = 'block'
        document.getElementById('login').classList.remove('active')
        clearForm();
        showContainer('login')
    }

    function clearForm() {
        document.getElementById('name').value = '';
        document.getElementById('date').value = '';
        document.getElementById('gender').value = '';
        document.getElementById('reg-error').innerText = '';
    }