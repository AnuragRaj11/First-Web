// alert("Wait for loading");

console.log("hello js");
var a = 4; b = 7;
console.log(a + b); (typeof a);
let c = 4;
console.log(c);

let o = {
    "key": "value"
}
console.log(o);

let age = 20;
if (age > 18) {
    console.log("ok")
    console.log(age - c)
    console.log(age * c)
    console.log(age / c)
    console.log(age % c)
    console.log(age + c)

} else {
    console.log("not ok")
}

for (let i = 0; i < 7; i++) {
    console.log(i)
}
let i = 1;
while (i < 7) {
    console.log(i);
    i++;
}
let d = 4;
do {
    console.log(d);
    d++;
} while (d < 9);

function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}
nice("Anurag")

let s = "raj";
console.log(s);
console.log(s[0]);
console.log(s[1]);
console.log(s[2]);
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.slice(0, 2));
console.log(s.slice(2));

let arr = [1, 2, 3, 4]
arr[0] = 9;
console.log(arr[0]);
arr.push(7);
console.log(arr.join("and"));

// document.body.firstChilds