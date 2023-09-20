const numbers = [2, 4, 1, 3, 6, 7, 8];
const result = [];

const missingValue = (array) => {
    
    for(let i = 0; i < numbers.length; i++) {
        if(array.indexOf(i) < 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(missingValue(numbers));