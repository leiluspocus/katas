/**
 * Proposition de résolution pour le kata Parentheses (version TypeScript)
 */
import Stack from "./stack";

const parenthesis = (str: string): boolean => {
    const tab = str.split("");
    const stack = new Stack([]);
    for (const char of tab) { 
        if (char === "(") { 
            stack.push(char); 
        } else if (char === ")") {
            if ( stack.isEmpty() ) {
                return false;
            } 
            stack.pop();  
        }
    }
    return stack.isEmpty();
}

console.log(parenthesis("()")); // true
console.log(parenthesis(")(()))")); // false
console.log(parenthesis("(")); // false
console.log(parenthesis("(())((()())())")); // true