function solution(array, n) {
    let arr = [];    
    array.forEach((el) => {
        arr.push(Math.abs(el - n));
    })
    
    const min = Math.min(...arr);
    
    let check = [];
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === min){
            check.push(array[i]);
        }
    }
    
    return Math.min(...check);
}