const head = [1, 2, 3, 4];

var result = [];
function swapPairs(head) {
    if (!head || !head.next) {
        return head;
    }
    var newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
    result.push(newHead.next)
};

console.log(swapPairs(head))