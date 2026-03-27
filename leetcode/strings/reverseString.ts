function reverseString(s: string[]): void { 
    for ( let i=0, j=s.length -1 ; i < j; i++, j--) {
        const tmp = s[i];
        s[i] = s[j]
        s[j] = tmp
    }
};

reverseString(["h","e","l","l","o"])