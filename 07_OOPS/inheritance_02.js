class Burger {
    constructor(price) {
        //console.log('This is a simple burger'); this will come with all classes that extends Burger class
        this.price = price;
    
    }

    showPrice() {
        console.log(`The price is : ${this.price}`);
    }
}

class BeefBurger extends Burger {
    constructor(price, tax) {
        super(price);
        this.tax = tax;
        console.log('This is a beef burger');
    }

    showPrice() {
        console.log(`The price is : ${this.price} and tax is : ${this.tax}`);
    }
}

class ChickenBurger extends Burger {
    constructor(price, discount) {
        super(price);
        this.discount = discount;
        console.log('This is a chicken burger');
    }

    showPrice() {
        console.log(`The price is : ${this.price} and discount is : ${this.discount}`);
    }
}

class VeggieBurger extends Burger {
    constructor(price, calories) {
        super(price);
        this.calories = calories;
        console.log('This is a veggie burger');
    }

    showPrice() {
        console.log(`The price is : ${this.price} and calories are : ${this.calories}`);
    }
}

// Creating instances of each class and showing their prices
const burger = new Burger(1000);
burger.showPrice();

const beefBurger = new BeefBurger(1200, 120);
beefBurger.showPrice();

const chickenBurger = new ChickenBurger(900, 100);
chickenBurger.showPrice();

const veggieBurger = new VeggieBurger(800, 300);
veggieBurger.showPrice();
