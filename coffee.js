$(document).ready(function() {
    const modal = $('#settingsModal');
    const btn = $('#settingsBtn');
    const span = $('.close');

    btn.click(function() {
        modal.css('display', 'block');
    });

    span.click(function() {
        modal.css('display', 'none');
    });

    $('#addToCartBtn').click(function() {
        const selectedStrength = $('input[name=fortressLevel]:checked').val();
        const selectedSweetness = $('input[name=sweetnessLevel]:checked').val();
        const selectedMilk = $('input[name=milkType]:checked').val();
        const selectedTemperature = $('input[name=temperatureLevel]:checked').val();

        // Фильтрация кофе по выбранным опциям
        const filteredCoffee = filterCoffee(selectedStrength, selectedSweetness, selectedMilk, selectedTemperature);

        // Открываем новую вкладку
        const newTab = window.open('', '_blank');

        // В новой вкладке отображаем отфильтрованные кофе
        filteredCoffee.forEach(coffee => {
            const coffeeDiv = $('<div>');
            const coffeeName = $('<p>').text(coffee.name);
            const coffeeImg = $('<img>').attr('src', coffee.image).attr('alt', coffee.name).addClass('coffee-img');
            const coffeeDesc = $('<p>').text(coffee.description);
            const coffeeButton = $('<button>').text(`Добавить в корзину`);
            coffeeButton.click(function() {
                // Здесь можно добавить выбранный кофе в корзину
                // Например, вызов функции для добавления в корзину
                addToCart(coffee);
            });

            coffeeDiv.append(coffeeName,coffeeImg, coffeeDesc, coffeeButton);
            newTab.document.body.append(coffeeDiv[0]);
        });
    });
});

// Функция для фильтрации кофе
function filterCoffee(strength, sweetness, milk, temperature) {

    // Пример фильтрации фиктивных данных кофе
// Пример фильтрации фиктивных данных кофе
    const allCoffee = [
        { name: "Эспрессо", strength: "strong", sweetness: "no-sugar", milk: "cow", temperature: "hot", image: "img/espresso.jpg", description: "Ароматный и крепкий напиток" },
        { name: "Латте", strength: "medium", sweetness: "moderate", milk: "cow", temperature: "hot", image: "img/latte.jpg", description: "Нежный кофе с молоком" },
        { name: "Фраппучино", strength: "light", sweetness: "sweet", milk: "cow", temperature: "cold", image: "img/frappuccino.jpg", description: "Освежающий и легкий кофейный коктейль" },
        { name: "Американо", strength: "medium", sweetness: "no-sugar", milk: "cow", temperature: "hot", image: "img/americano.jpg", description: "Напиток средней крепости" },
        { name: "Капучино", strength: "medium", sweetness: "moderate", milk: "cow", temperature: "hot", image: "img/cappuccino.jpg", description: "Пенка из молока придает неповторимый вкус" },

    ];

    return allCoffee.filter(coffee => {
        return coffee.strength === strength && coffee.sweetness === sweetness && coffee.milk === milk && coffee.temperature === temperature;
    });
}

// Функция для добавления кофе в корзину
function addToCart(coffee) {
    // Здесь можно добавить выбранный кофе в корзину
}



