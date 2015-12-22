// localStorage.removeItem('users');
// console.table(localStorage.getItem('users'));
users =[];

function User  (name, password, zip){
  this.name = name;
  this.password = password;
  this.zip = zip;
  users.push(this);
}



var handleCommentBegin = function(event) {
  console.log(event);
  event.preventDefault();



  if (!event.target.name.value || !event.target.password.value || !event.target.zip.value) {
    return alert("Please complete all fields.");
}
    userInput =[];
    users =[];
      userInput.push(event.target.name.value);
    userInput.push(event.target.password.value);
    userInput.push(parseInt(event.target.zip.value));
    console.log(userInput);
var newUser = new User(userInput[0], userInput[1], userInput[2]);
console.log(newUser);

// function pushUser(){
//   for(var i =0; i<4; i++){
//     users.push(newUser);
//     console.log(users);
//   }
// }
  // console.table(users);

var restoredUser = JSON.parse(localStorage.getItem('users'));



// localStorage.setItem('users[0].password', JSON.stringify(users[0].password));
var restoredUserPW = JSON.parse(localStorage.getItem(users[0].name));

console.log(localStorage.getItem(users[0].name));
console.log(users);



if
  (localStorage.getItem(users[0].name) !== JSON.stringify(users)) {
    localStorage.setItem(users[0].name, JSON.stringify(users));
    // location.assign("map.html");
    users = JSON.parse(localStorage.getItem(users[0].name));
}  else {
  location.assign("map.html");
  console.log('verified');
}

  event.target.name.value = null;
  event.target.password.value = null;
  event.target.zip.value = null;

};
  infoForm.addEventListener("submit", handleCommentBegin);
