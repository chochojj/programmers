function solution(polynomial) {
    let arr = polynomial.split(' + ')
    let value = 0;
    let constant = 0;
    arr.map((el)=>{
        if(el.includes("x")){
            const count = el.split("x")
            count[0] ? value += parseInt(count[0]) : value++
        } else if (el!== "+"){
            constant += parseInt(el)   
        }
    })
    if(value !== 0 && constant !== 0){
        if(value===1){
             return `x + ${constant}`
        }  
            return `${value}x + ${constant}`
        
    }
    if(value ===0 && constant !==0){
        return `${constant}`
    }
    if(value !==0 && constant ===0){
        if(value===1){
            return "x"
        }
        return `${value}x`
    }
    if(value===0 && constant ===0){
        return "0"
    }
}