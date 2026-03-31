function firstUniqChar(s: string): number {
    const characters = s.split("")
    const dictionnary = new Map();

    // Mapping the dictionnary character <> occurences
    for ( let i=0; i < characters.length ; i++) {
        const el = dictionnary.get(characters[i])
        if (  el === undefined ) {
            dictionnary.set(characters[i], 1)
        }
        else {
            dictionnary.set(characters[i], el+1)
        }
    }

    // Return the first element that appears once
    for ( let i=0; i < characters.length; i++) {
        const occurences = dictionnary.get(characters[i])
        if ( occurences == 1 ) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcode"))
console.log(firstUniqChar("aabb"))