function isPowerOfThree(n: number): boolean {
    if ( n < 1 ) {
        return false;
    }
    if ( n === 1) {
        return true;
    } 
    for ( let i = 1; i <= n; i++) {
        if ( Math.pow(3, i)  === n ) { 
            return true;
        }
        if ( Math.pow(3, i)  > n ) { 
            return false;
        }
    } 
    return false;
};

console.log("27 : ", isPowerOfThree(27)); // true
console.log("0 : ", isPowerOfThree(0)); // false
console.log("-1 : ", isPowerOfThree(-1)); // false
console.log("9 : ", isPowerOfThree(9)); // true = 3*3
console.log("45 : ", isPowerOfThree(45)); // false 
console.log("1 : ", isPowerOfThree(1)); // true
 