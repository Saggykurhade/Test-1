const array = [1, 2, 3, 4];

var i = 0;

while (i < array.length) {
    var j = i + 1;
    var temp = array[i];
    array[i]= array[j];
    array[j]= temp; 
    i = i + 2;    
}
console.log(array);