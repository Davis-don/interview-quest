function filterEvenNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
}

//test statement
console.log(filterEvenNumbers([0,-2,-4]));

