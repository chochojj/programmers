function solution(before, after) {
    //정확성 65.2 퍼센트 ㅜㅠ
    //순서를 바꾸는게 뒤집는거 말고도 개별 요소의 이동도 있음
    // return before.split("").reverse().join("") === after ? 1 : 0
    
    //두 매개변수를 같은 처리를 해서 비교하기
    return before.split("").sort().join("") === after.split("").sort().join("") ? 1 : 0
    // return before === after ? 1 : 0
}