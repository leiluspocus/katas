/**
 * Plus One Kata 
 * @see Leetcode https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/ 
 * Complexity : O(n)
 */

function plusOne(digits: number[]): number[] {
    let digit = '';
    // Let's turn the array of digits into a string 
    for ( let i=0; i < digits.length; i++) {
        digit = digit + digits[i] 
    } 
 
    // Let's convert the string to a number
    let digitNumber = BigInt(digit);
 
    // Let's increment it
    digitNumber++; 

    // Let's turn it into an array
    const numberString : string[] = String(digitNumber).split("")

    // Let's convert the array of string into an array of numbers
    const result = []
    for ( let i = 0; i < numberString.length ; i++) {
        result.push(Number(numberString[i]))
    } 
    console.log(result);
    return result;
};

plusOne([1,2,3]);
plusOne([4,3,2,1]);
plusOne([9]);
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]); // Large number case that made me use  BigInt instead of a plain Number l.15
