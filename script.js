'use strict';

const StartBTN = document.getElementById('startBtn');
const Algorithm = document.getElementById('Algo');
const ArrayS = document.getElementById('arraySize');
const ArrayBTN = document.getElementById('makeArray');
const DisplayBTN = document.getElementById('displayArray');
const ArrayContainer = document.getElementById('mainTxt');
const csv = document.getElementById('csv');

let ArraySize = 0;
let algorithmName = '';
let array=[];


//game logic

//1. Array

ArrayBTN.addEventListener('click', function () {
  ArraySize = ArrayS.value;
  console.log(ArraySize);

  // 1. making Array of Size : ArraySize

   array= [ArraySize];

 

  // 2. entering Elements of array
        for (let i = 0; i < ArraySize; i++) {
          array[i]=Number(prompt(`Enter the ${i} element...`));
          console.log(`at postion ${i} : ${array[i]}`);
        }

  // 3. displaying the array 
    DisplayBTN.addEventListener('click', function () {
    
         //1.1 making spans of arraySize
     const arrayOfSpans = [];
    for (let i = 0; i < ArraySize; i++) {
      let newSpan = document.createElement('span');
      newSpan.id= `span-${i}`;
      newSpan.className= `arraySpan`
      // ArrayContainer.appendChild(newSpan);
      arrayOfSpans.push(newSpan);
    }
     ArrayContainer.replaceChildren(...arrayOfSpans);

      for (let i = 0; i < ArraySize; i++) {
        document.getElementById(`span-${i}`).textContent = array[i];
      }


    });
  // console.log(array);
});



//2. Start button functionality

StartBTN.addEventListener('click', function(){
  algorithmName = Algorithm.value;
  
  console.log(algorithmName);
  console.log(array);
  const csvString = String(csv.value)
  console.log(csvString);

  // chw = comment hatane wala 
  const chw = csvString.split(',');
  console.log(Number(chw[0]));
});

  

// function showOptions(s) {
//     console.log(s[s.selectedIndex].value); // get value
//     console.log(s[s.selectedIndex].id); // get id
//   }