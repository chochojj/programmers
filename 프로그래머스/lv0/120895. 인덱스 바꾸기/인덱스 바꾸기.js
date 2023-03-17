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
    return arr.join('')
}