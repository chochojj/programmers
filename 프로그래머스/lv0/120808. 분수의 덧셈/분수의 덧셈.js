function solution(numer1, denom1, numer2, denom2) {
    let upNum = numer1*denom2 + denom1*numer2
    let downNum = denom1*denom2
    let divNum = 1;
    for(let i = 2; i <= downNum; i++){
        if(upNum%i === 0 && downNum%i === 0){
            divNum = i
        }
    }
    return [upNum/divNum, downNum/divNum];
}