import { ListNode } from "./ListNode";

function isPalindrome(head: ListNode | null): boolean {
  if (head === null) {
    return false;
  }
  let tail: ListNode | null = head;
  let previousNodes: ListNode[] = [];
  while (tail !== null) {
    tail = tail.next;
    if (tail !== null) {
      previousNodes.push(tail);
    }
  }

  tail = previousNodes.pop() ?? null;
  while (tail !== null) {
    if (tail !== null && head !== null && tail.val !== head.val) {
      return false;
    }
    tail = previousNodes.pop() ?? null;
    head = head?.next ?? null;
  }
  return true;
}

const falseHead = new ListNode(1, new ListNode(2));
console.log(isPalindrome(falseHead)); // Should return false

const trueHead = new ListNode(
  1,
  new ListNode(2, new ListNode(2, new ListNode(1))),
);
console.log(isPalindrome(trueHead)); // Should return false
