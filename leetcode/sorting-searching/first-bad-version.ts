var solution = function (isBadVersion: any) {
  return function (n: number): number {
    // Binary search
    let left = 1;
    let right = n;
    while (left < right) {
      const middle = Math.floor((left + right) / 2);
      if (isBadVersion(middle)) {
        right = middle;
      } else {
        left = middle + 1;
      }
    }
    return left;
  };
};
