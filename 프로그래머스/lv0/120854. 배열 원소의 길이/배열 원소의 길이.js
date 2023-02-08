function solution(strlist) {
    let answer = [];
    for(let i= 0; i < strlist.length; i++){
        answer.push(strlist[i].length)
    }
    return answer
}

//자꾸 map이란 것이 있다는 것을 까먹는 것...
// function solution(strlist) {
//     return strlist.map((el) => el.length)
// }