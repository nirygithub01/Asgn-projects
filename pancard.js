function validateform () {
    const firstname=document.registration.fname.value;
    const lastname=document.registration.lname.value;
    const fathername=document.registration.faname.value;
    const mothername=document.registration.moname.value;
    
    const Email=document.registration.email.value;
    const atposition= email.indexOf('@');
    const dotposition=email.lastindexOf('.');
    
    const Mobile=document.regitration.mobile.value;
    const Adharcard=document.registration.adharcard.value;
    const Password=document.registration.password.value;
    const DoB=document.registration.dob.value;
    const Gender=document.registration.gender.value;
    const Pincode=document.regitration.pincode.value;
    const Nationality=document.regitration.nationality.value;
 

   
       
    if( firstname.value.length<1){
      alert("Enter  First Name");
      firstname.focus();  
      //document.getElementById("nameloc").innerHTML="Enter  Name";
        return false;
    }
    else if(lastname.value.length<1){
       alert("Enter  Last Name");
       lastname.focus();
       return false;
    }
  
    else if(atposition < 1 || dotposition < atposition + 2 || dotposition + 2 > Email.length){
       alert("Enter Your valid Email-Id");
       Email.focus();
      //document.getElementById("emailloc").innerHTML= "Enter valid email address";
    return false;
    }
   
    else if(Gender.value== 0){
     alert("Choose Gender")
     Gender.focus();
     return false;
    
    }
    else if(DoB.value == 0){
      alert("Enter  date of birth")
      DoB.focus();
      return false;
}
else if(Pincode.value.minlength ==6 || Pincode.value.maxlength == 6 ){
  alert("Enter Pincode Number");
  Pincode.focus();
  return false;
 }
 else if(Mobile.value.minlength == 10 ){
  alert("Enter Mobile number");
  Mobile.focus();
  return false;
 }
 else if(Adharcard.value.minlength == 12 || Adharcard.value.maxlength == 12){
  alert("Enter Adharcard Number");
  Adharcard.focus();
  return false;
 }
 else if(Permanentadd.value.length < 1){
  alert("Enter your college Name");
  Permanentadd.focus();
  return false;
 } 

  else if(Currentadd.value.length < 1){
  alert("Enter your college Name");
  Currentadd.focus();
  return false;
 }
 else if(Password.value.length < 6){
  alert("Enter more than 6 number Password");
  Password.focus();
  return false;
 }
 
 else if(Nationality.value.length == null){
  alert("Enter  Nationality");
  Nationality.focus();
  return false;
 }
 

    else{
      alert("submitted")
      return true;
    }

}