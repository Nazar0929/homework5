// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте 
// повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік".
//  Використайте switch


// перший варіант

let drink;
const select = prompt("Введіть напій із списку: Кава, Чай або Сік").toLowerCase().trim();

switch (select) {
    case "кава":
        drink = "Ваша Кава буде зготовлена через 5 хвилин";
        break;
    case "сік":
        drink = "Сік зі справжніми ягодами буде готовий";
        break;
    case "чай":
        drink = "Солодкий чай через 2 хвилини";
        break;

    default:
        console.log("Неправильно обраний напій, вибачте");
        
}

console.log(drink);




// другий варіант


const choose = prompt("Введіть улюблений напій: Кава, Чай або Сік").toLowerCase().trim();
const coffee = "кава";
const tea = "чай";
const juice = "сік";

if (choose === coffee) {
    console.log(`${coffee} буде готова`);
    
} else if (choose === tea) {
    console.log(`${tea} буде готовий`);
} else if (choose === juice) {
    console.log(`${juice} буде готовий`);
} else {
    console.log("Невідомий Напій");
    
}


// Створіть змінну для зберігання введеного рядка, який може бути 
// днем тижня. Якщо це робочий день — виведіть повідомлення про 
// робочий день, якщо вихідний — про вихідний.


const text = prompt("Введіть день тиждня: понеділок, вівторок, середа, четвер, п'ятниця, субота, неділя.").toLowerCase().trim();

switch (text) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
        console.log("Не пощастило, йди працюй 😏");
        break;
    case "субота":
    case "неділя":
        console.log("Відпочивайте) Дозволяю 😏");
        break;
    default:
        console.log("Вивчіть дні тиждня будь ласка))))) (: 😏");      
}




// Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року 
// і виводьте відповідне повідомлення.

// перший спосіб

const numberMonth = Number(prompt("Введіть номер місяця як номер за рахунком від 1 до 12"));

switch (numberMonth) {
    case 1:
        console.log("Перший місяць січень, гарно провести рік, зима");
        break;
    case 2:
        console.log("Другий місяць лютий, зима");
        break;
    case 3:
        console.log("Третій місяць березень, весна");
        break;
    case 4:
        console.log("Четвертий місяць квітень, весна");
        break;
    case 5:
        console.log("5 місяць травень, весна");
        break;
    case 6:
        console.log("шостий місяць червень, пора року літо");
        break;
    case 7:
        console.log("сьомий місяць липень, пора року літо");
        break;
    case 8:
        console.log("восьмий місяць серпень, пора року літо");
        break;
    case 9:
        console.log("9 місяць вересень,школа, осінь");
        break;
    case 10:
        console.log("десятий місяць жовтень, осінь");
        break;
    case 11:
        console.log("одинадцятий місяць листопад, осінь");
        break;
    case 12:
        console.log("дванадцятий місяць грудень, зима");
        break;
    
    default:
        console.log("Вибач, поки існує тільки 12 місяців");
        
        break;
}

// другий спосіб


const numbersMonth = Number(prompt("Введіть номер місяця від 1 до 12:"));

if (numberMonth >= 1 && numberMonth <= 2 || numberMonth === 12) {

    console.log("Зима");

} else if (numberMonth >= 3 && numberMonth <= 5) {
    console.log("Весна");

} else if (numberMonth >= 6 && numberMonth <= 8) {
    console.log("Літо");

} else if (numberMonth >= 9 && numberMonth <= 11) {
    console.log("Осінь");

} else {
    console.log("Вибач, поки існує тільки 12 місяців");

}





// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору:
//  якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".

const color = prompt("Введіть колір світлофора: зелений, жовтий, червоний").toLowerCase().trim();

switch (color) {
    case "зелений":
        console.log("йти");
        break;
    case "жовтий":
        console.log("чекати");
        break;
    case "червоний":
        console.log("стоп");
        break;

    default:
        console.log("Колір не зі списку, допобачення)");
        
}



// Створіть змінні для зберігання двох чисел та оператора (як у списку select).
//  Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

let number1 = Number(prompt("Введіть число"));
let number2 = Number(prompt("Введіть друге число"));
let operator = prompt("введіть оператор *, /, -, +");
let result;

switch (operator) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        if (number2 === 0) {
            console.log("Не можна ділтити на 0");
        } else {
            result = number1 / number2;
        }
        break;

    default:
        console.log("Не існуючий оператор");

}

console.log(result);


