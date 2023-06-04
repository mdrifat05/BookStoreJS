// Function to handle book deletion
function deleteBook(event) {
    var bookIndex = event.target.getAttribute("data-book-index");
    // Retrieve books from local storage
    var books = JSON.parse(localStorage.getItem("books")) || [];
  
    // Remove the book at the specified index
    books.splice(bookIndex, 1);
  
    // Update the books in local storage
    localStorage.setItem("books", JSON.stringify(books));
  
    // Refresh the book table
    displayBooks();
  }