function solution(chicken) {
    let count = 0;
     while(chicken >= 10){
    	count += Math.floor(chicken / 10);
         chicken = chicken % 10 + Math.floor(chicken / 10);
    }
    return count;
}