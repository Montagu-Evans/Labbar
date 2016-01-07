/*
1. create 7 hamburger objects using literal notation 
   use attributes name, size, dayOfTheWeek and price(page. 104 in book)
   Please use the same html syntax of an article as in exercise1.
2. create Product objects with constructor notation, 
   use the parameters name, size, price, dayOfTheWeek  (page. 108 in book)
3. add 7 drinks to the page using Product.
4. add 7 pizzas to the page using Product.
5. add 7 subs to the page using Product.
6. GO to file FixIt.html
*/
//DRINKS
//Subs

/* -- Uppgift 1 --- */
var burgers = [
    createBurgers('Satji Burger', '90g', 'monday', 15.99),
    createBurgers('Volcano Burger', '290g', 'tuesday', 20.99),
    createBurgers('Midtown Burger', '220g', 'wednesday', 18.99),
    createBurgers('Smithsire Burger', '90g', 'thursday', 11.99),
    createBurgers('Slippery Burger', '45g', 'friday', 9.99),
    createBurgers('Howdy Burger', '120g', 'saturday', 15.99),
    createBurgers('Wicked Burger', '120g', 'sunday', 15.99)
];

function createElements() {
    var h1Element = document.createElement('h1');
    h1Element.setAttribute('id', 'ad');
    h1Element.textContent = "menu!";

    var h1 = document.getElementById('burgersPlace').appendChild(h1Element);

    var h2Element = document.createElement('h2');
    h2Element.textContent = "delicious burgers";

    var h2 = document.getElementById('burgersPlace').appendChild(h2Element);
}

function createBurgers(name, size, dayOfTheWeek, price) {
    var burger = {
        burgerName: name,
        burgerSize: size,
        dayOfWeek: dayOfTheWeek,
        burgerPrice: price
    }
    return burger;
}

function createElementsForBurgers() {
    for (var i = 0; i < burgers.length; i++) {
        var img = document.createElement('img');
        img.src = "http://localhost:22684/Images/Hamburger.png";

        var articleElement = document.createElement('article')
            .appendChild(document.createElement('fieldset'))
            .appendChild(document.createElement('legend'))
            .appendChild(document.createTextNode(burgers[i].dayOfWeek
            + ' burger'))
            .parentNode
            .parentNode
            .appendChild(document.createElement('h3'))
            .appendChild(document.createTextNode(burgers[i].burgerName))
            .parentNode
            .parentNode;

        articleElement.appendChild(document.createElement('span'))
            .appendChild(img);

        articleElement.appendChild(document.createElement('div'))
            .appendChild(document.createTextNode('price: ' + burgers[i].burgerPrice));

        articleElement.appendChild(document.createElement('div'))
            .appendChild(document.createTextNode('size: ' + burgers[i].burgerSize));

        var burgersPlace = document.getElementById('burgersPlace');
        burgersPlace.appendChild(articleElement);
    }
}

createElements();
createElementsForBurgers();

function Product(name, size, price, dayOfTheWeek) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.dayOfTheWeek = dayOfTheWeek;
}

var drinks = [
    new Product('Chillout Milkshake', 'tall', 5.99, 'monday'),
    new Product('Funky Milkshake', 'medium', 6.99, 'tuesday'),
    new Product('Monkey Milkshake', 'large', 9.99, 'wednesday'),
    new Product('Dream big Milkshake', 'x-large', 10.99, 'thursday'),
    new Product('Chocolate Milkshake', 'xx-large', 13.99, 'friday'),
    new Product('Vanilla Milkshake', 'tall', 5.99, 'saturday'),
    new Product('Strawberry Milkshake', 'medium', 6.99, 'sunday')
];

