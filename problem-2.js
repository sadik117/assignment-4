function  validContact( contact ) {
   if (typeof contact !== "string"){
    return "Invalid"
   }

   if ( contact.length === 11 && contact.startsWith("01") ) {
    return true;
   }
   else{
    return false;
   }
   
}

const output = validContact( "01717375585" );
console.log(output);
