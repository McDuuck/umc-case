var userCredentials = {
    "user1": "pw1",
    "user2": "pw2",
    "user3": "pw3"
    
  };


  function handleLogin() {
    
    var enteredUsername = document.getElementById("user_name").value;
    var enteredPassword = document.getElementById("user_password").value;

    if (userCredentials.hasOwnProperty(enteredUsername)) {
      
      if (userCredentials[enteredUsername] === enteredPassword) {
        location.href = 'main.html';
        alert("Login successful!");
    
      } else {
        
        alert("Incorrect password. Please try again.");
      }
    } else {
      
      alert("Username not found. Please try again.");
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