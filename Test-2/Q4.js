var array1 = ['a', 'b', 'c'];
var array2 = ['p', 'q', 'r']

Result newArray;

function mergedList (array) {
    for(var i = 0;i < array1.length;i++) {
        for(var j =0;j < array2.length;j++) {
            if ([array1,array2] == newArray[i] ) {
                array.push(newArray[i].length)
            }
        }
        return newArray
    }
    
}

console.log(mergedList(array1,array2))