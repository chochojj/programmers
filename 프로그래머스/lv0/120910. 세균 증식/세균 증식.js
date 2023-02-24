function solution(n, t) {
    for(let i = 1; i <= t; i++){
        n *= 2
    }
    return n
}

// 제곱 매서드 사용
// function solution(n, t) {

//     return n*Math.pow(2,t);
// }