function solution(n) {
    let result = 0
    for(let i = 1 ; i <= 10; i++) {
        if(n >= fac(i)) {
            result = i
            continue
        } else {
            break
        }
    }
    return result
}
// 팩토리얼 함수
function fac(num) {

    if(num > 1) return num*fac(num-1)
    return num
}

//숫자를 먼저 계산해서 구하는 방법도 있음 신박
// let solution=n=>10-[0,1,2,6,24,120,720,5040,40320,362880,3628800,n].sort((a,b)=>a-b).reverse().indexOf(n)