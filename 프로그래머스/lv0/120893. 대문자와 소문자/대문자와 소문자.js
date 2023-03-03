function solution(my_string) {
    return my_string.split('').map((el)=>{
     if(el === el.toLowerCase()) return el.toUpperCase()
        else return el.toLowerCase()
    }).join("")
       
}