var output = [];
var cnt = 1;


function FizzBuzz() {
    if (cnt % 3 == 0) {
        output.push("Fizz");
    } else if (cnt % 5 == 0) {
        output.push("Buzz");
    } else if (cnt % 5 == 0 && cnt % 3 == 0) {
        output.push("FizzBuzz");
    } else {
        output.push(cnt);
    }

    cnt++;
    console.log(output);
}

