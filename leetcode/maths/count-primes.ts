function isPrime(n: number): boolean {
  if (n <= 1) return false;
  for (let i = n; i > 0; i--) {
    if (i !== n && i !== 1 && n % i === 0) return false;
  }
  return true;
}

function countPrimesNotEfficient(n: number): number {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}

// Sieve of Eratosthenes
function countPrimes(n: number): number {
  let primeNumbers = new Array(n).fill(true);

  primeNumbers[0] = false;
  primeNumbers[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (primeNumbers[i]) {
      for (let j = i * i; j <= n; j += i) {
        primeNumbers[j] = false;
      }
    }
  }

  return primeNumbers.filter((value) => value === true).length;
}

console.log(isPrime(2)); // Expected output: true
console.log(isPrime(3)); // Expected output: true
console.log(isPrime(4)); // Expected output: false
console.log(isPrime(5)); // Expected output: true
console.log(isPrime(6)); // Expected output: false
console.log(isPrime(7)); // Expected output: true
console.log(isPrime(8)); // Expected output: false
console.log(isPrime(9)); // Expected output: false
console.log(isPrime(10)); // Expected output: false

console.log(countPrimes(10)); // Expected output: 4
console.log(countPrimes(0)); // Expected output: 0
console.log(countPrimes(1)); // Expected output: 0
console.log(countPrimes(499979)); // Expected output: 41537
