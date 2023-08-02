function solution(cards1, cards2, goal) {
    for(const s of goal) {

        if(cards1[0] == s) {
            cards1.shift();
        } else if(cards2[0] == s) {
            cards2.shift();
        } else {
            return "No"
        }
    }

    return "Yes";
    
    // 이건 왜 안되는데
    //map은 결국 배열을 뱉어내는데 반환에서 제대로 처리가 안되는게 문제점
    // goal.map((el)=>{
    //     if(cards1[0] === el){
    //         cards1.shift()
    //     }else if(cards2[0] === el){
    //         cards2.shift()
    //     }else{
    //         return "No"
    //     }
    // })
    // return "Yes"
}