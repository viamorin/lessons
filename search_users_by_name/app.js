const users = [
  {
    id: 1,
    fullName: "Чекбоксов Федот Яковлевич",
    email: "checkbox@gmail.com",
    age: 26,
  },
  {
    id: 2,
    fullName: "Буттонов Захар Рихардович",
    email: "button@gmail.com",
    age: 31,
  },
  {
    id: 3,
    fullName: "Иванов Иван Иванович",
    email: "ivanovich12@mail.ru",
    age: 19,
  },
  {
    id: 4,
    fullName: "Гришин Дмитрий Дмитриевич",
    email: "grishinD1@rambler.com",
    age: 55,
  },
  {
    id: 5,
    fullName: "Павлов Николай Николаевич",
    email: "pavlovN32olay@icloud.com",
    age: 87,
  },
]

const sortNameInput = document.getElementById("search-input");
const sortFromInput = document.getElementById("sort-from-input");
const sortToInput = document.getElementById("sort-to-input");
const result = document.getElementById("result");

const renderUsers = (users) => {
  return users.map((user) => {
    return `<div class="table-row-data">
        <div class="head number-head">${user.id}</div>
        <div class="head fio-head">${user.fullName}</div>
        <div class="head email-head">${user.email}</div>
        <div class="head age-head">${user.age}</div>
        <div class="head spacer"></div>
      </div>`
  }).join(" ")
}
result.innerHTML = renderUsers(users);

const sortUsersWithField = () => {
  // Получаем значения из всех полей ввода
  const searchTerm = sortNameInput.value.toLowerCase();
  const fromAge = sortFromInput.value ? Number(sortFromInput.value) : null;
  const toAge = sortToInput.value ? Number(sortToInput.value) : null;

  // Фильтруем пользователей по всем условиям
  return users.filter(user => {
    // Проверка имени (регистронезависимая)
    const nameMatch = user.fullName.toLowerCase().includes(searchTerm);
    
    // Проверка возраста
    const ageMatchFrom = fromAge === null || user.age >= fromAge;
    const ageMatchTo = toAge === null || user.age <= toAge;
    
    return nameMatch && ageMatchFrom && ageMatchTo;
  });
};

// Функция для обновления результатов
const updateResults = () => {
  const filteredUsers = sortUsersWithField();
  result.innerHTML = renderUsers(filteredUsers);
};

// Вешаем обработчики на все поля ввода
sortNameInput.addEventListener('input', updateResults);
sortFromInput.addEventListener('input', updateResults);
sortToInput.addEventListener('input', updateResults);



/**
Тесты:
1. Тест:
sortNameInput.value = 'Захар';
sortFromInput.value = '27'
sortToInput.value = '56'

sortUsersWithField() => [
  { 
    id: 2,
    fullName: "Буттонов Захар Рихардович", 
    email: "button@gmail.com", 
    age: 31 
  }
]

2. Тест:
sortNameInput.value = '';
sortFromInput.value = '86'
sortToInput.value = '87'

sortUsersWithField() => [
  { 
    id: 5,
    fullName: "Павлов Николай Николаевич", 
    email: "pavlovN32olay@icloud.com", 
    age: 87 
  }
]

3. Тест:
sortNameInput.value = 'НОВ';
sortFromInput.value = ''
sortToInput.value = '54'

sortUsersWithField() => [
  { 
    id: 2,
    fullName: "Буттонов Захар Рихардович", 
    email: "button@gmail.com", 
    age: 31 
  },
    { 
    id: 3,
    fullName: "Иванов Иван Иванович", 
    email: "ivanovich12@mail.ru", 
    age: 19 
  }
]

4. Тест:
sortNameInput.value = 'яКО';
sortFromInput.value = '26'
sortToInput.value = ''

sortUsersWithField() => [
  { 
    id: 1, 
    fullName: "Чекбоксов Федот Яковлевич", 
    email: "checkbox@gmail.com", 
    age: 26 
  }
]

А также вместо <div id="result"></div>: 
  <div class="table-row-data">
    <div class="head number-head">1</div>
    <div class="head fio-head">Чекбоксов Федот Яковлевич</div>
    <div class="head email-head">checkbox@gmail.com</div>
    <div class="head age-head">26</div>
    <div class="head spacer"></div>
  </div>
 */