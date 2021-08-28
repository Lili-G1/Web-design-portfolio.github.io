
function validate() {

    var first = document.contactForm.firstName.value;
    var last = document.contactForm.lastName.value;
    var emailID = document.contactForm.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    var address = document.contactForm.address.value;
    var city = document.contactForm.city.value;
    var zipcode = document.contactForm.zipcode.value;
    var quantity = document.contactForm.quantity.value;
    var state=
       document.getElementById("state"); 
    var phone =
        document.contactForm.phone.value; 
    var orderdesc =
     document.contactForm.orderdesc.value; 
    var phonetype = document.querySelector('input[name="phonetype"]:checked');

    
    
//Verifies that there is an input and that it is greater than 1 character
			 if( first == "" || first.length < 2) 
			 {
				alert( "Please provide a valid First Name!" );
				first.focus() ;
				return false;
			 }
//Verifies last name  
             if( last == "" || last.length < 2) 
			 {
				alert( "Please provide a valid Last Name!" );
				last.focus() ;
				return false;
			 }
//Verifies email input
            if( emailID == ""|| atpos < 1 || ( dotpos - atpos < 2 ) ) 
			 {
				alert( "Please provide a valid email address" );
				emailID.focus() ;
				return false;
			 }
// Verifies 10 digit phone number input
            if(phone == "" || phone.length !=10 || isNaN(phone)){

            alert( "Please provide a valid Phone Number" );
				phone.focus() ;
				return false;
    
            }
    
//Verify Phone radio buttons
            if(phonetype == null){
                alert("Please select: Cell or Business");
                return false;
                }
    
           
//Verify address input
            if(address == "" || address.length < 5 ){

            alert( "Please provide  valid Address information" );
				address.focus() ;
				return false;
    
            }
 
//Verify city input
        if( city == "" || city.length < 2) 
			 {
				alert( "Please provide City information" );
				city.focus() ;
				return false;
			 }
//Verfy State input  
        if( state.selectedIndex == 0) 
			 {
				alert( "Please Select a State" );
				state.focus() ;
				return false;
			 }
    
    
//Verifies that ZipCode are 5 digits
            if( zipcode == "" || isNaN( zipcode) || zipcode.length != 5 ) 
			 {
				alert( "Please provide a zipcode in the format #####." );
				zipcode.focus();
				return false;
			 }
 //Verifies Quantity
            if( quantity == "" || isNaN(quantity) || quantity < 1) 
			 {
				alert( "Please indicate quantity" );
				quantity.focus() ;
				return false;
			 }
//Verifies input for order description
            if( orderdesc == "" || orderdesc.length < 1){
                alert( "Please indicate what you will like to order" );
				orderdesc.focus() ;
				return false;
            }

    alert("Submission Complete-Thank You For Ordering From Saab Sweets!");
    return true;
}

    

//Function verfies radio button selection
//function validateradio(){
//    var phonetype = document.contactForm.phonetype.value;
//    if((phonetype[0].checked == false) && (phonetype[1].checked == false)){
//        
//        alert("Please select: Cell or Business");
//        phone.focus();
//        return false;
//    }
//    return true;
//}

//Function verifies state selection



//Function Verfies email Address
/*function validateEmail() 
		{
			var emailID = document.contactForm.email.value;
			atpos = emailID.indexOf("@");
			dotpos = emailID.lastIndexOf(".");

			if (atpos < 1 || ( dotpos - atpos < 2 )) 
			{
				alert("Please enter a valid email address")
                
				emailID.focus() ;
				return false;
			}
return true;
}*/