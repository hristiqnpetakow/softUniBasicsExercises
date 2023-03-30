function giftsFromSanta(input) {

    let N = Number(input[0]);
    let M = Number(input[1]);
    let S = Number(input[2]);
    let buff = "";

    for(let i = M; i >= N; i--) { 
        if(i % 2 === 0 && i % 3 === 0) {    
            
            if(i === S) {
                break;
            }

           buff = buff + " " + i;
            
             
           
        }
        
    }
    console.log(buff);
}
giftsFromSanta(["1",
"36",
"12"])
