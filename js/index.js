 function submitBtn(){
     let name1=document.getElementById("name").value
     let email1=document.getElementById("email").value
     let textarea1=document.getElementById("exampleFormControlTextarea1").value

     if( name1 !=="" && email1 !=="" && textarea1 !==""){

        alert("We have recieved your feedback")

     }else{
         alert("All fields must be filled")
     }
 }