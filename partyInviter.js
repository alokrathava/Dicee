var guestList = ['x', 'y', 'x', 'a', 'b', 'c'];

var guest = prompt("Please enter your name")

if (guestList.includes(guest)) {
    alert("Welcome to Party!")
} else {
    alert("Please leave the party")
}