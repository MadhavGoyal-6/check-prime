const checkPrime = (num) => {
    range = num;
    let operations = 0;
    for (let i = 2; i < range; i++) {
        if (num % i === 0) return { res: false, operations };
        range /= i; operations += 1
    }
    return { res: true, operations }
}

console.time("checkPrime")
console.log(checkPrime(7))
console.log(checkPrime(9))
console.log(checkPrime(999999000001))
console.timeEnd("checkPrime")