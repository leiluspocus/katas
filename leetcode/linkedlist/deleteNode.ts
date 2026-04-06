/**
 * @see https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/
 */
import { ListNode } from "./ListNode";

function deleteNode(node: ListNode | null): void {
    node.val = node?.next.val;
    node.next = node.next?.next; 
}

const brothers = new ListNode(5, new ListNode(1, new ListNode(9)));
const head = new ListNode(4, brothers); 
deleteNode(brothers); 
console.log(head)