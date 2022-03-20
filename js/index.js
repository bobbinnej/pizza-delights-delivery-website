 /*Feedback form for the contact us section */
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

 /*Function to hide and show div depending on the selected delivery option */

 $(document).ready(function(){
     $("#pizza-delivery").change(function(){
         if($(this).val()=="Y"){
            $("#opt-delivery").show();
         }else{
            $("#opt-delivery").hide();

         }

     });

 });


 