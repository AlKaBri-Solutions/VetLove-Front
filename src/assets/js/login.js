console.log("Hello World");
document.getElementById("form-login").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get form values
  var name = document.getElementById("id_email").value;
  var pass = document.getElementById("id_password").value;
  
  // Do something with the data, for example, log it
    console.log("Email: " + name);
    console.log("Password: " + pass);
});
