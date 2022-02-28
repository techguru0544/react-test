const checkCandyBar = (num: number): String => {    
    if (num % 22 == 0) {    // it prints "candybar" if number is divisible by 22
        return 'candybar';
    } else if (num % 11 == 0) { // it prints "bar" if number is divisible by 11
        return 'bar';
    } else if (num % 2 == 0) {  // it prints "candy" if number is divisible by 2;
        return 'candy';
    }
    return num.toString(); // it prints the value of number for all other cases
}
console.log(checkCandyBar(22));
console.log(checkCandyBar(11));
console.log(checkCandyBar(2));
console.log(checkCandyBar(5));