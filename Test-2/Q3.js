var str1 = ['aa'];
var str2 = ['a'];

function stringmatch () {
var flag = false;
for (var i=0;i < str1.length;i++) {
    for(var j =0;j < str2.length;j++) {
        if(str1[i],str2[i]) {
            return false
        }
        flag = true
    }
  }

}

console.log(stringmatch())



//palindrome

function isPalindrome (str) {
    const len=str.length;
    for(var i = 0;i < len/2;i++) {
        if(str[i] !== (str[len-1-i])) {
            return false
        }
    }
    return true
}

console.log(isPalindrome('121'))