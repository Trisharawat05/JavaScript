// forof return values and forin return keys 

const myObject = {
    js: 'JavaScript',
    cpp: "C++",
    rb: "ruby"
}

for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map() // map is not iteratable
map.set('IN', "India")
map.set('IN', "India")
map.set('USA', "United States if America")
map.set('Fr', "France")

for (const key in map) {
    // console.log(key); 
}