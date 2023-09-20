var array1 = [[1, 4, 5],[1, 3, 4],[2,6]]

console.log(array1.flat(Infinity))

var array2 = [...array1];

array2.sort((a, b) => a - b)
console.log(array2.flat(Infinity))

