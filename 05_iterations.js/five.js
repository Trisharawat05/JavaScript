const programming = ["js", "rb", "py", "java", "cpp"]

programming.forEach( function (item) {
    // console.log(item);
    
} )

programming.forEach( (val) => {
    // console.log(val);
})

function printMe(val) {
    // console.log(val)
}
programming.forEach(printMe)


programming.forEach( (val, index, arr) => {
    // console.log(val, index, arr);
    
})

const coding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }

]

coding.forEach( (val) => {
    console.log(val.languageName);
     
})