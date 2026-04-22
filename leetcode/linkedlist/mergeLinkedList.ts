import { ListNode, displayList } from "./ListNode";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  // Choisir la tête initiale
  let head: ListNode;
  if (list1.val <= list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }
  // tail = dernier noeud de la liste fusionnée
  let tail = head;
  // Fusion classique
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  // Raccrocher le reste
  tail.next = list1 !== null ? list1 : list2;
  return head;
}

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
displayList(mergeTwoLists(list1, list2)); // Expect : 1, 1, 2, 3, 4, 4
