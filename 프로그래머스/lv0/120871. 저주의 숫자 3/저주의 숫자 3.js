//숫자를 뛰어넘고 나온 결과가 3의 배수이거나 3이 들어가는 숫자일수도 있음
// 즉, 한 번의 연산으로 끝나는것이 아닌 3의 배수이거나 3이들어가지 않는 숫자가 나올 때까지 연산을 해야한다
//따라서 단순히 if 가 아니라 while에 조건을 걸어 조건을 만족하지 않을 때까지 1을 증가시키는 것으로 해결해야함
// function solution(n) {
//     let count = 0
//     for(let i = 1 ; i <= n ; i ++) {
//         count++
//         if( i%3 === 0 || String(i).includes('3')){
//             count++
//         }
//     }
//     return count
// }

function solution(n) {
    let count = 0
    for(let i = 1 ; i <= n ; i ++) {
        count++
        while( count%3 === 0 || String(count).includes('3')){
            count++
        }
    }
    return count
}
