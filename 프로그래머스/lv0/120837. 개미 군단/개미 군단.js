function solution(hp) {
    let sum = 0;
    if(hp >= 5) sum += Math.floor(hp/5)
    if(hp%5 >= 3) sum += Math.floor(hp%5/3)
    if(hp%5%3 >= 1) sum += Math.floor(hp%5%3/1)
    return sum
}