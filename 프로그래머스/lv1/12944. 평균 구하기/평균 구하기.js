//방법 1
//가장 기본적인 방법
//모든 배열 요소의 합을 구해서 배열 길이로 나누어 줌
function solution(arr) {
    var answer = 0;
    let sum = 0;
    for(let i = 0; i <arr.length; i++){
        sum = sum + arr[i];
    }
    answer = sum / arr.length;
    return answer;
}

//방법 2
//내장 고차함수 reduce 사용 
//길이는 더 짧아짐
function solution(arr) {
    return arr.reduce((acc, cur)=> acc+ cur) / arr.length;
}

//두 코드의 실행시간 차이는 별로 없는듯 
//같은 횟수를 반복해서 그런가?
