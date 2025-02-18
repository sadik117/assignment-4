function  willSuccess( marks ) {

    if( !Array.isArray(marks)){
        return "Invalid";
    }

    let pass = [];
    let fail = [];
    for ( let i = 0; i < marks.length; i++){
         let mark = marks[i]
         if(mark >= 50){
            pass++;
         }
         else{
            fail++;
         }            
    }
       if(pass > fail){
        return true;
       }
       else{
        return false;
       } 
}

const outcome = willSuccess( [60, 70, 80, 40, 30] )
console.log(outcome);

