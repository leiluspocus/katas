export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function displayList(head: ListNode | null) {
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