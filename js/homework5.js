// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте 
// повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік".
//  Використайте switch


const choose = prompt("Введіть улюблений напій: Кава, Чай або Сік").toLowerCase();
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