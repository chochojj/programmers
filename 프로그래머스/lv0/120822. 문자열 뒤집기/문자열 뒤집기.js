function solution(my_string) {
    let reverse = '';
    for(let i = my_string.length -1; i >=0; i--){
        reverse += my_string[i]
    }
    return reverse
}


//split으로 나눠서 매서드로 해결하는 방법
// function solution(my_string) {
//     return my_string.split('').reverse().join('');
// }

//stread 문법으로 푸는 방법
// function solution(my_string) {
//     var answer = [...my_string].reverse().join("");
//     return answer;
// }