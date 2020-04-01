var realarray = [9,8,7,4];
console.log(realarray);

var arraylike = {
    0: 9,
    1: 8,
    2: 7,
    length: 3
};

console.log(arraylike);

var realarray1 = Array.from(arraylike);
console.log(realarray1);

realarray1.forEach(value => {
    console.log(value);
});

var arraylike = {
    0: 9,
    1: 8,
    2: 7,
    length: 3
};

var realarray2 = [];
// for(const element of arraylike){
//     realarray2.append(element);
// }
console.log(realarray2);


var realarray2 = [...arraylike];
console.log(realarray2);