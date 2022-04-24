"use strict"


const algo =  function(number_size){
    const arr_sp =  ["~","!","@","#","$","%","&","_"]; //0 

    const numbers = [1,2,3,4,5,6,7,8,9,0]; //1
    
   const aplha_small = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; //2

   const aplha_big = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; //3


   let result = "";

   for(let i=0;i<number_size;i++ ){
       let arr_changer =  Math.floor(Math.random() * 3);

       if(arr_changer===0){
            let arr_rand_value = Math.floor(Math.random() * 8);

            result  +=arr_sp[arr_rand_value];

       }


       else if(arr_changer===1){
            let arr_rand_value = Math.floor(Math.random() * 11);

            result  +=numbers[arr_rand_value];

       }
       else if(arr_changer===2){
            let arr_rand_value = Math.floor(Math.random() * 27);

            result  +=aplha_small [arr_rand_value];
       }

       else{
            let arr_rand_value = Math.floor(Math.random() * 27);

            result  +=aplha_big [arr_rand_value];
       }
   }

   return result;



}   



let copy_text_string ="";

document.querySelector("#main_button").addEventListener("click",function(){

    let numberSize = Number(document.querySelector("#number_size").value);
    
    if(numberSize>40){
         
          numberSize=40;
          document.querySelector("#number_size").value=40;
          alert("Max limit 40. If greater then we consider it as size 40 only.");
    }
    else if(numberSize<8){
          numberSize=8;
          document.querySelector("#number_size").value=8;
          alert("Min limit 8. If lesser then we consider it as size 8 only.");
    }


    const Generator_result = algo(numberSize);
    copy_text_string = Generator_result;
    document.querySelector(".result").textContent = Generator_result;


});



function myFunction() {
    
     navigator.clipboard.writeText(copy_text_string);
   
     /* Alert the copied text */
     alert("Copied the text");
 }