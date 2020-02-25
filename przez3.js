function przeztrzy(a) {
    if (isNaN(a)) {
        console.log("wpisana wartość nie jest liczbą!!!");
    }
    else {
        if (a.substr(a.length-2) % 3 == 0) {
            console.log("podzielna przez 3");
        }
        else {
            console.log("niepodzielna przez 3");

        }
    }

}
przeztrzy(1111111115);