

/*var firstName = "Omoshola";
var lastName = "Elegbede";
var age = 20;

var userDetails = {
  firstName: "Omoshola",
  lastName: "Elegbede",
  age: 20,
}

console.log (userDetails);


var shoppingItems = [
  "bag", 
  "shoe", 
  "drinks", 
  "hats", 
  "tie", 
  "snacks", 
  "pen"
];
  console.log (shoppingItems);

shoppingItems[5];
  console.log(shoppingItems[5]);

shoppingItems[3];
  console.log(shoppingItems[3]);

shoppingItems[6];
  console.log(shoppingItems[6]);

  console.log(shoppingItems.length);

shoppingItems.push(
  "book"
  );

  console.log(shoppingItems);

shoppingItems.unshift(
  "cake"
  );
  console.log(shoppingItems);

shoppingItems.pop();
  console.log(shoppingItems);

shoppingItems.shift();
  console.log(shoppingItems);

var message = alert(
  "Welcome to my portfolio"
  );
  console.log(message);

var message = confirm(
  "Do you like the content of my website so far"
  );
  console.log(message);

let massage = prompt(
  "What's your name"
  );
  console.log(message);



console.log (firstName);


var a = 2;
var b = 7;

console.log (7 ** 2);*/

let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add ('show-animate');
    }
    else {
      sec.classList.remove ('show-animate');
    }
  })
}