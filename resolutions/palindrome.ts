/**
 * Proposition de résolution pour le kata Palindrome (version TypeScript)
 * @see https://leetcode.com/problems/palindrome-number/
 */
const isPalindrome = (x: number): boolean => {
  const numbersArray = Array.from(String(x), Number);
  for (let i = 0, j = numbersArray.length - 1; i < numbersArray.length; i++, j--) {
    if (numbersArray[i] !== numbersArray[j]) {
      return false;
    }
  }
  return true;
};

// Exemple d'exécution
console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false
