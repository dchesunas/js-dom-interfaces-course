'use strict';

function Item ({title, price, index} = {}) {
    this.title = title;
    this.price = price;
    this.index = index;

    this.discount = function () {
        this.prevPrice = this.price
        this.price = this.price + 100;
    }
}

function Cart () {

    // приватное поле
    const store = [];

    // публичный метод
    this.addItem = function (item) {
        // log.send('добавлен');
        store.push(item);
    }

    // приватный метод
    this._sum = function () {

    }

    this.sum = function () {
        return store.reduce((result, item) => {
            return result + item.price;
        }, 0);
    }

    this.getData = function () {
        return store;
    }
}

const cart = new Cart();

const items = ['Коробка', 'Корзина', 'Картина'].map((item, index) => {
    return new Item({
        index,
        title: item,
        price: index*100,
    });
}).filter((item) => {
    return item.price > 0;
}).forEach((item) => {
    cart.addItem(item);
});

console.log(cart.sum());


// Math.pow

// 1. работа с данными - не DOM
// 2. визуальное представление - DOM
// 3. работа с сетью