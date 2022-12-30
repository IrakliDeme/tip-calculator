
let bill= document.getElementById('prompt-1');
let custom=document.getElementById("custom");
let per5= document.getElementById('percent-1');
let per10 = document.getElementById('percent-2');
let per15 = document.getElementById('percent-3');
let per25 = document.getElementById('percent-4');
let per50 = document.getElementById('percent-5');
let totalAmount = document.getElementById('total-screen-amount');
let persons = document.getElementById('prompt-2');
let tipAmount = document.getElementById('person-screen-amount');
let reset = document.getElementById("reset");
per5.addEventListener ('click',function(){
  totalAmount.innerHTML=(bill.value*5/100);
  per5.style.backgroundColor="#26C2AE";
});
 per10.addEventListener ('click',function(){
  totalAmount.innerHTML=(bill.value*10/100);
  per10.style.backgroundColor="#26C2AE";
   
 });
 per15.addEventListener ('click',function(){
  totalAmount.innerHTML=(bill.value*15/100);
  per15.style.backgroundColor="#26C2AE";
  
 });
 per25.addEventListener ('click',function(){
  totalAmount.innerHTML=(bill.value*25/100);
  per25.style.backgroundColor="#26C2AE";
 });
 per50.addEventListener ('click',function(){
  totalAmount.innerHTML=(bill.value*50/100);
  per50.style.backgroundColor="#26C2AE";
 });
 custom.addEventListener ("click",function(){
  tipAmount.innerHTML=(( totalAmount.innerHTML)/(persons.value));
});
reset.addEventListener ("click",function(){
  totalAmount.innerHTML=("$ 0.00");
  tipAmount.innerHTML=("$ 0.00");
  per5.style.backgroundColor="#00474B";
  per10.style.backgroundColor="#00474B";
  per15.style.backgroundColor="#00474B";
  per25.style.backgroundColor="#00474B";
  per50.style.backgroundColor="#00474B";
});

