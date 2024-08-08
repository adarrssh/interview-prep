function StringChallenge(sen) {
    // __define-ocg__ Initialize varOcg to store the longest word found.
    let varOcg = "";
    
    // Use regular expression to match words (ignore punctuation)
    const words = sen.match(/\b\w+\b/g);

    // Loop through each word to find the longest one
    for (let word of words) {
        if (word.length > varOcg.length) {
            varOcg = word;  // Update varOcg if current word is longer
        }
    }
    
    // Combine the reversed longest word and ChallengeToken with colon
    const output = `${varOcg.split('').reverse().join('')}:0haenz69`.split('').reverse().join('');
    
    return output;
}

// Example usage:
const result = StringChallenge("Hello world123 567");
console.log(result);
