function solution(emergency) {
    //slice를 사용해서 원래 emergency 배열이 수정되지 않게 해줘야함 
    let order = emergency.slice().sort((a,b)=> b-a)
    //index 값은 0부터 시작하니까 순서를 매길때 +1 해줘야함
    return emergency.map((el)=> order.indexOf(el)+1)
    
}