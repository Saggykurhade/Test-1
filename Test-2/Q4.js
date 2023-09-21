var l1 = [];
var l2 = [];

function mergeTwoLists (l1, l2) {
    
    if (!l1) return l2;
    if (!l2) return l1;
    
    if (l1.val < l2.val) {
        l1 = mergeTwoLists(l2);
        return l1;
    } else {
        l2 = mergeTwoLists(l1);
        return l2;
    }
};

console.log(mergeTwoLists(l1,l2))