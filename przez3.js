function przeztrzy(a) {
    if (isNaN(a)) {
        console.log("wpisana wartość nie jest liczbą");
    }
    else {
        const b=a.length-3;
        const c = a.slice(b);
        if (c%3==0) {
            console.log("podzielna przez 3");
        }
      else {
            console.log("niepodzielna przez 3");
        }
    }


}
przeztrzy(15485412);

//var a="sadrwe";

//console.log(a.substr(a.length);