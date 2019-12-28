const TreeMap = require('./TreeMap');

// A hotel manager has to process N bookings of rooms for the next season. His hotel has K rooms. 
// Bookings contain an arrival date and a departure date. 
// He wants to find out whether there are enough rooms in the hotel to satisfy the demand.
// Inputs:
// - First list for arrival time of booking
// - Second list for departure time of booking
// - Third is K which denotes the count of rooms
// Output:
// - A boolean which tells whether its possible to make a booking
// false means there are not enough rooms for N booking
// true means there are enough rooms for N booking
// Example:
// Inputs:
// - arrivals = [1, 3, 5]
// - departures = [2, 6, 10]
// - K = 1

// Output: false. At day = 5, there are 2 guests in the hotel. But we have only one room.

// sorted map solution
function possibleHotelBookings(arrive, depart, k) {
    // collection of events
    const events = new Map();

    // number of rooms
    let num = arrive.length;

    for (let i = 0; i< num; i++) {
        let arrival = arrive[i];
        let departure = depart[i];
        // add one during an arrival;
        let current = events.get(arrival);
        // events.set(arrival, current === null ? 1 : current + 1);
        current ? events.set(arrival, current + 1) : events.set(arrival, 1);
        // remove one during a departure
        current = events.get(departure);
        current ? events.set(departure, current - 1) : events.set(departure, -1)
    }
    console.log('events => ', events)

    // sort the map
    const sortedEvents = new TreeMap();
    for (const el of events.entries()) {
        sortedEvents.put(el[0], el[1])
    }
    console.log('sorted events => ', sortedEvents.dict)

    let count = 0;
    for (const el in sortedEvents.dict) {
        count += sortedEvents.dict[el]
        console.log('new count', count)
        if (count > k) return false;
    }
    return true;
}
// Time O(nlogn) average, O(n^2) worst | Space O(n)

console.log('sorted map solution => ', possibleHotelBookings([1,3,5], [2,6,10], 1)); // false

// sorted with pointers
function possibleHotelBookings2(arrive, depart, k) {
    arrive.sort((a, b) => a - b);
    depart.sort((a, b) => a - b);

    let count = 0;
    let arrivePointer = 0;
    let departPointer = 0;
    let n = arrive.length;
    // console.log(arrive, depart)

    while (arrivePointer < n && departPointer < n) {
        // check the min
        if (arrive[arrivePointer] < depart[departPointer]) {
            arrivePointer++;
            count++;

            if (count > k) return false;
        } else {
            departPointer++;
            count--;
        }
    }
    return true;
}
// O(nlogn) time | O(1) space

console.log('pointers => ', possibleHotelBookings2([1,3,5], [2,6,10], 1)); // false