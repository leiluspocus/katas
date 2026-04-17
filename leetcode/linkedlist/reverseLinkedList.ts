import { ListNode, displayList } from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
    let cursor = head;
    let newFirstElement : ListNode | null = null;
    const previousElementsStack : ListNode[] = [];

    if ( head === null ) {
        return null;
    }

    // Création de la stack des éléments précédents
    do {
        if ( cursor !== null) {
            if ( cursor.next === null ) { 
                newFirstElement = cursor;
                break;
            }
            previousElementsStack.push(cursor);
            cursor = cursor.next;
        }
    }
    while ( cursor !== null );

    // Reconstitution de la liste à l'envers
    if ( previousElementsStack[0] !== undefined ) {
        previousElementsStack[0].next = null; 
    }
    while ( previousElementsStack.length > 0 ) {
        const previousElement = previousElementsStack.pop();  
        cursor.next = previousElement;
        cursor = cursor.next;
    }
    return newFirstElement;
};

// First simple case
const head = new ListNode(1, new ListNode(2));
displayList(reverseList(head)); // Output: [2,1]

// Complex case

const complexHead = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
displayList(reverseList(complexHead)); // Output: [5,4,3,2,1] 


const emptyHead = null;
displayList(reverseList(emptyHead)); // Output: [5,4,3,2,1] 

