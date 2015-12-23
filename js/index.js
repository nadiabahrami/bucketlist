users =[];

// console.log(localStorage.getItem('active_user'));
// // console.log(localStorage.key(1));
// console.log(localStorage.length)
//
// var activeUser = localStorage.getItem('active_user');
// var getUser = localStorage.getItem(activeUser);
// console.log(getUser);



function User  (name, password, zip){
  this.name = name;
  this.password = password;
  this.zip = zip;
  users.push(this);
}

var handleCommentNew = function(event){
  event.preventDefault();

  if (!event.target.name.value || !event.target.password.value || !event.target.zip.value) {
    return alert("Please complete all fields.");
  };
  userInput =[];
  userInput.push(event.target.name.value);
  userInput.push(event.target.password.value);
  userInput.push(parseInt(event.target.zip.value));
  var newUser = new User(userInput[0], userInput[1], userInput[2]);
  invisible();

  localStorage.setItem(users[0].name, JSON.stringify(users));
  users = JSON.parse(localStorage.getItem(users[0].name));

  localStorage.removeItem('active_user');
  localStorage.setItem('active_user', users[0].name);


active_users = users[0];
console.log(users);
console.log(active_users);



  var playBall =document.getElementsByTagName('button')[2];
  playBall.hidden = false;
  var button0 =document.getElementsByTagName('button')[0];
  button0.hidden = true;
  event.target.name.value = null;
  event.target.password.value = null;
  event.target.zip.value = null;
}

var handleCommentResume = function(event) {
  event.preventDefault();
  if (!event.target.name.value || !event.target.password.value || !event.target.zip.value) {
    return alert("Please complete all fields.");
  };

  userInput =[];
  userInput.push(event.target.name.value);
  userInput.push(event.target.password.value);
  userInput.push(parseInt(event.target.zip.value));

  var newUser = new User(userInput[0], userInput[1], userInput[2]);


  localStorage.setItem('users', JSON.stringify(users));
  var restoredUser = JSON.parse(localStorage.getItem('users'));
  var restoredUserPW = JSON.parse(localStorage.getItem(users[0].name));


  localStorage.removeItem('active_user');
  localStorage.setItem('active_user', users[0].name);

  if
    (localStorage.getItem(users[0].name) !== JSON.stringify(users)) {
    localStorage.setItem(users[0].name, JSON.stringify(users));
    users = JSON.parse(localStorage.getItem(users[0].name));
    // alert("Wrong");
  } else {
    location.assign("map.html");
    // playBall();
  }
  //
  // invisible3();

  // var playBall =document.getElementsByTagName('button')[2];
  // playBall.hidden = false;

  event.target.name.value = null;
  event.target.password.value = null;
  event.target.zip.value = null;

};


function begin(){
  var hideForm = document.getElementsByTagName('form')[0];
  hideForm.hidden= false;
  var loginHide = document.getElementsByTagName('button')[1];
  loginHide.hidden = true;
  infoForm.addEventListener("submit", handleCommentNew);

}




function batterUp(){
  var hideName = document.getElementsByTagName('form')[0];
  hideName.hidden= false;
  infoForm.addEventListener("submit", handleCommentResume);
  var button1 = document.getElementsByTagName('button')[0];
  button1.hidden=true;

}

function invisible(){
  var hideName = document.getElementsByTagName('form')[0];
  hideName.hidden= true;
}

function invisible2(){
  var button2 =document.getElementsByTagName('button')[2];
  button2.hidden = true;
}

// function invisible3(){
//   var button1 = document.getElementsByTagName('button')[0];
//   button1.hidden=true;
// }
invisible2();
invisible();

function playBall(){
  location.assign("map.html");
}
