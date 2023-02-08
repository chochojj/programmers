function solution(dot) {
    let direct = 0;
    if(dot[0] > 0){
        dot[1] > 0 ?  direct =1 : direct= 4
    }else{
        dot[1] > 0 ? direct= 2 : direct= 3
    }
    return direct
}