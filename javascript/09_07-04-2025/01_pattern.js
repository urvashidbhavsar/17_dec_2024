// download node.js = becuase we need commands of node to run js

// for exit => ctrl + c 

// cmd cant run document so it gives error. it run only console

let str = "Hello World"
let pettern = /^[a-z\s]*$/i

// if (pettern.test(str)) {
if (str.match(pettern)) {
    console.log("true")
} else {
    console.log("false")
}

let num = 9865;
let nptn = /^[0-9]*$/
if (nptn.test(num)) {
    console.log("true");
} else {
    console.log("false")
}