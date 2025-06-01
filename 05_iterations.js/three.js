// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);   
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each word of ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('IN', "India") // no duplicate values if there are duplicate values it will be printed only once
map.set('USA', "United States if America")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key , " :- " , value);
    // console.log(key + " :- " + value); // both give same output
}

const myObject = { // objects are not iteratable like this we have to use a different method
    // 'game1': 'NFS',
    // 'game2': 'Spiderman'
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key , " :- " , value);
}

