function solution(my_string) {
    let arr = [...my_string]
    let sum = 0;
    for(let el of arr){
        if(Number(el)){
            sum += Number(el)
        }
    }
    return sum
}