function FizzBuzz(n) {
    // If the number is divisible by 3 and 5, return 'FizzBuzz'
    if (n % 3 === 0) {
        return 'FizzBuzz';
    }
}

// Made to pass
console.log(FizzBuzz(6));
// Made to fail
console.log(FizzBuzz(97));

