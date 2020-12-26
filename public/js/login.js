let email = document.getElementById("user1");
 let password = document.getElementById("pass1");
let d1 = document.getElementById("d1");
 let d2 = document.getElementById("d2");
function validate(){
    let regexp= /^([A-Za-z0-9\.-]+)@([[A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let  regexp2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if((regexp.test(email.value)))
    {
        d1.innerHTML ="email is valid!";
        d1.style.color="green";
        if(regexp2.test(pass1.value))
        {
           
            d2.innerHTML ="password is valid!";
            d2.style.color="green";
            return true;
        }
        else{
            
            d2.innerHTML ="password is invalid!!";
            d2.style.color="red";
            return false;
        }
    }
    else{
        d1.innerHTML ="email is invalid!!";
        d1.style.color="red";
        return false;
    }
    
}

// sign in page validation
let email2 = document.getElementById("user2");
let pass2 = document.getElementById("pass2");
let pass3 = document.getElementById("pass3");
let d3 = document.getElementById("d3");
 let d4 = document.getElementById("d4");
 let d5 = document.getElementById("d5");
 function signupValidate(){
    let regexp= /^([A-Za-z0-9\.-]+)@([[A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let  regexp2=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if((regexp.test(email2.value)))
    {
        d3.innerHTML ="email is valid!";
        d3.style.color="green";
        if(regexp2.test(pass2.value))
        {
           
            d4.innerHTML ="password is valid!";
            d4.style.color="green";
            if(pass3.value == pass2.value){
                d5.innerHTML ="password matched!!";
                d5.style.color="green";
                return true;
               }
        else{
            d5.innerHTML ="not matching!!";
            d5.style.color="red";
            return false;
            }
                
        }
     else{
                d4.innerHTML ="password is invalid!";
                d4.style.color="red";
                return false;
            }
           
        }
    
        else  {  
            d3.innerHTML ="email is invalid!!";
            d3.style.color="red";
            return false;
        }
       
   
}
