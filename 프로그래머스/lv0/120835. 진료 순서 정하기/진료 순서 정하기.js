function solution(emergency) {
    //slice를 사용해서 원래 emergency 배열이 수정되지 않게 해줘야함 
    //let order = emergency.sort((a,b)=> b-a) (x)
    // 구조분해로도 수정되지 않음 === 깊은 복사
    // 얕은 복사는 주소값을 복사하기 때문에 원본 변경 시 복사한 값도 변경이 됨
    // let sort = [...emergency].sort((a, b) => b - a);
    let order = emergency.slice().sort((a,b)=> b-a)
    //index 값은 0부터 시작하니까 순서를 매길때 +1 해줘야함
    return emergency.map((el)=> order.indexOf(el)+1)
    
}