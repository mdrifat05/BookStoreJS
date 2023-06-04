document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var loginEmail = document.getElementById("email").value;
  var loginPassword = document.getElementById("password").value;

  // Retrieve existing customers and sellers from local storage
  var customers = JSON.parse(localStorage.getItem("Customers")) || [];
  var sellers = JSON.parse(localStorage.getItem("Sellers")) || [];

  // Check if email and password match any customer object
  var customer = customers.find(function(c) {
    return c.Email === loginEmail && c.Password === loginPassword;
  });

  // Check if email and password match any seller object
  var seller = sellers.find(function(s) {
    return s.Email === loginEmail && s.Password === loginPassword;
  });

  if (customer) {
    localStorage.setItem("loggedInEmail", loginEmail);
    // Redirect to customer profile page
    alert("Login Successful");
    window.location.href = "CustomerProfile.html";
  } else if (seller) {
    localStorage.setItem("loggedInEmail", loginEmail);
    // Redirect to seller profile page
    alert("Login Successful");
    window.location.href = "SellerProfile.html";
  } else {
    // Display error message
    alert("Invalid email or password.");
  }

  // Reset form
  document.getElementById("loginForm").reset();
});
