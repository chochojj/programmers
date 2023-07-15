function solution(babbling) {

    var arr = ["aya", "ye", "woo", "ma"];
    var word = "";
    var answer = 0;

    for(let i=0; i<babbling.length; i++) {

        word = babbling[i].toString();

        for(let j=0; j<arr.length; j++) {

            word = word.replaceAll(arr[j], ' ');    

        }


        if( word.trim().length == 0) {
            answer++;
        }

    }


    return answer;
}