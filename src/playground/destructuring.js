// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Atlanta',
//         temp: 56
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location;

// console.log(`${firstName} is ${age}.`);
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philidelphia', 'Pennsylvania', '19147'];

// pulls data in order 0 1 2 3 etc
const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [beverage, , medium] = item;

console.log(`A medium ${beverage} costs ${medium}`);