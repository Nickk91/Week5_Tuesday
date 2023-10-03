// <!-- Front-end development: DOM
// JavaScript – forEachDOM
// The following exercise contains the following subjects:
// ● DOM
// ● foreach
// Instructions
// You get an array of objects of users from your database:

const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
// 1. Loop over the array with the forEach method and
// dynamically create an ordered list of the first and last
// names of the objects.
const ol = document.createElement("ol");
users.forEach((user) => {
  console.log("user", user);
  const li = docuemnt.createElement("li");
  li.innerText = user.firstName + " " + user.lastName;
  ol.append(li);
});

const body = document.getElementsByTagName("body")[0];
body.appendChild(ol);

// 2. Remove the bullet points of the ordered list with
// JavaScript.
ol.classList.add;
// bad way to write which works:
//ol.style.listStyleType = "none";
ol.classList.add("removeNum");

// 3. Create a custom data attribute called “data-id” and attach
// the id value to each li.
//create new attribute
const dataId = document.createAttribute();

li.setAttribute("data-id", Math.floor(Math.random() * 1000));
ol.append(li);
