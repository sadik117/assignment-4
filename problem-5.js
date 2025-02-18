function  calculateSleepTime( times ) {

    let totalTime = 0;

    for ( i = 0; i < times.length; i++){

        if ( typeof times[i] !== "number" ){
            return "Invalid"
        } 

        let time = times[i];
        totalTime += time;         
}   

        const hour = Math.round(totalTime / (60 * 60));
        const minute = Math.round((totalTime % (60 * 60)) / 60);
        const second = Math.round(totalTime % 60);
       
        return {
            hours: hour,
            minutes: minute,
            seconds: second
          };
    
    
}

const outcome = calculateSleepTime( [1000, 2000, 725] );
console.log(outcome);