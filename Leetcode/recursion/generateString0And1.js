/**
 * @param {number} n
 * @return {string[]}
 */
function generateBinaryStrings(n) {
    const result = [];
    if (n === 0) return result;

    // Helper function to recursively build binary strings
    function buildString(curr, lastChar) {
        if (curr.length === n) {
            result.push(curr);
            return;
        }
        
        if(lastChar === '1'){
            buildString(curr + '0', '0');
        }else{
            buildString(curr + '0', '0');
            buildString(curr + '1', '1');
            
        }
    }

    // Start the recursion with an empty string and no last character
    buildString('', '');

    return result;
}

// Example usage:
const n = 3;
console.log(generateBinaryStrings(n));  // Output: [ '000', '001', '010', '100', '101' ]
