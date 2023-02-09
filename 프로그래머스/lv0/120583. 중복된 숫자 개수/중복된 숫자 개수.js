function solution(array, n) {
    let sum = 0
    for(let el of array){
        if(el === n)
            sum++
    }
    return sum
}