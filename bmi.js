function BMI() {

    var weight = document.forms["bmi"]["weight"].value;
    var height = document.forms["bmi"]["height"].value;

    // return alert(weight + "" + height);

    var result = Cal(weight, height)

    function Cal(weight, height) {
        return (weight) / (height * height);
    }

    if (result == 0 && result >= 18.5) {
        document.getElementById("output").innerHTML = "Under Weight";
        return true;
    } else if (result <= 18.5 && result >= 24.9) {
        document.getElementById("output").innerHTML = "Normal";
        return true;
    } else {
        document.getElementById("output").innerHTML = "Over Weight";
        return true;
    }
}