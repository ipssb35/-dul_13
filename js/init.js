window.onload = () => {
    document.querySelector('#surnameOutput').innerText = 'Фамилия';
    document.querySelector('#firstNameOutput').innerText = 'Имя';
    document.querySelector('#patronymicOutput').innerText = 'Отчество';
    document.querySelector('#genderOutput').innerText = 'Пол';
    document.querySelector('#birthDayOutput').innerText = 'День';
    document.querySelector('#birthMonthOutput').innerText = 'Месяц';
    document.querySelector('#birthYearOutput').innerText = 'Год';
    document.querySelector('#professionOutput').innerText = 'Профессия';
}

document.querySelector('#generationBtn').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
    document.querySelector('#birthMonthOutput').innerText = initPerson.birthMonth;
    document.querySelector('#birthDayOutput').innerText = initPerson.birthDay;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
})

document.querySelector('#cleaningBtn').addEventListener('click', () => {
    document.querySelector('#surnameOutput').innerText = 'Фамилия';
    document.querySelector('#firstNameOutput').innerText = 'Имя';
    document.querySelector('#patronymicOutput').innerText = 'Отчество';
    document.querySelector('#genderOutput').innerText = 'Пол';
    document.querySelector('#birthDayOutput').innerText = 'День';
    document.querySelector('#birthMonthOutput').innerText = 'Месяц';
    document.querySelector('#birthYearOutput').innerText = 'Год';
    document.querySelector('#professionOutput').innerText = 'Профессия';
})