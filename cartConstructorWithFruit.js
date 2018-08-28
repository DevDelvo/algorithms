class Cart {
    constructor(fruit) {
        this[fruit] = 1;
    }

    add(fruit) {
        if (this[fruit]) {
            this[fruit]++;
        } else {
            this[fruit] = 1;
        }
    }

    remove(fruit) {
        if (this[fruit]) {
            this[fruit]--;
        } else {
            return
        }
    }

    print() { // 'apple - 2' \n 'banana - 1
        for (const fruit in this) {
            console.log(`${fruit} - ${this[fruit]}`)
        }
    }
}


const cart = new Cart('apple');

cart.add('apple');
cart.remove('apple');
cart.add('banana');
cart.add('apple');
cart.print();

// console.log(cart)