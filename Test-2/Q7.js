var array = [2, 4, 6, 7, 8];

var newArray = [];

for(var i = 0;i < array.length;i++){
    for(var j = 0;j < array.length;j++){
        if(array[i] !== array[j]) {
            newArray.push(array[i])
        }
    }
}
console.log(newArray)