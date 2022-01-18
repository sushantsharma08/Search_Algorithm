'use strict';

const StartBTN = document.getElementById('startBtn');
const Algorithm = document.getElementById('Algo');
const DisplayBTN = document.getElementById('displayArray');
const ArrayContainer = document.getElementById('mainTxt');
const userArray = document.getElementById('array');
const userNeeds = document.getElementById('searchFor');
const resultSpan = document.getElementById('resultTxt');


let ArraySize = 0;
let algorithmName = '';
let userArrayString;
let array;
let newSpan;
let counter=1;

let notFound = function () {
 console.log(`element not found`);
 resultSpan.textContent='element not present in the array!';
}  


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

  resultSpan.textContent = `Searching...`;
    for (let i = 0; i < arr.length; i++) {
      setTimeout(function(){

              if(arr[i]==z){
        console.log(`element found at ${i+1}`);
        resultSpan.textContent = `Element found at ${i} position of array`;
        document.getElementById(`span-${i}`).style.backgroundColor = 'green';
        return 0;
      }else{
        console.log(`Element not found`);
        document.getElementById(`span-${i}`).style.backgroundColor = 'red';
      } 


      }, 500*i); 
    }
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        if (i==arr.length-1 && z != arr[i]) {
          notFound(); 
        }
      }, 500*i);
      
    }
};

// 2.Binary Search
let BS = function(arr, z){
  
  // setTimeout(() => {
  
  let left = 0;
  let right = arr.length - 1;
  
  while (left<=right) {
      let mid = Math.floor((right+left)/2);
      
      if (z==arr[mid]) {
        console.log(`found at ${mid} position of array`);
        resultSpan.textContent = `Element found at ${mid} position of array`;
        document.getElementById(`span-${mid}`).style.backgroundColor= 'green';
        return 0;
      }else if (z < arr[mid]) {
        right = mid-1;
        counter++;
        if (z!=arr[mid]) {
          document.getElementById(`span-${mid}`).style.backgroundColor= 'red';
        }
      }else if (z> arr[mid]) {
        left = mid+1;
        counter++;
        if (z!=arr[mid]) {
          document.getElementById(`span-${mid}`).style.backgroundColor= 'red';
        }
      }

      
    }
  // }, 500*counter);
    return notFound();
  }

  // 3. displaying the array 
  DisplayBTN.addEventListener('click', function () {

    userArrayString = String(userArray.value);
    array = userArrayString.split(',').map(Number);
    ArraySize =array.length;

     //  making spans of arraySize

        const arrayOfSpans = [];
        for (let i = 0; i < ArraySize; i++) {
        newSpan = document.createElement('span');
        newSpan.id= `span-${i}`;
        newSpan.className= `arraySpan`;
        arrayOfSpans.push(newSpan);
        }
        ArrayContainer.replaceChildren(...arrayOfSpans);

// storing array elements into the span

    updatedSpan();
});



//2. Start button functionality

StartBTN.addEventListener('click', function(){
  algorithmName = Algorithm.value;
  let x = userNeeds.value;
  // console.log(algorithmName);
  // console.log(array);
  // console.log(userNeeds.value);
  // console.log(ArraySize);
   
    if (!x) {
      console.log(`Enter a element first`);
      resultSpan.textContent = 'Enter a element first';
    }else{
  if (algorithmName === 'Linear Search') {
      LS(x,array);
  } else if(algorithmName === 'Binary Search'){

    //1. call the sortArr function
        sortArr(array);

    //storing new array to span || updating span values
        updatedSpan();

    // 2.Binary Search  
        BS(array, x);
  }
  }
});