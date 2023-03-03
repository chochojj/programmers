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