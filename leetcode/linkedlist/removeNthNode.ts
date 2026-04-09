import { ListNode } from "./ListNode";

function displayList(head: ListNode | null) {
    if (head === null) {
        console.log("List is empty (head = null)");
        return;
    }

    let cursor: ListNode | null = head;
    let index = 0;
    const chain: string[] = [];

    while (cursor !== null) {
        const nextValue = cursor.next ? cursor.next.val : null;
        // console.log(`[${index}] val=${cursor.val} -> next=${nextValue}`);
        chain.push(String(cursor.val));
        cursor = cursor.next;
        index++;
    }

    console.log(`chain: ${chain.join(" -> ")} -> null`);
}

/**
 * @see https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/
 * @param head 
 * @param n 
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if ( head === null) {
        return head;
    }
    let cursor : ListNode | null = head; 
    let previousCursor : ListNode | null = null;
    while(cursor !== null) {
        let potentialNthNode : ListNode | null = cursor;
        for ( let i=0; i < n ; i++) {
            potentialNthNode = (potentialNthNode === null) ? null: potentialNthNode.next;
        }
        if ( potentialNthNode === null) { 
            if ( previousCursor === null ) {
                return cursor.next;
            }
            // Means that cursor is the Nth node, we delete it
            previousCursor.next = cursor.next;   // ← modifie le nœud dans la liste
            return head
        }
        previousCursor = cursor;
        cursor = cursor.next;
    }
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
displayList(removeNthFromEnd(head, 2)); // Expecting: [1,2,3,5]


const head2 = new ListNode(1)
displayList(removeNthFromEnd(head2, 1)); // Expecting: []

const head3 = new ListNode(1, new ListNode(2))
displayList(removeNthFromEnd(head3, 1)); // Expecting: [1]


const xx = new ListNode(1, new ListNode(2))
displayList(removeNthFromEnd(xx, 2)); // Expecting: [1]