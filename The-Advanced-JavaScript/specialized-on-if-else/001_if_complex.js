let isLoggedin = true;
let isAdmin = false;
let userAge = 25;

if (isLoggedin) {
  console.log("User is logged in.");

  if (isAdmin) {
    console.log("User is an admin.");
  } else {
    console.log("User is not an admin.");
  }

  if (userAge >= 18) {
    console.log("User is an adult.");
  } else {
    console.log("User is a minor.");
  }
} else {
  console.log("User is not logged in.");
}
