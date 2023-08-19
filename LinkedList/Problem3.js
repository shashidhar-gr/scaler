// Given LL, insert new element in LL with value x and at kth position.
// k will be zero based.

const solve = function(head, k, x) {
    let node = new Node(x);
    let temp = head;

    if(k == 0) {
        
    }

    for(let i = 0; i <= k; i++) {
        temp = temp.next;
    }
    node.next = temp.next;
    temp.next = node;
}

