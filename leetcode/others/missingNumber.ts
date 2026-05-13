function missingNumber(nums: number[]): number {
  // Sort the array ascendingly
  nums.sort((a, b) => a - b);

  // Check which number is missing
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
  return nums.length;
}

console.log(missingNumber([3, 0, 1])); // Expected output: 2
console.log(missingNumber([0, 1])); // Expected output: 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Expected output: 8
