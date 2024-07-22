function isPalindrome(str) {
    // Reverse the string
    const reversedStr = str.split('').reverse().join('');
    
    // Check if the original string and the reversed string are the same
    return str === reversedStr;
}

module.exports = isPalindrome;