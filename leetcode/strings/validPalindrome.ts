/**
 * Kata Palindrome
 * @see https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/ 
 * @param s - The String to check
 */
function isStringPalindrome(s: string): boolean {
    // Clean up all characters that are neither a number / letter / space
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Build reverse string
    const characters = cleaned.split("");
    const reverseCharacters = characters.reverse();
    const reverseString = reverseCharacters.join(""); 

    // Compare reverse and original strings
    return cleaned === reverseString;
};

console.log(isStringPalindrome("A man, a plan, a canal: Panama"))
console.log(isStringPalindrome("race a car"))
console.log(isStringPalindrome(" "))