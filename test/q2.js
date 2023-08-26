for (var i = 1; i <= number; i++) {
    if (result == undefined) {
        result = i;
    } else {
        result = result * i;
    }
}
console.log(result)