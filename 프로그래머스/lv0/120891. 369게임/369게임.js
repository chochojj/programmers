function solution(order) {
    return order.toString().split('').filter(n => ['3', '6', '9'].includes(n)).length;
}

// function solution(order) {
//     var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
//     return answer;
// }

// function solution(order) {
//     const mySet = new Set([3,6,9]);
//     return String(order).split('')
//                         .filter(num => mySet.has(Number(num)))
//                         .length;
// }