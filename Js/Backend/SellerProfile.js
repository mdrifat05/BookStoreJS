var email = localStorage.getItem("loggedInEmail");
var Sellers = JSON.parse(localStorage.getItem("Sellers"));
    var Seller = Sellers.find(function(c) {
    return c.Email === email;
    });

        if (Seller) {
        document.getElementById("name").innerText = Seller.Name;
        document.getElementById("shopname").innerText = Seller.Shopname;
        document.getElementById("email").innerText = Seller.Email;
        document.getElementById("gender").innerText = Seller.Gender;
        document.getElementById("phone").innerText = Seller.Phone;
        document.getElementById("address").innerText = Seller.Address;
        document.getElementById("joindate").innerText = Seller.Joined;

        } else {
        alert("Seller Not Found");
    }
