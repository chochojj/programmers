function solution(n){
    let sum = 0;
    let num = String(n)
    for(let i = 0; i < num.length; i++){
        sum += parseInt(num[i]);
    }
    return sum;
}