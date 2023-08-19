// Search first occurance of value k
const solve = function(head, k) {
    let temp = head;
    while(temp != null) {
        if(temp.data == k)
            return temp;
        temp = temp.next;
    }

    return -1;
}