/**
 * Proposition de résolution pour le palindrome
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
    const numbersArray = Array.from(String(x), Number);
    for ( let i =0, j = numbersArray.length-1; i <numbersArray.length; i++, j--) { 
        if (numbersArray[i] !== numbersArray[j] ) {
            return false
        }
    }
    return true;
};
