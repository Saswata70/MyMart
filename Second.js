function vslidation(){
    var username= document.getElementById('exampleInputName').value;
    var email =document.getElementById('exampleInputEmail').value;
    var number = document.getElementById('exampleInputNumber').value;
    var password = document.getElementById('exampleInputPassword1').value;
    


    var usercheck = /^[A-za-z]{3,100}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}{.}{1}[A-Za-z]{2,6}$/;
    var numbercheck =/^[6789][0-9]{9}$/;
    var passwordcheck =/^(?=.[0-9])(?=.[!@#$%&*^])[A-Za-z0-9_!@#$%^&*]{8,16}$/;
    if(usercheck.test(username)){
    document.getElementById('errorname').innerHTML=" ";
  }
  else{
      document.getElementById('errorname').innerHTML = "please Use Only Alphabets";
      return false;
  }
  if(emailcheck.test(username)){
    document.getElementById('erroremail').innerHTML=" ";
  }
  else{
      document.getElementById('erroremail').innerHTML = "please follow valid email syntex";
      return false;
  }
  if(usercheck.test(username)){
    document.getElementById('errornumber').innerHTML=" ";
  }
  else{
      document.getElementById('errornumber').innerHTML = "Invalid Number";
      return false;
  }
  if(usercheck.test(username)){
    document.getElementById('errorpassword').innerHTML=" ";
  }
  else{
      document.getElementById('errorpassword').innerHTML = "please Use  Alphabets,Numbers, Speacial Characters";
      return false;
  }
}


