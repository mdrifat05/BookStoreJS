var email = localStorage.getItem("loggedInEmail");
var Customers = JSON.parse(localStorage.getItem("Customers"));
    var Customer = Customers.find(function(c) {
    return c.Email === email;
    });

        if (Customer) {
        document.getElementById("name").innerText = Customer.Name;
        document.getElementById("email").innerText = Customer.Email;
        document.getElementById("phone").innerText = Customer.Phone;
        document.getElementById("address").innerText = Customer.Address;
        document.getElementById("gender").innerText = Customer.Gender;
        document.getElementById("dob").innerText = Customer.DOB;
        document.getElementById("hobby").innerText = Customer.Hobby;
        } else {
        console.log("Customer not found");
    }
