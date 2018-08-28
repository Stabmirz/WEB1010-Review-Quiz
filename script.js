// Create a variable and set its value to the answer of a math equation. It should be a number Value
var eq1 = 3 * 5;
// Create a variable and set its value to 5 strings being concatenated together using the ‘+’ operator. Each string should be at least 10 characters long. Try and make a real paragraph that a human will be able to read and understand.
var string = "We are lea" + "rning coding." + "This is our" + " first class" + " of WEB1100."
//console.log(string)
// Create a variable and use the ES6 string interpolation (back ticks) to set the value of a variable to a string that includes 5 variables whose values are numbers. Use ${} to use these number variables in the string variable.
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var f = `The numbers are ${a}, ${b}, ${c}, ${d}, ${e}`
console.log(f);
// Create an array that has 4 numbers, 2 strings, 3 comparisons, another array with 3 elements inside.
var array = [1, 2, 3, 4, "abcd", "efgh", 4 > 3, 3 != 4, 2 < 3, [1, 2, "abi"]]
// Create an object that has 4 properties: A number, a string, an array, and an object
var obj = {
    aNumber: 1,
    aString: "one",
    anArray: [2, 3],
    aObject: { prop: 5 }
}
// Create 5 variables in a js file that is linked to your html file 
// Select the first html element using element selector
var h2 = document.querySelector("h2");
// Select the second html element using class
var p = document.querySelector(".paragraph");
// Select the third html element using id
var d = document.querySelector("#d");
// Select the fourth html element using attribute selector
var inp = document.querySelector("input[type]");
// Select the five html element however you feel
var button = document.querySelector("button");

function doStuff(input, src) {

    p.textContent += input;
    d.innerHTML += `<img src= "${src}" alt="Cat"/>`;
}
function loopIt(num) {
    for (var i = 1; i <= num; i++) {
        doStuff(inp.value, "https://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg");
    }
}

button.addEventListener("click", function () {
  loopIt(5);
})

