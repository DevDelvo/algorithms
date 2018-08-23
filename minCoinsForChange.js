// Write a function that determines the least amount of change one can make for a certain target value with a certain set of coins
// Return -1 if there is no minimum

// O(n*d) Time | O(n) space
function minChange(coins, target) {
    const combos = (new Array(target + 1)).fill(Infinity); //fill with infinity because it will be the default value to compare with.
    // If left to 0, 0 will always be smallest compared to whatever amount of min amount of change is possible
    combos[0] = 0; //min amount of change you can give is 0;
    for (const coin of coins) {
        for (let amount = 0; amount < combos.length; amount++) {
            if (coin <= amount) { //if the selected coin is less than or equal to the current amount, determine if current combo is less than the value before it + 1
                combos[amount] = Math.min(combos[amount], combos[amount - coin] + 1);
            }
        }
    }
    return combos[target] !== Infinity ? combos[target] : -1;
}

const test1 = minChange([1,5,10], 7)
console.log(test1) // expects 3
