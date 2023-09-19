var convert = function(str, numRows) {

    if(numRows === 1) {
        return str;
    }

    var result = '';
    const step = 2 * numRows - 2

    for(var i = 0; i < numRows; i++) {
        for(var j = 0; j + i < n; j += step) {
            result += str[j + i];
            
            if(i !== 0 && i !== numRows - 1 && j + step - i < n) {
                result += str[j + step - i]
            }
        }
    }
    return result;
}

console.log(str,numRows)