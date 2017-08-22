/**
 * Created by kml_c_14 on 2017-08-04.
 */

//var Y = (y2 – y1)/(x2 – x1) * x+ y1 - (y2 – y1)/(x2 – x1) * x1;

//var y = (Yb - Ya) / (Xb - Xa) * x + Ya - (Yb - Ya)/(Xb - Xa)*Xa;

let Xa = 12, Xb = 5, Ya = 2, Yb = 9, y, count = 0;
let coord = [Xa, Xb, Ya, Yb];

let result = coord.some((number) => {
    return /\./.test(number.toString())
});

if (result) {
    alert("Please, enter only integer numbers.")
}

var start, end;

if (Xa < Xb) {
    start = Xa + 1;
    end = Xb;
} else {
    start = Xb + 1;
    end = Xa;
}

//if the line is parallel to the axis y
if ( Xa == Xb && Yb > Ya) {
    start = Ya + 1;
    end = Yb;
}

if ( Xa == Xb && Yb < Ya ) {
    start = Yb + 1;
    end = Ya;
}

for (var i = start; i < end; i++) {

    if ( Xa < Xb ) {
        y = (Yb - Ya) / (Xb - Xa) * i + Ya - (Yb - Ya)/(Xb - Xa)*Xa;
    } else {
        y = (Ya - Yb) / (Xa - Xb) * i + Yb - (Ya - Yb)/(Xa - Xb)*Xb;
    }

    if ((y ^ 0) === y) {
        count++;
    }

    if ( Xa == Xb ) {
        y = start + 1;
        count++;
    }
}

alert( count );