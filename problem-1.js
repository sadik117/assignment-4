function calculateVAT( price ) {
    if ( typeof price !== "number"  || price < 0 ) {
        return "Invalid";
    }

    const vatAmount = (price * 7.5) / 100;
    return vatAmount;
}


const aftermath = calculateVAT( "foo" );
console.log(aftermath);