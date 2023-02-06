function solution(n) {
    let num = Math.floor(n/7)
    if(n%7===0){
        num = num
    }else{
        num = num + 1
    }
    return num
}