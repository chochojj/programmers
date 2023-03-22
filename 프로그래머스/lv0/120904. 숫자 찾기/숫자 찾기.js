function solution(num, k) {
    let n = num.toString().split('')
    if(n.includes(k.toString())) return n.indexOf(k.toString())+1
    else return -1
}

// function solution(num, k) {
//     return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
// }
