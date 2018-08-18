
// O(nd) time | O(n) space
// where n = target and d = number of coins
function makeChange(coins, target) {
    let combinations = (new Array(target + 1)).fill(0);
    combinations[0] = 1; //base case. If the target is 0. There is only 1 way to give 0 as change which is by not giving change
    for (let coin of coins) {
        for (let amount = 1; amount <= target; amount++) { //will iterate the entire combinations array
            if (coin <= amount) {
                combinations[amount] += combinations[amount - coin];
                console.log("amount is", amount, '. coin:', coin,"| combos:", combinations);
            }
        }
    }
    return combinations[target];
}

const coins = [1,5,10,25];
console.log(makeChange(coins, 10)); // expects 4 => 10, 5+5, 5 + 1*5, 1*10