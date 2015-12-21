// localStorage.removeItem('users');
console.table(localStorage.getItem('users'));
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

    userInput =[];
    // users =[];
    userInput.unshift(event.target.name.value);
  userInput.unshift(event.target.password.value);
  userInput.unshift(parseInt(event.target.zip.value));
  console.log(userInput.reverse());


var newUser = new User(userInput[0], userInput[1], userInput[2]);

function pushUser(){
  for(var i =0; i<4; i++){
    users.unshift(newUser);
    console.log(users);
  }
}

  console.table(users);

  localStorage.setItem('users', JSON.stringify(users));
var restoredUser = JSON.parse(localStorage.getItem('user'));

  event.target.name.value = null;
  event.target.password.value = null;
  event.target.zip.value = null;


  };

  infoForm.addEventListener("submit", handleCommentBegin);
