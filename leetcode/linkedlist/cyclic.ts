import { ListNode } from "./ListNode";

// Approach : We store previous nodes and use a pointer to check if next node has already been seen
// Not the best way since we allocate memory to "remember" past explored nodes.
// @see https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/773/
function hasCycle(head: ListNode | null): boolean {
  const stackNodes: ListNode[] = [];
  if (head === null) {
    return false;
  }
  if (head.next === null) {
    return false;
  }
  do {
    if (head.next !== null && stackNodes.includes(head.next)) {
      return true;
    }
    stackNodes.push(head);
    head = head.next;
  } while (head !== null);
  return false;
}

const noCycle = new ListNode(1);
console.log(hasCycle(noCycle)); // Expect : false

const smallCycle = new ListNode(1);
const ref = new ListNode(2, smallCycle);
smallCycle.next = ref;

console.log(hasCycle(smallCycle)); // Expect : true

const head = new ListNode(3);
const longerCycle = new ListNode(2);
head.next = longerCycle;
const ref2 = new ListNode(0, new ListNode(-4, longerCycle));
longerCycle.next = ref2;

console.log(hasCycle(head)); // Expect : true
