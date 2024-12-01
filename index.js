const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

////Exercise chapter 3 on ARRAYS, Add a Number to an Array of Numbers

let numbers = [1, 3, 3, 4, 5];

function addToArr(numbers, num) {
  numbers.push(num);
  return numbers;
}

app.get('/numbers/add', (req, res) => {
  let result = addToArr(numbers, 6);
  res.json(result);
 
});

// Add a String to an Array of Strings
let strings = ["hello", "world", "javascript", "node"];

function addToStrings(strings, str) {
  strings.push(str);
  return strings;
}

app.get('/strings/add', (req, res) => {
  let result = addToStrings(strings, "express");
  res.json(result);
 
});

// Sum an Array of Numbers Using for Loop
let numbersArr = [1, 2, 3, 4, 5];

function sumOfNumbers(numbersArr) {
  let sum = 0;
  for (let i = 0; i < numbersArr.length; i++) {
    sum = sum + numbersArr[i];
  }
  return sum;
}

app.get('/numbers/sum', (req, res) => {
  let result = sumOfNumbers(numbersArr);
  res.json({sum: result});
 
});

// Find the Maximum Number in an Array

let numbersArray = [1, 2, 3, 4, 5];

function findMax(numbersArray) {
  let max = numbersArray[0];
  for (let i = 1; i < numbersArr.length; i++) {
    if (numbersArray[i] > max) {
      max = numbersArray[i];
    }
  }
  return max;
}

app.get('/numbers/max', (req, res) => {
  let result = findMax(numbersArray);
  res.json({max: result});
 
});

// B.D 3.2
// Find  a Number in the Array 
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function findNumber(ele, number) {
  return ele === number;
}
app.get("/numbers/find/:number", (req, res) => {
  let number = parseInt(req.params.number);
  let result = numbers.find((ele) => findNumber(ele, number));
  res.json(result);
});

// Find  a Name in the Array 

let names = ["Rahul", "Sita", "Amit", "Vikram"]

function findName(ele, name) {
  return ele === name;
}
app.get("/name/find/:name", (req, res) => {
  let name = req.params.name;
  let result = names.find((ele) => findName(ele, name));
  res.json(result);
});

// Find  an Employee by ID 

let employees = [
  {employeeId: 1, name: "Amit"},
  {employeeId: 2, name: "Sita"},
   {employeeId: 3, name: "Rahul"}
    ]
   
function findEmployee (ele, employeeId) {
   
  return ele.employeeId === employeeId;
  }
   
app.get("/employees/find/:employeeId", (req, res) =>{
  let employeeId = parseInt(req.params.employeeId);
   
  let result = employees.find((ele) => findEmployee(ele, employeeId));
   
  res.json(result);
   
   });

// Find  a User by Username 

let users = [
  {username: "amit223", name: "Amit" , score: 89},
  {username: "sita56", name: "Sita", score: 90},
  {username: "rahul123", name: "rahul", score:80}
   
    ]
   
function findUser(ele, username) {
   
  return ele.username === username;
  }
   
app.get("/users/find/:username", (req, res) => {
  let username = req.params.username;
   
  let result = users.find((ele) => findUser(ele, username));
   
  res.json(result);
   
   }); 

// Find  a Contact by Phone Number 

let contacts = [
  {phoneNumber: "1234567", name: "Amit" , address: "123 Street, City"},
  {phoneNumber: "5767587", name: "Sita", address: "23 Park Avenue, City"},
  {phoneNumber: "767897999", name: "Seema", address: "19th Main Street,City"}
   
    ]
   
function findContact(ele, phoneNumber) {
   
  return ele.phoneNumber === phoneNumber;
  }
   
app.get("/contacts/find/:phoneNumber", (req, res) => {
  let phoneNumber = req.params.phoneNumber;
   
  let result = contacts.find((ele) => findContact(ele, phoneNumber));
   
  res.json(result);
   
   }); 



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// BD 3.3
// Update the watched status of a video by ID
let watchList = [
  {videoId: 1, title: "JavaScript Tutorial" , watched: false, url: "https://youtube/shorturl1"},
  {videoId: 2, title: "Node.js basics" , watched: true, url: "https://youtube/shorturl1"},
  {videoId: 3, title: "React.js guide" , watched: false, url: "https://youtube/shorturl1"},
   
    ];


function updatedWatchedStatusById(watchList, videoId, watched) {
  for (let i =0; i < watchList.length; i++) {
    if (watchList[i].videoId === videoId) {
      watchList[i].watched = watched;
    }
  }
   
  return watchList;
      }
       
app.get("/watchlist/update", (req, res) => {
  let videoId = parseInt(req.params.videoId);
  let watched = req.qery.watched === "true";
  let result = updateWatchedStatusById(watchList, videoId, watched);
       
  res.json(result);
       
       }); 

// Delete a Video by ID

function shouldDeleteById(video, videoId) {
 return video.videoId != videoId;
      }
       
app.get("/watchlist/delete", (req, res) => {
  
  let videoId = parseInt(req.query.videoId);
  let result = watchList.filter((video) => shouldDeleteById(video, videoId));
       
  res.json(result);
       
       }); 

// Delete watched videos

function isWatched(video) {
  return !video.watched;
       }
        
 app.get("/watchlist/delete-watched", (req, res) => {
   
   let result = watchList.filter((video) => isWatched(video));
        
   res.json(result);
        
        }); 
 

