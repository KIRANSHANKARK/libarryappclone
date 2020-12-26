let bname = document.getElementById("user1");
let genre = document.getElementById("pass1");
let author = document.getElementById("pass2");
let d1 = document.getElementById("d1");
let d2 = document.getElementById("d2");
let d3 = document.getElementById("d3");
function validate(){
let regexp = /^[a-zA-Z0-9_ ]*$/
if (!bname.value||! genre.value || !author.value) {      

    alert("fill all columns");
    return false;  

}
else{ 

    if(regexp.test(bname.value)){
        d1.innerHTML = "OK";
        d1.style.color = "green";
        if(regexp.test(genre.value)){
            d2.innerHTML = "OK";
            d2.style.color = "green";
            if(regexp.test(author.value)){
                d3.innerHTML = "OK";
                d3.style.color = "green";
                return true;
            }
            else{
                d3.innerHTML = "please enter a valid name";
                d3.style.color = "red";
                return false;
            }
          
        }
        else{
            d2.innerHTML = "please enter a valid genre";
            d2.style.color = "red";
            return false;
        }
    }
    else{
        d1.innerHTML = "please enter a valid name";
        d1.style.color = "red";
        return false;
    }
}
    
   
}
// add author validation
let aname = document.getElementById("user2");
let genre1 = document.getElementById("pass3");
let works = document.getElementById("pass4");
let d4 = document.getElementById("d4");
let d5 = document.getElementById("d5");
let d6 = document.getElementById("d6");
function authorValidate(){

    let regexp = /^[a-zA-Z0-9_ ]*$/
if (!aname.value||! genre1.value || !works.value) {      

    alert("fill all columns");
    return false;  

}
else{ 

    if(regexp.test(aname.value)){
        d4.innerHTML = "OK";
        d4.style.color = "green";
        if(regexp.test(genre1.value)){
            d5.innerHTML = "OK";
            d5.style.color = "green";
            if(regexp.test(works.value)){
                d6.innerHTML = "OK";
                d6.style.color = "green";
                return true;
            }
            else{
                d6.innerHTML = "please enter a valid name";
                d6.style.color = "red";
                return false;
            }
          
        }
        else{
            d5.innerHTML = "please enter a valid genre";
            d5.style.color = "red";
            return false;
        }
    }
    else{
        d4.innerHTML = "please enter a valid name";
        d4.style.color = "red";
        return false;
    }
}
}