/**
 * Kata Leet Code - Longest Common Prefix
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
 * @param strs 
 * @returns 
 */
function longestCommonPrefix(strs: string[]): string {
    // Build matrix
    const matrix : string[][] = []
    let shortestStringLength = strs[0].length;
    let prefix = ""
    for ( let i=0; i < strs.length ; i++) { 
        if ( strs[i].length < shortestStringLength ) {
            shortestStringLength = strs[i].length
        }
        matrix.push(strs[i].split(""))
    }
 
    if ( matrix.length === 1 ) {
        return strs[0];
    }
    for ( let column =0; column < shortestStringLength ; column++) { 
        for ( let line = 0; line < matrix.length - 1 ; line++) {
            if ( matrix[line][column] !== matrix[line+1][column]) { 
                return prefix;
            }
            else {
                // If we reached the comparison of the two last lines of the matrix
                if ( line === matrix.length - 2 ) { 
                    prefix = prefix + matrix[line][column]
                }
            }
        }
    } 
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["cir","car"]));