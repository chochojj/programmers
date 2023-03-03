function solution(my_string) {
    return my_string.split('').map((el)=>{
     if(el === el.toLowerCase()) return el.toUpperCase()
        else return el.toLowerCase()
    }).join("")
       
}


//삼항연산자 사용해도 편하겠다
// function solution(my_string) {
//     var answer = '';
//     for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
//     return answer;
// }
