function solution(age) {
    let alp = 'abcdefghij'
    let arr = [...alp]
    let num = age.toString();
    let trans = '';

    for(let i = 0; i < num.length; i++){
        trans +=arr[num[i]]
    }
     
     return trans
}