function solution(balls, share) {
    let upNum = 1
    let downNum1 = 1
    let downNum2 = 1
    for(let i = 1; i <= balls ; i++){
        upNum *= i     
    }
    for(let j= 1; j <= share ; j++){
            downNum1 *= j
        }
    for(let j= 1; j <= balls-share ; j++){
            downNum2 *= j
        }
    
    return  Math.round(upNum/(downNum1*downNum2))
}