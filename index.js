/*Character length Validation*/
var msg = prompt("ENTER Your Message");
var finalChar = 80;
var x = msg.length;

var answer = finalChar - x;

alert(answer + "    Character Left");

/*Increment and Decrement*/
++i;
i++;
i--;
--i;
/*Function*/
var toast = "Hello World";

greeting(toast);

function greeting(toast) {
    alert(toast);
}

