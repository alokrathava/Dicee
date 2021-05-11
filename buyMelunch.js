var PayList = ['x', 'y', 'z', 'g'];

function whoIsPaying(name) {

    var numberOfPeople = name.length;
    var randomPeople = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = name[randomPeople];


    return randomPerson + "is going to but lunch";

}

whoIsPaying(PayList);