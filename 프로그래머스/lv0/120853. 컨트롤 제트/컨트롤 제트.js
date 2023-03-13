function solution(s) {
    s = s.split(" ")
    // Z와 이전 요소 같이 삭제
    while(s.includes('Z')) {
        s.splice(s.indexOf('Z')-1,2)
    }
    return s.reduce((a,b) => a+Number(b), 0)
}


// function solution(s) {
//     s = s.split(" ")
//     let temp = []
//     for (let x of s) {
//         if (x === 'Z') {
//             temp.pop()
//         } else {
//             temp.push(Number(x))
//         }
//     }
//     return temp.reduce( (a,b) => {
// return a+b},0)
// }