function solution(n) {
    let arr = String(n).split('')
    let sum = 0;
    for(let el of arr){
        sum += Number(el)
    }
    return sum
}