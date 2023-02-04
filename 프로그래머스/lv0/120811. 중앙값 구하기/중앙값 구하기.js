function solution(array) {
    let arr = array.sort((a, b) => a - b);
    let num = Math.floor(array.length / 2);
    return arr[num]
}