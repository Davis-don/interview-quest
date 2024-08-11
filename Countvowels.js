function countVowels(string) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of string) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}



//test statement
console.log(countVowels("AEIOU")); 
