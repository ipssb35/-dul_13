const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Левичев",
            "id_2": "Трифанов",
            "id_3": "Жмуров",
            "id_4": "Щукин",
            "id_5": "Линин",
            "id_6": "Меньшиков",
            "id_7": "Кузнецов",
            "id_8": "Иванов",
            "id_9": "Курин",
            "id_10": "Тепляков",
            "id_11": "Баранов",
            "id_12": "Баданин",
            "id_13": "Шолоков",
            "id_14": "Тимошкин",
            "id_15": "Бражнин",
            "id_16": "Черников"
        }
    }`,
    firstNameMaleJson: `{
        "count": 15,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Василий",
            "id_4": "Антон",
            "id_5": "Михаил",
            "id_6": "Анатолий",
            "id_7": "Артем",
            "id_8": "Станислав",
            "id_9": "Евгений",
            "id_10": "Олег",
            "id_11": "Геннадий",
            "id_12": "Алексей",
            "id_13": "Глеб",
            "id_14": "Денис",
            "id_15": "Роман",
            "id_16": "Владимир"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 15,
        "list": {     
            "id_1": "Марина",
            "id_2": "Мария",
            "id_3": "Екатерина",
            "id_4": "Елена",
            "id_5": "Анастасия",
            "id_6": "Татьяна",
            "id_7": "Наталья",
            "id_8": "София",
            "id_9": "Дарья",
            "id_10": "Любовь",
            "id_11": "Ксения",
            "id_12": "Галина",
            "id_13": "Маргарита",
            "id_14": "Ирина",
            "id_15": "Валерия",
            "id_16": "Евгения"
        }
    }`,
    patronymicJson: `{
        "count": 15,
        "list": {     
            "id_1": "Михайлов",
            "id_2": "Сергеев",
            "id_3": "Александров",
            "id_4": "Антонов",
            "id_5": "Васильев",
            "id_6": "Даниилов",
            "id_7": "Олегов",
            "id_8": "Игорев",
            "id_9": "Петров",
            "id_10": "Алексеев",
            "id_11": "Евгеньев",
            "id_12": "Денисов",
            "id_13": "Станиславов",
            "id_14": "Павлов",
            "id_15": "Романов",
            "id_16": "Степанов"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Программист",
            "id_2": "Водитель",
            "id_3": "Менеджер",
            "id_4": "Пожарный",
            "id_5": "Хирург",
            "id_6": "Стоматолог",
            "id_7": "Пианист",
            "id_8": "Пилот",
            "id_9": "Репортер",
            "id_10": "Сварщик",
            "id_11": "Кровельщик"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Педагог",
            "id_2": "Воспитатель",
            "id_3": "Менеджер",
            "id_4": "Певица",
            "id_5": "Программист",
            "id_6": "Медсестра",
            "id_7": "Воспитатель",
            "id_8": "Художник",
            "id_9": "Писатель",
            "id_10": "Журналист",
            "id_11": "Продавец"
        }
    }`,
    monthJson: `{
        "count": 11,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    // Генерация пола
    randomGender: function () {
        if (this.randomIntNumber() == 1) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE;
        }
    },

    // Генерация имени
    randomFirstName: function (gender) {
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    // Генерация фамилии
    randomSurname: function (gender) {
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'а';
        }
    },

    // Генерация отчества
    randomPatronymic: function (gender) {
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.patronymicJson) + 'ич';
        } else {
            return this.randomValue(this.patronymicJson) + 'на';
        }
    },

    // Генерация года
    randomBirthYear: function () {
        return this.randomIntNumber(2001, 1930);

    },
    // Длинные и короткие месяцы
    randomBirthDay: function (month, year) {
        let oddMonthArr = ['января', 'марта', 'мая', 'июля', 'августа', 'октября', 'декабря'];
        let evenMonthArr = ['апреля', 'июня', 'сентября', 'ноября'];

        // Нечетные месяцы
        if (oddMonthArr.indexOf(month) !== -1) {
            return this.randomIntNumber(31, 1);

            // Четные месяцы      
        } else if (evenMonthArr.indexOf(month) !== -1) {
            return this.randomIntNumber(30, 1);

            // февраль и его изменения
        } else {
            if (year % 4 === 0) {
                return this.randomIntNumber(29, 1);
            } else {
                return this.randomIntNumber(28, 1);
            }
        }
    },

    //Генерация месяца
    randomBirthMonth: function () {
        return this.randomValue(this.monthJson);
    },

    //Генерация профессии
    randomProfession: function (gender) {
        if (gender == this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surname = this.randomSurname(this.person.gender);
        this.person.patronymic = this.randomPatronymic(this.person.gender);
        this.person.birthYear = this.randomBirthYear();
        this.person.birthMonth = this.randomBirthMonth();
        this.person.birthDay = this.randomBirthDay();
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    }
};