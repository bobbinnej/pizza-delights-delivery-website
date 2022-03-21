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

//  function okBtn(){
//      let delivery=document.getElementById("delivery-address").value;

//      if(delivery !="Y"){
//          alert(`Your order will be delivered to the address ${delivery} at a Kes 60 Delivery Fee` )
//      }else{
//          alert("Delivery address must be filled");
//      }
//  }

 /*Gathering user input using jquery*/
 $(document).ready(function(){
     $("form#pizza-form").submit(function(e){
         e.preventDefault()
         let pizzaNumber=$("input#number-of-pizzas").val()
         let pizzaSize=$("#pizza-size").find(":selected").text();
         let pizzaCrust=$("#pizza-crust").find(":selected").text();
         let pizzaTopping=$("#pizza-topping").find(":selected").text();
         let pizzaDelivery=$("#pizza-delivery").find(":selected").text();
         let pizzaAddress=$("#delivery-address").val()
         
         const pizza1= new Pizza(pizzaNumber,pizzaSize,pizzaCrust,pizzaTopping,pizzaDelivery,pizzaAddress)
         console.log(pizza1)
         pizza1.calculatePrice()
         

     }) 

     /*Pizza form constructor */
     function Pizza(pizzaNumber,pizzaSize,pizzaCrust,pizzaTopping,pizzaDelivery,pizzaAddress){
         this.pizzaNumber=pizzaNumber;
         this.pizzaSize=pizzaSize;
         this.pizzaCrust=pizzaCrust;
         this.pizzaTopping=pizzaTopping;
         this.pizzaDelivery=pizzaDelivery;
         this.pizzaAddress=pizzaAddress;
         

     }
     /**Pizza prototype */
     Pizza.prototype.calculatePrice = function(){
         console.log("total calculated")
         let numberPrice;
         let deliveryPrice=60;
        
         
         let sizePrice;  
          if(this.pizzaSize==="Mega (1200)"){
              sizePrice=1200

          }else if(this.pizzaSize==="Large (1000)"){
             sizePrice=1000
          }
          else if(this.pizzaSize==="Medium (800)"){
             sizePrice=800
         }else{
             sizePrice=550
         }

         let crustPrice;
         if(this.pizzaCrust==="Gluten-free (200)"){
            crustPrice=200
         }else if(this.pizzaCrust==="Stuffed (150)"){
             crustPrice=150
         }
         else if(this.pizzaCrust==="Thick (100)"){
            crustPrice=100
            
         }else{
             crustPrice=50
         }

         let toppingPrice;
         if(this.pizzaTopping==="Pepperoni (20)"){
            toppingPrice=20
         }else if(this.pizzaTopping==="Mushroom (20)"){
             toppingPrice=20
         }
         else if(this.pizzaTopping==="Onions (10)"){
            toppingPrice=10
            
         }
         else if(this.pizzaTopping==="Sausage (60)"){
            toppingPrice=60
            
         }
         else if(this.pizzaTopping==="Extra-cheese (80)"){
            toppingPrice=80
            
         }
         else if(this.pizzaTopping==="Black-olives (30)"){
            toppingPrice=30
            
         }
         else if(this.pizzaTopping==="Green-pepper (30)"){
            toppingPrice=30
            
         }
         else if(this.pizzaTopping==="Pineapple (40)"){
            toppingPrice=40
            
         }
         
         else{
             toppingPrice=30
         }

         let pizzaDelivery=$("#delivery-address").val() 
      if(this.pizzaDelivery=="Yes"){
          deliveryPrice=60
          alert(`Your order will be delivered to the address ${pizzaDelivery} at a Kes 60 Delivery Fee` )
     }else{
          deliveryPrice=0
     }
     

         

          /*Total */
         let totalPizzaPrice=(sizePrice+crustPrice+toppingPrice+deliveryPrice)*this.pizzaNumber;
        alert(`      Summary   
        Number of Pizzas Ordered: ${this.pizzaNumber}
        Cost for Pizza size:      ${sizePrice}
        Cost for Pizza crust:     ${crustPrice}
        Cost for Pizza topping:   ${toppingPrice}
        Cost for Pizza delivery:  ${deliveryPrice} 

        Total cost                ${totalPizzaPrice}
        Delivery address: ${this.pizzaAddress}
                    
        
        `)


        
     }
   

 });


 