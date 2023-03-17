function solution(my_string, num1, num2) {
    let arr = my_string.split('')
    let n1 = arr[num1]
    let n2 = arr[num2]
    for(let i = 0; i < my_string.length; i++){
        if(i===num1){
            arr[num1] = n2
        }
        if(i===num2){
            arr[num2] = n1
        }
    }
    //위의 포문의 역할을
    // [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    // 로 바꿔 써도 같은 기능을 함
    return arr.join('')
}