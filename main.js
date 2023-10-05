var userCredentials = {
    "user2": "pw2",
    "user3": "pw3"
  };

var adminCredentials = {
    "admin": "pw1",
}

  function handleLogin() {
    
    var enteredUsername = document.getElementById("user_name").value;
    var enteredPassword = document.getElementById("user_password").value;

    if (adminCredentials.hasOwnProperty(enteredUsername)) {
        if (adminCredentials[enteredUsername] === enteredPassword) {
            location.href = 'admin.html';
            alert("Login successful!");
          } else {
            alert("Incorrect password. Please try again.");
          }
        }
    if (userCredentials.hasOwnProperty(enteredUsername)) {

      if (userCredentials[enteredUsername] === enteredPassword) {
        location.href = 'main.html';
        alert("Login successful!");
    
      } else {
        
        alert("Incorrect password. Please try again.");
      }
    } 
    return false;
  }

  function handleCreateUser() {
    var newUsername = document.getElementById("new_account").value;
    var newPassword = document.getElementById("new_password").value;

    if (newUsername.trim() === "" || newPassword.trim() === "") {
      alert("Please enter a username and password.");
    } else if (userCredentials.hasOwnProperty(newUsername)) {
      alert("Username already exists. Please choose a different username.");
    } else {
      userCredentials[newUsername] = newPassword;
      alert("Account created successfully!");
      document.getElementById("new_account").value = "";
      document.getElementById("new_password").value = "";
    }

    return false;
  }

  let first_vote_up = 21;
let first_vote_down = 11;
let second_vote_up = 31;
let second_vote_down = 2;
let third_vote_up = 3;
let third_vote_down = 18;
let fourth_vote_up = 0;
let fourth_vote_down = 0;
let fifth_vote_up = 0;
let fifth_vote_down = 0;

const first_up = document.getElementById('first_up');
const first_down = document.getElementById('first_down');
const second_up = document.getElementById('second_up');
const second_down = document.getElementById('second_down');
const third_up = document.getElementById('third_up');
const third_down = document.getElementById('third_down');


document.getElementById('first_up').innerHTML = first_vote_up;
document.getElementById('first_down').innerHTML = first_vote_down;
document.getElementById('second_up').innerHTML = second_vote_up;
document.getElementById('second_down').innerHTML = second_vote_down;
document.getElementById('third_up').innerHTML = third_vote_up;
document.getElementById('third_down').innerHTML = third_vote_down;



first_up.addEventListener('click', function(e) {
    first_vote_up++;
    document.getElementById('first_up').innerHTML = first_vote_up;
});

first_down.addEventListener('click', function(e) {
    first_vote_down++;
    document.getElementById('first_down').innerHTML = first_vote_down;
});

second_up.addEventListener('click', function(e) {
    second_vote_up++;
    document.getElementById('second_up').innerHTML = second_vote_up;
});

second_down.addEventListener('click', function(e) {
    second_vote_down++;
    document.getElementById('second_down').innerHTML = second_vote_down;
});

third_up.addEventListener('click', function (e) {
    third_vote_up++;
    document.getElementById('third_up').innerHTML = third_vote_up;
});

third_down.addEventListener('click', function (e) {
    third_vote_down++;
    document.getElementById('third_down').innerHTML = third_vote_down;
});

function deleteFirst() {
    document.getElementById("first").remove();
}

function deleteSecond() {
    document.getElementById("second").remove();
}

function deleteThird() {
    document.getElementById("third").remove();
}

function deleteAll() {
    const deleting = document.getElementById('voting_section')
    
    document.getElementById("first").remove();
    document.getElementById("second").remove();
    document.getElementById("third").remove();
}

let admin_votes = 1;
function addVote () {
    const adding = document.getElementById('add_vote')
    const newVote =  document.createElement('div')
    newVote.innerHTML = `
    <div id="">
            <h2>Admin vote number ${admin_votes}:</h2>
            <i class="fa-regular fa-thumbs-up"></i>
            <br>
            <br>
            <i class="fa-regular fa-thumbs-down"></i>
        </div>
    `
    admin_votes++;
    adding.appendChild(newVote)
    console.log(newVote)
}