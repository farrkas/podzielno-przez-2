function przeztrzy(a) {
    if (isNaN(a)) {
        console.log("wpisana wartość nie jest liczbą");
    }
    else {
        // const b=a.length-3;
        // var atab=[...a]
        // const c = atab.slice(b);
        if (a % 3 == 0) {
            console.log("podzielna przez 3");
        }
        else {
            console.log("niepodzielna przez 3");
        }
    }

}
przeztrzy(15485411);