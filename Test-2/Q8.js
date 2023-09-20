// const numbers = [1, 2, 3]

// console.log(numbers.reverse());


const revInt = (num) => {
    let myRevNum = num.toString().split("").reverse().join("");
    console.log(myRevNum)
};

revInt(123);


// const revInt = (num) => {
//     let myRevNum = num.toString().split("").reverse().join("");

//     if (myRevNum.endsWith("-")) {
//         myRevNum = "-" + myRevNum;
//         return parseInt(myRevNum);
//     } else {
//         return parseInt(myRevNum);
//     }
// };

//     console.log(revInt(-123));