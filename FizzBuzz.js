function FizzBuzz(n) {
    // If the number is divisible by 3 and 5, return 'FizzBuzz'
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (n % 5 === 0) {
        return 'Buzz';
    }
}

console.log(FizzBuzz(20));

