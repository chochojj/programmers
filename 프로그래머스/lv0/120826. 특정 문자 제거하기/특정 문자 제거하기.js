function solution(my_string, letter) {
    let newStr = [...my_string];
    newStr = newStr.filter((el)=> el !== letter).join('');
    return newStr
    
}