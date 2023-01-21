let admin, name;
name = "John";
admin = name;
alert(admin);

if (hour < 12){
       alert("Good Morning");
}else{
       alert("Good Afternoon");
}


//Write an if condition to check that age is between 14 and 90 inclusively.
if (age >! 13 && age <! 91){
       return true;
}



// Write an if condition to check that age is NOT between 14 and 90 inclusively.
if (!(age >! 13 && age <! 91)){
       return true;
}

if (age < 14 || age > 90)

//Which of these alerts are going to execute?
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

// login & password prompt
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

//choose the weather app overlay
let select = document.querySelector('select');
let para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  let choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}
//A switch example

let select1 = document.querySelector('select');
let para1 = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  let choice = select1.value;

  switch (choice) {
    case 'sunny':
      para1.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para1.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para1.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para1.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para1.textContent = '';
  }
}


// bg color change
const select2 = document.querySelector('select');
const html2 = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice2 = select.value;

  switch(choice2) {
    case 'black':
      update('black','white');
      break;
    case 'white':
      update('white','black');
      break;
    case 'purple':
      update('purple','white');
      break;
    case 'yellow':
      update('yellow','gray');
      break;
    case 'psychedelic':
      update('lime','purple');
      break;
  }
});

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

//change calendar days
const select3 = document.querySelector('select');
const list3 = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;

  let days = 31;
  if (choice === 'February') {
    days = 28;
  } else if (choice === 'April' || choice === 'June' || choice === 'September'|| choice === 'November') {
    days = 30;
  }

  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');

//prompt for
let OfficialName = prompt("What's the official name of JS","");
let response
if(OfficialName == "ECMAScript"){
  alert("That's right");
}else {
  alert("what about ECMAScript!");
}

//another prompt for
let value = prompt("What's the value",'');

if (value>0){
  alert("1");
}else if(value<0){
  alert("-1");
} else {
  alert("0");
}

//? into if

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
// same as
let result1 = (a + b < 4) ? 'Below' : 'Over';


let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

// switch syntax
//switch (expression) {
//  case choice1:
//    run this code
//    break;
//
//  case choice2:
//    run this code instead
//    break;
//
  // include as many cases as you like
//
//  default:
//    actually, just run this code
//}

//prime function
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

//check age with ? and || operator
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

function min(a,b){
  if (a>b) {
    return b;
  }else if(a==b) { 
    return "these are same values";
  }else {
    return a;
  }
}
function min(a, b) {
  return a < b ? a : b;
}

//re-write below function as arrow function
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
// arrow way
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

let sum = (a) => a + 7;

//fizzbuzz problem
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}