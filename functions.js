/*Life in weeks coding exercise*/
var life = 90
var dayInYear = 365
var monthInYear = 12
var weekInYear = 52

lifeInWeek(life, dayInYear, monthInYear, weekInYear)

function lifeInWeek(life, dayInYear, monthInYear, weekInYear) {
    console.log(life, dayInYear, weekInYear, monthInYear);

    day = 365 * 90
    week = 52 * 90
    month = 12 * 90


    console.log("You have" + day + "," + week + "weeks ," + month + "month left")
}

/*Output and return values*/
/*Income Tax*/
var amount = 110000;

function getTax(amount) {
    var rate = 0.18;

    return rate * amount;
}

var val = getTax(amount)
console.log(val)