/**
 * Resolving the kata - Reverse Integer
 * LeetCode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/ 
 * @param x 
 * @returns 
 */
function reverse(x: number): number {
    let s = String(x).split(''); 
    let isNegative = false;
    for ( let i=0, j=s.length -1 ; i < j; i++, j--) {
        const tmp = s[i]; 
        s[i] = s[j]
        s[j] = tmp     
    }
    if ( s[s.length-1] === '-') {
        isNegative = true;
        s.pop()
    }
    const tmp = String((isNegative ? '-': '') + s.join(''));
    const result =  Number(tmp); 
    if ( result > Math.pow(2, 31) || result < -Math.pow(2,31)) {
        return 0;
    }
    return result;
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(1534236469))