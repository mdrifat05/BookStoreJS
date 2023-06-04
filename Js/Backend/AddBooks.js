document.getElementById("addbookForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
    
      // Get book form values
      var title = document.getElementById("title").value;
      var author = document.getElementById("author").value;
      var genre = document.getElementById("genre").value;
      var price = document.getElementById("price").value;
      var description = document.getElementById("description").value;
      var quantity = document.getElementById("quantity").value;
    
      var email = localStorage.getItem("loggedInEmail");
      // Create a book object
      var book = {
        Id: Date.now(), // Generate unique ID
        title: title,
        author: author,
        genre: genre,
        price: price,
        description: description,
        quantity: quantity,
        email: email
      };
      // Retrieve existing books from local storage
      var books = JSON.parse(localStorage.getItem("books")) || [];
    
      // Add the new book to the array
      books.push(book);
    
      // Update the books in local storage
      localStorage.setItem("books", JSON.stringify(books));
    
      // Display success message
      alert("Book added successfully!");
    
      // Reset the form
      document.getElementById("addbookForm").reset();
  });
  