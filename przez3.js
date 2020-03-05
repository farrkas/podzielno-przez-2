function przeztrzy(a) {
    let b = a.toString();

console.log(b);

    //if (isNaN(b)) {                                                       //jak wpisze ciagl liter i liczb to glupieje
    //    console.log("wpisana wartość nie jest liczbą!!!");
    }
    
    else {
        if (b.substr(b.length - 2) % 3 == 0) {
            console.log("podzielna przez 3");
        }
        else {
            console.log("niepodzielna przez 3");

        }
    }

}
przeztrzy(12);