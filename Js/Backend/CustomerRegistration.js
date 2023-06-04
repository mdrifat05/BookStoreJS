document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var phone = document.getElementById("phone").value;
  var gender = document.querySelector('input[name="Gender"]:checked').value;
  var address = document.getElementById("address").value;
  var dob = document.getElementById("dob").value;
  var hobby = document.getElementById("hobby").value;

  // Create customer object
  var customer = {
    Id: Date.now(), // Generate unique ID
    Name: name,
    Email: email,
    Password: password,
    Phone: phone,
    Address: address,
    Gender: gender,
    DOB: dob,
    Hobby: hobby
  };

  // Retrieve existing customers from local storage
  var customers = JSON.parse(localStorage.getItem("Customers")) || [];

  // Add new customer to array
  customers.push(customer);

  // Save customers array to local storage
  localStorage.setItem("Customers", JSON.stringify(customers));

  // Display success message
  alert("Registration successful!");

  // Reset form
  document.getElementById("registrationForm").reset();
});
