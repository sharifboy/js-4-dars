// 1. Function Declarition == Funksiya elon qilish
// function foo(t) {
//     return t;
// }

// foo(1111);

// 2. Function experission

// const abs = function (uuu) {
//     console.log(uuu);
// };

// abs(555)

// 3. Arrow Function

// const aaa = (a) => console.log(a);

// aaa("arrow");

let info = prompt("Name")
let time = prompt("Time")

function text(foo) {
    if (foo => 8 && foo <= 12) {
        alert(`good morning`);

    } else if (foo => 12 && foo <= 18) {
        alert(`good aftenoon`);

    } else {
        alert(`good night`);
    }
}

alert(text(time));

// const text = (i, t) => t > 8 && t < 18 ? alert(`good afternoon ${i}`) : alert(`good night, ${i}`);

// text(info, time);