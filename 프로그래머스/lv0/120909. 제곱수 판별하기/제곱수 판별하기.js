function solution(n) {
    if(Math.sqrt(n)%1 !== 0 )return 2
    return 1
}

// 내가 하고싶었던 방법
// function solution(n) {
//     for (let i = 0; i < n/2; i++) {
//         if (i*i == n) {
//             return 1;
//         }
//     }
//     return 2;
// }