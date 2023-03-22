function solution(num, k) {
    let n = num.toString().split('')
    if(n.includes(k.toString())) return n.indexOf(k.toString())+1
    else return -1
}