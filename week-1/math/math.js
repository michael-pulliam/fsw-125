


//import the functionality in another file with require

// The math.js file should create and export functions for addition, subtraction, multiplication and division.
const add = (a,b) => {
    return a + b
};
const subtract = (c, d) => {
    return c - d
};
const multiply = (e, f) => {
    return e * f
};
const divide = (g, h) => {
    return g / h
};
//export the functionality from this file with module.exports
module.exports = {
    add,
    subtract,
    multiply,
    divide
}

// function name(){

// }

// module.exports = name

// module.exports.add = (a,b) => {
//     return a + b
// };

//module.exports equal to a CONSTRUCTOR FUNCTION

/* function Greetr(){
    this.greeting = "hello world",
    this.greet = function(){
        console.log(this.greeting)
    }
}
nodule.exports = Greetr
*/