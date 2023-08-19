// Given a LL find the kth element
const solve = function(head, k) {
    let temp = head;
    for(let i = 1; i <= k && temp != null; i++) {
        tmp = tmp.next;
    }

    return tmp == null ? -1 : tmp.data;
}