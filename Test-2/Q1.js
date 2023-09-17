var array = [2, 7, 11, 15];

var target = 9;

function targetValue (array){
for(var i = 0;i < array.length; i++) {
        if (array[i] + array[i+1] == target) {
            return [i, i + 1]
        }
    }
}
console.log(targetValue(array))