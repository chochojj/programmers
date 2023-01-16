function solution(n) {
    let sum = 0;
    for(let i = 1; i <=n; i ++){
        if(n % i === 0){
            sum = sum + i
        }
    }
    return sum
}


// 테스트 16 런타임 에러
// function solution(n) {
//     let arr = [];
//     for(let i = 1; i <=n; i ++){
//         if(n % i === 0){
//             arr.push(i);
//         }
//     }
//     return arr.reduce((acc, cur)=> acc + cur)
// }