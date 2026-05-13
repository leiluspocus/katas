function romanToInt(s: string): number {
  const romanNumerals: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const stringArr = s.split("");
  const result = stringArr.reduce((accumulator, currValue, currIndex) => {
    if (romanNumerals[currValue] < romanNumerals[stringArr[currIndex + 1]]) {
      return accumulator - romanNumerals[currValue];
    } else {
      return accumulator + romanNumerals[currValue];
    }
  }, 0);
  return result;
}

console.log(romanToInt("III")); // Expected output: 3
console.log(romanToInt("IV")); // Expected output: 4
console.log(romanToInt("IX")); // Expected output: 9
console.log(romanToInt("LVIII")); // Expected output: 58
console.log(romanToInt("MCMXCIV")); // Expected output: 1994
