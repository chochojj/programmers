function solution(arr, divisor) {
    const filteredArr = arr.filter(el => el % divisor === 0);
    
    if (filteredArr.length === 0) {
        return [-1];
    }
    
    return filteredArr.sort((a, b) => a - b);
}