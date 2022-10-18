//Q3. Write a regular expression that matches only a prime number. Numbers will be presented as strings.

function isPrime(n) {
    return !(Array(n+1).join(1).match(/^1?$|^(11+?)\1+$/));
}

console.log(isPrime(7));

console.log(isPrime(134));