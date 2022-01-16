'use strict';

const StartBTN = document.getElementById('startBtn');
const Algorithm = document.getElementById('Algo');
const ArrayS = document.getElementById('arraySize');
const ArrayBTN = document.getElementById('makeArray');
const DisplayBTN = document.getElementById('displayArray');
const ArrayContainer = document.getElementById('mainTxt');
const userArray = document.getElementById('array');
const userNeeds = document.getElementById('searchFor');


let ArraySize = 0;
let algorithmName = '';
let array=[];
let userArrayString;
let chw;
let newSpan;
let LS = function(z, arr){
    for (let i = 0; i < arr.length; i++) {
      setTimeout(function(){

              if(arr[i]==z){
        console.log(`element found at ${i+1}`);
        document.getElementById(`span-${i}`).style.backgroundColor = 'green';
      }else{
        console.log(`Element not found`);
        document.getElementById(`span-${i}`).style.backgroundColor = 'red';
      }

      }, 500*i);

      
    }
};

//game logic

//1. Array

// ArrayBTN.addEventListener('click', function () {


//   // 1. making Array of Size : ArraySize

//    array= [ArraySize];

 

  // // 2. entering Elements of array
  //       for (let i = 0; i < ArraySize; i++) {
  //         array[i]=Number(prompt(`Enter the ${i} element...`));
  //         console.log(`at postion ${i} : ${array[i]}`);
  //       }


// });

  // 3. displaying the array 
  DisplayBTN.addEventListener('click', function () {
    
    userArrayString = String(userArray.value);

   //  console.log(userArrayString);
   
    // chw = comma hatane wala 
    // const chw = userArrayString.split(',');
    //comma hatane ke sath string ko number me bdlne waala

    chw = userArrayString.split(',').map(Number);
    console.log(chw); 


    ArraySize =chw.length;
    console.log(ArraySize);



    //1.1 making spans of arraySize
const arrayOfSpans = [];
for (let i = 0; i < ArraySize; i++) {
 newSpan = document.createElement('span');
 newSpan.id= `span-${i}`;
 newSpan.className= `arraySpan`
 ArrayContainer.appendChild(newSpan);
//  chw.push(newSpan);
}
// ArrayContainer.replaceChildren(...chw);

 for (let i = 0; i < ArraySize; i++) {
   document.getElementById(`span-${i}`).textContent = chw[i];
 }
});



//2. Start button functionality

StartBTN.addEventListener('click', function(){
  algorithmName = Algorithm.value;
  
  console.log(algorithmName);
  console.log(chw);
  console.log(userNeeds.value);
  let x = userNeeds.value;
  console.log(ArraySize);

  if (algorithmName === 'Linear Search') {
      LS(x,chw);
  }
});

  

// function showOptions(s) {
//     console.log(s[s.selectedIndex].value); // get value
//     console.log(s[s.selectedIndex].id); // get id
//   }