function solution(my_string) {
    return my_string.toLowerCase().split("").sort().join("")
}


//구조분해할당 사용하기
// function solution(s) {
//     return [...s.toLowerCase()].sort().join('')
// }