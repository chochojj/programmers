function solution(num_list, n) {
    let answer = [];
    for(let i = 0; i< num_list.length;){
        let result = []
        for(let j = 0; j < n ; j++){
            result.push(num_list[i])
            i++
        }
        answer.push(result)
    }
    return answer
}


// function solution(num_list, n) {
//     var answer = [];

//     while(num_list.length) {
//         answer.push(num_list.splice(0,n));
//     }

//     return answer;
// }