function createElementsForDrinks() {
    for (var i = 0; i < drinks.length; i++) {
        var img = document.createElement('img');
        img.src = 'http://localhost:22684/Images/Drink.png';

        var articleElement = document.createElement('article')
            .appendChild(document.createElement('fieldset')).appendChild(document.createElement('legend'))
            .appendChild(document.createTextNode(drinks[i].dayOfTheWeek + " drinks"))
            .parentNode
            .parentNode
            .appendChild(document.createElement('h3'))
            .appendChild(document.createTextNode(drinks[i].name))
            .parentNode
            .parentNode;


        articleElement.appendChild(document.createElement('span')).appendChild(img);

        articleElement.appendChild(document.createElement('div'))
            .appendChild(document.createTextNode('price: ' + drinks[i].price));

        articleElement.appendChild(document.createElement('div')).appendChild(document.createTextNode('size: ' + drinks[i].size));

        var drinksPlace = document.getElementById('drinksPlace');
        drinksPlace.appendChild(articleElement);
    }
}

createElementsForDrinks();

var pizzas = [
    new Product('Hawaii Pizza', 'normal', 18.99, 'monday'),
    new Product('Cappricosa Pizza', 'normal', 18.99, 'tuesday'),
    new Product('Kebap Pizza', 'normal', 20.99, 'wednesday'),
    new Product('Barcelona Pizza', 'normal', 18.99, 'thursday'),
    new Product("L'italia Pizza", 'normal', 18.99, 'friday'),
    new Product('Gorgonzola Pizza', 'normal', 18.99, 'saturday'),
    new Product('Wihowahu Pizza', 'normal', 18.99, 'sunday')
];

function createElementsForPizzas() {
    for (var i = 0; i < pizzas.length; i++) {
        var img = document.createElement('img');
        img.src = 'http://localhost:22684/Images/Pizza.png';

        var createElement = document.createElement('article')
            .appendChild(document.createElement('fieldset'))
            .appendChild(document.createElement('legend'))
            .appendChild(document.createTextNode(pizzas[i].dayOfTheWeek + " pizzas"))
            .parentNode
            .parentNode
            .appendChild(document.createElement('h3'))
            .appendChild(document.createTextNode(pizzas[i].name))
            .parentNode
            .parentNode;

        createElement.appendChild(document.createElement('span')).appendChild(img);

        createElement.appendChild(document.createElement('div'))
            .appendChild(document.createTextNode('price: ' + pizzas[i].price));
        createElement.appendChild(document.createElement('div'))
            .appendChild(document.createTextNode('size: ' + pizzas[i].size));

        var pizzaPlace = document.getElementById('pizzaPlace');
        pizzaPlace.appendChild(createElement);
    }
}

createElementsForPizzas();

var subs = [
    new Product('club sandwich', '30ft', 9.99, 'monday'),
    new Product('party sandwich', '15ft', 6.99, 'tuesday'),
    new Product('sallad sandwich', '30ft', 9.99, 'wednesday'),
    new Product('cucumber sandwich', '15ft', 6.99, 'thursday'),
    new Product('Tofu sandwich', '60ft', 17.99, 'friday'),
    new Product('House sandwich', '30ft', 9.99, 'saturday'),
    new Product('Mormors sandwich', '60ft', 19.99, 'sunday')
];

function createElementsForSubs() {
    for (var i = 0; i < subs.length; i++) {
        var img = document.createElement('img');
        img.src = 'http://localhost:22684/Images/Subs.PNG';

        var createElement = document.createElement('article')
            .appendChild(document.createElement('fieldset'))
            .appendChild(document.createElement('legend'))
            .appendChild(document.createTextNode(subs[i].dayOfTheWeek + ' sandwich'))
            .parentNode
            .parentNode
            .appendChild(document.createElement('h3'))
            .appendChild(document.createTextNode(subs[i].name))
            .parentNode
            .parentNode;

        createElement.appendChild(document.createElement('span'))
            .appendChild(img);

        createElement.appendChild(document.createElement('div'))
            .appendChild(document.createTextNode('proce: ' + subs[i].price));
        createElement.appendChild(document.createElement('div'))
            .appendChild(document.createTextNode('size: ' + subs[i].size));

        var subsPlace = document.getElementById('subsPlace');
        subsPlace.appendChild(createElement);
    }
}

createElementsForSubs();
