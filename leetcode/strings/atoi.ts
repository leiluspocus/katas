function myAtoi(s: string): number {
    // Remove whitespaces from string
    s = s.trim();

    // Check if number should be negative
    let characters = s.split(""); 
    let isNegative = false;
    if (characters[0] === "-" || characters[0] === "+") {
        isNegative = characters[0] === "-";
        characters = characters.slice(1);
    }
    // Premier caractère doit être un chiffre (sinon conversion invalide -> 0)
    if (!characters[0] || /^[^0-9]$/.test(characters[0])) {
        return 0;
    }
    const result = parseInt(characters.join("")) * (isNegative? -1 : 1);

    // Handle bounds
    const upperBound = Math.pow(2, 31);
    const lowerBound = -1 * upperBound;
    if ( result >= upperBound ) {
        return upperBound - 1;
    }
    if ( result < lowerBound ) {
        return lowerBound;
    }
    return result;
};

console.log(myAtoi("-91283472332"));

console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("42")); // 42
console.log(myAtoi(" -042")); // -42
console.log(myAtoi("1337c0d3")); // 1337
console.log(myAtoi("0-1")); // 0
console.log(myAtoi("   -042")); // -42
console.log(myAtoi("2147483648")); // 2147483647