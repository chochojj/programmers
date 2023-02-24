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


// 왼쪽 시프트 (<<) 라는 게 있다고 함
// function solution(n, t) {
//   return n << t;
// }
