function solution(my_str, n) {
    let arr = []
    let myArr = my_str.split("")
    
    while(myArr.length > 0){
      arr.push(myArr.splice(0,n).join("")) 
    }

    return arr
}
