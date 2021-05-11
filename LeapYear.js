function leapYear() {

    var year = document.forms["yearForm"]["date"].value;

//    Find leap year
    function leapYearInner(year) {

        if (year % 4 == 0) {
            return alert("Leap Year.");
        } else if (year % 100 == 0) {
            return alert("Not Leap Year.");
        } else if (year % 400 == 0) {
            return alert("Leap Year.");
        } else {
            return alert("Enter proper year");
        }

    }

    leapYearInner(year)
}