function solution(x) {
    const xSum = x.toString().split('').map(str=>Number(str)).reduce((acc,val)=>acc+val,0)
    const isHarshad = Number.isInteger(x / xSum)
    return isHarshad;
    //split만 너무 쓰는 것 같아서 순수하게 number형 타입으로 풀어보려고 구조분해할당 했는데
    //왜 틀린거지? 테스트 3, 4, 8, 10, 11
    // let [big, small] = [Math.floor(x/10), x%10]
    // return x%(big + small) === 0
}