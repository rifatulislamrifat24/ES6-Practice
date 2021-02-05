const person = {name: 'Jack William', age: 17, job: 'facebooking', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '01754545891', friends: ['Tom Hancks', 'Tom Cruise', 'Tom Yarn'] };

// const gfName = person.gfName;
// const phone = person.phone;

const {phone, gfName, address, salary} = person;

console.log(gfName, phone, salary, address);

// const complexObject = {
//     name: 'abc',
//     info: {
//         address: 'kola bagan',
//         leader: 'tiger leader'
//     }
// }

// const {leader} = complexObject.info

// console.log(leader);


// const friends = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Shahrukh Khan'];
// const [chotoFriend, ...olderF] = friends;

// console.log(olderF);