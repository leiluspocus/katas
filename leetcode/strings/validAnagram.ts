function buildDictionnary(characters: string[]) : Map<string, number> {
    const dictionnary = new Map();

    for ( let i=0; i < characters.length ; i++) {
        const el = dictionnary.get(characters[i])
        if (  el === undefined ) {
            dictionnary.set(characters[i], 1)
        }
        else {
            dictionnary.set(characters[i], el+1)
        }
    }

    return dictionnary
}

/**
 * Check if valid anagram
 * @see LeetCode: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/ 
 * @param s 
 * @param t 
 * @returns 
 */
function isAnagram(s: string, t: string): boolean {
    if ( s.length !== t.length ) {
        return false;
    }
    const sArr = s.split("");
    const dictionnaryS = buildDictionnary(sArr)

    const tArr = t.split("")
    const dictionnaryT = buildDictionnary(tArr)

    // Check that both dictionnaries are equal ...

    // ... in terms of content
    for (const [key, value] of dictionnaryS.entries()) {
        if (dictionnaryT.get(key) === undefined) {
            return false; 
        }
        if (dictionnaryT.get(key) !== value) {
            return false;
        }
    }

    // ... in terms of size 
    if (dictionnaryS.size !== dictionnaryT.size ) {
        return false;
    }
 
    return true;
};

console.assert(true, isAnagram("anagram", "nagaram"))
console.assert(false, isAnagram("rat", "car")); // Expected : False