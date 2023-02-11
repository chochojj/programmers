function solution(n) {
    //일단 약수들을 구해서 배열에 넣어보기
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(n%i === 0 ){
            arr.push(i)
        }
    }
    return arr.length
}