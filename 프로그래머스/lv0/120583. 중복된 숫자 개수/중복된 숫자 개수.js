function solution(array, n) {
    let sum = 0
    for(let el of array){
        if(el === n)
            sum++
    }
    return sum
}


// 필터로 거른다음 길이 체크 신박하다
// function solution(array, n) {
//     var answer = 0;
//     let Array = array.filter((item) => item === n)
//     answer = Array.length

//     return answer;
// }