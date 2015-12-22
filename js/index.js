
//
// localStorage.removeItem('shelly');
// localStorage.removeItem('sherlock');
// console.table(localStorage.getItem('users'));
users =[];

function User  (name, password, zip){
  this.name = name;
  this.password = password;
  this.zip = zip;
  users.push(this);
}

var handleCommentNew = function(event){
  console.log(event);
  event.preventDefault();
  console.log("hi new person user");

  if (!event.target.name.value || !event.target.password.value || !event.target.zip.value) {
    return alert("Please complete all fields.");
};


    userInput =[];
    // users =[];
      userInput.push(event.target.name.value);
    userInput.push(event.target.password.value);
    userInput.push(parseInt(event.target.zip.value));
    console.log(userInput);

var newUser = new User(userInput[0], userInput[1], userInput[2]);
console.log(newUser);

// var signUp =document.getElementsByTagName('button')[0];
// signUp.hidden = false;


invisible();



localStorage.setItem(users[0].name, JSON.stringify(users));

users = JSON.parse(localStorage.getItem(users[0].name));
  // location.assign("map.html");

  var playBall =document.getElementsByTagName('button')[2];
  playBall.hidden = false;

  var button0 =document.getElementsByTagName('button')[0];
  button0.hidden = true;



  event.target.name.value = null;
  event.target.password.value = null;
  event.target.zip.value = null;

  //


  }

// }

var handleCommentResume = function(event) {
  console.log(event);
  event.preventDefault();
  console.log("hi returning user");


  if (!event.target.name.value || !event.target.password.value || !event.target.zip.value) {
    return alert("Please complete all fields.");
};
    userInput =[];
    // users =[];
      userInput.push(event.target.name.value);
    userInput.push(event.target.password.value);
    userInput.push(parseInt(event.target.zip.value));
    console.log(userInput);

var newUser = new User(userInput[0], userInput[1], userInput[2]);
console.log(newUser);


localStorage.setItem('users', JSON.stringify(users));
// var restoredVotes2 = JSON.parse(localStorage.getItem('allProducts'));


var restoredUser = JSON.parse(localStorage.getItem('users'));

var restoredUserPW = JSON.parse(localStorage.getItem(users[0].name));

console.log(localStorage.getItem(users[0].name));
console.log(users);



if
  (localStorage.getItem(users[0].name) !== JSON.stringify(users)) {
    localStorage.setItem(users[0].name, JSON.stringify(users));
    // location.assign("map.html");
    users = JSON.parse(localStorage.getItem(users[0].name));
}  else {
  console.log('verified');
    console.log('verified');
  location.assign("map.html");

}

  event.target.name.value = null;
  event.target.password.value = null;
  event.target.zip.value = null;

};


function begin(){
  console.log("hello");
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

  console.log("hey again");
}



function invisible(){
  console.log("merlot");
  var hideName = document.getElementsByTagName('form')[0];
  hideName.hidden= true;


}


function invisible2(){
  var button2 =document.getElementsByTagName('button')[2];
  button2.hidden = true;
  console.log('hiding another button');
}

invisible2();
invisible();



function playBall(){
console.log("thanks for signing up");
  location.assign("map.html");

}
