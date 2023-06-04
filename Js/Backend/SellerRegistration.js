
  document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var shopname = document.getElementById("shopname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var gender = document.querySelector('input[name="Gender"]:checked').value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var joined = document.getElementById("joined").value;

  // Create customer object
  var Seller = {
    Id: Date.now(), // Generate unique ID
    Name: name,
    Shopname: shopname,
    Email: email,
    Password: password,
    Gender: gender,
    Phone: phone,
    Address: address,
    Joined: joined
  };

  // Retrieve existing customers from local storage
  var Sellers = JSON.parse(localStorage.getItem("Sellers")) || [];

  // Add new customer to array
  Sellers.push(Seller);

  // Save customers array to local storage
  localStorage.setItem("Sellers", JSON.stringify(Sellers));

  // Display success message
  alert("Registration successful!");

  // Reset form
  document.getElementById("registrationForm").reset();
});
