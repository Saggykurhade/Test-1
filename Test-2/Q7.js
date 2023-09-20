const list = [2, 4, 6, 7, 8, 2, 6, 4, 7];

function removeDuplicate (array) {
    return array.filter((el, index) => array.indexOf(el) === index)
}

console.log(removeDuplicate(list))