var number = parseInt(prompt("Enter a number"))

let a = 0, b = 1, nexterm;

for (let i = 0; i <= number; i++) {
    console.log(a);

    nexterm = a + b;
    a = b;
    b = nexterm;

}