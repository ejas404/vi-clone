


//footer drop-down list
let buttonItem = document.querySelector('.list-bottom');
let button = document.querySelector('.list-top');
let click = null;
button.addEventListener('click', function(){
 if(!click){

     buttonItem.style.display ='block';
     click = 1;
 }else{
    buttonItem.style.display ='none';
    click = null;
 }   
    
});



