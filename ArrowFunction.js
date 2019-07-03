const names = ["nico", "lynn", "flynn"];

// arrow function
const hearts = names.map(item => item + " hi");

console.log(hearts);

const button = document.querySelector(".button");

// Do not use arrow function in EventListener

// this == button
button.addEventListener("click", function() {
  console.log(this);
});

// this == window
/*
button.addEventListener("click", () => {
    console.log(this);
});
*/

const emails = [
  "nco@nco.com",
  "naver@google.com",
  "lynn@gmail.com",
  "nico@nomad.com",
  "nico@gmail.com"
];

const foundMail = emails.find(item => item.includes("@gmail.com"));

console.log(foundMail);

const noGmail = emails.filter(email => !email.includes("@gmail.com"));

console.log(noGmail);

//foreach == map is same buy map returned new array

const cleaned = emails.map((email, index) => ({
  username: email.split("@")[0],
  points: index
}));

console.table(cleaned);

//Default value in arrow function
const DEFAULT = "kkh";

const sayHi = (aName = DEFAULT) => "Hello " + aName;

console.log(sayHi());
