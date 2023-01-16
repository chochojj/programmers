function solution(n) {
    let arr = (n+"").split('');
    let newNum = arr.sort((a,b)=> b-a).join("");
    return parseInt(newNum)
}