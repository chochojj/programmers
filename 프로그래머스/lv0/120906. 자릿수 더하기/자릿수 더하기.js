function solution(n) {
    let arr = String(n).split('')
    let sum = 0;
    for(let el of arr){
        sum += Number(el)
    }
    return sum
}

//방법 1 map으로 배열을 일괄 정수형 변환을 시켜주기 가능
//방법 2 reduce로 배열 더해주기 가능