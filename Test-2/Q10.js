var lists = [[1, 4, 5],[1, 3, 4],[2,6]]

// function mergeKLists(lists) {
//     if (!lists.length) {
//         return null;
//     }

//     for (var i = 1; i < lists.length; i++) {
//         lists[0] = merge(lists[i]);
//     }

//     return lists[0];
// };

// function merge(l1, l2) {
//     if (l1 == null) {
//         return l2;
//     }
    
//     if (l2 == null) {
//         return l1;
//     }

//     if (l1.val < l2.val) {
//         l1 = merge(l2);
//         return l1;
//     }else {
//         l2 = merge(l1);
//         return l2
//     }
// };

console.log(lists[0].values[0])