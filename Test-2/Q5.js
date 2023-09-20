var convert = function(s, numRows) {
    const result = [];

    if(numRows < 2) {
        return s;
    }

    for(let i = 0; i < numRows; i++) {
        let j = i;
        while (j < s.length) {
            result.push(s[j]);

        if (i !== 0 && i !== numRows - 1) {
            const k = (numRows - i) * 2 - 1 - 1 +j;
            
            if (k < s.length) {
                result.push(s[k]);
            }
        }

            j += numRows * 2 - 1 - 1;
        }
    }
    return result.join('');
}

console.log(numRows(convert))