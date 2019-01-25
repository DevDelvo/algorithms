const party = [[5,6], [2,8], [1,2], [30,40], [1,2]];

// O(n^2) time || O(1) space
const numHandshakesIterative = (party) => {
    let numHandshakes = 0;
    for (let i = 0; i < party.length - 1; i++) {
        const guest1 = party[i];
        for (let j = i + 1; j < party.length; j++) {
            const guest2 = party[j];
            if (guest1[0] >= guest2[0] && guest1[0] <= guest2[1] 
                || guest2[0] >= guest1[0] && guest2[0] <= guest1[1]) numHandshakes++;
        }
    }
    return numHandshakes;
}

console.log(numHandshakesIterative(party)); // 4