function solution(numbers) {
    let num = 0;
    for(let el of numbers){
        num += el
    }
    return num/numbers.length
}