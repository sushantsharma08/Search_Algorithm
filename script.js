'use strict';

const StartBTN = document.getElementById('startBtn');
const Algorithm = document.getElementById('Algo');
const DisplayBTN = document.getElementById('displayArray');
const ArrayContainer = document.getElementById('mainTxt');
const userArray = document.getElementById('array');
const userNeeds = document.getElementById('searchFor');


let ArraySize = 0;
let algorithmName = '';
let userArrayString;
let array;
let newSpan;

let updatedSpan = function() {
  for (let i = 0; i < ArraySize; i++) {
    document.getElementById(`span-${i}`).textContent = array[i];
  }
}

let sortArr = function(arr){
  arr.sort();
  console.log(arr);
}

  //  functions for search
      // 1.Linear Search
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

// 2.Binary Search

let r = ArraySize;
let l = 0;
let BS = function (arr,l,r,z) {
  let mid = l + Math.floor((r-l)/2);
  if (arr[mid]== z) {
    console.log(`found at mid`);
  }
  if(arr[mid]>z){
    BS(arr,l,mid-1,z);
    console.log(`found in left`);
  }
  if(arr[mid]<z){
    BS(arr,mid+1,r,z);
    console.log(`found in right`);
  }
}

  // 3. displaying the array 
  DisplayBTN.addEventListener('click', function () {
    
    userArrayString = String(userArray.value);

   //  console.log(userArrayString);
   
    // array = comma hatane wala 
    // const array = userArrayString.split(',');
    //comma hatane ke sath string ko number me bdlne waala

    array = userArrayString.split(',').map(Number);
    console.log(array); 


    ArraySize =array.length;
    console.log(ArraySize);



//  making spans of arraySize

        const arrayOfSpans = [];
        for (let i = 0; i < ArraySize; i++) {
        newSpan = document.createElement('span');
        newSpan.id= `span-${i}`;
        newSpan.className= `arraySpan`
        //  ArrayContainer.appendChild(newSpan);
        arrayOfSpans.push(newSpan);
        }
        ArrayContainer.replaceChildren(...arrayOfSpans);

// storing array elements into the span

    updatedSpan();
});



//2. Start button functionality

StartBTN.addEventListener('click', function(){
  algorithmName = Algorithm.value;
  
  console.log(algorithmName);
  console.log(array);
  console.log(userNeeds.value);
  let x = userNeeds.value;
  console.log(ArraySize);

  if (algorithmName === 'Linear Search') {
      LS(x,array);
  } else if(algorithmName === 'Binary Search'){

    //1. call the sortArr function
        sortArr(array);

    //storing new array to span || updating span values
        updatedSpan();

    //2. search algorithm.
        // 2.Binary Search

let r = ArraySize-1;
let l = 0;

  let mid = l + Math.floor((r-l)/2);
  if (array[mid]== x) {
    console.log(`found at mid`);
  }
}
  
});

  

// function showOptions(s) {
//     console.log(s[s.selectedIndex].value); // get value
//     console.log(s[s.selectedIndex].id); // get id
//   }