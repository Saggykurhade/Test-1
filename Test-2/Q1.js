//1.
var array = [2, 7, 11, 15];

var target = 9;

function targetValue (array){
for(var i = 0;i < array.length; i++) {
    for (var j = i + 1;j < array.length; j++) {
        if (array[i] + array[j] == target) {
            return [i, j]
            }
        }
    }
}
console.log(targetValue(array))


//2.
var array = [3, 2, 4];

var target = 6;

function targetValue(array) {
    for(i = 0;i < array.length;i++) {
        for(j = i + 1;j < array.length;j++) {
            if(array[i] + array[j] == target)
            return [i, j];
        }
    }
}

console.log(targetValue(array))