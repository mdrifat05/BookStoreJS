  // // Function to display the book list
  // function displayBookList() {
  //   var tableBody = document.querySelector("#books-table tbody");
  //   tableBody.innerHTML = ""; // Clear the table body

  //   // Retrieve the loggedInEmail and book list from local storage
  //   var loggedInEmail = localStorage.getItem("loggedInEmail") || "";
  //   var bookListData = JSON.parse(localStorage.getItem("bookList")) || [];

  //   // Iterate over each book in the list
  //   for (var i = 0; i < bookListData.length; i++) {
  //     var book = bookListData[i];

  //     // Check if the book's email matches the loggedInEmail
  //     if (book.email === loggedInEmail) {
  //       // Create a new table row
  //       var row = document.createElement("tr");

  //       // Create table cells and populate them with book data
  //       var titleCell = document.createElement("td");
  //       titleCell.textContent = book.title;
  //       row.appendChild(titleCell);

  //       var authorCell = document.createElement("td");
  //       authorCell.textContent = book.author;
  //       row.appendChild(authorCell);

  //       var genreCell = document.createElement("td");
  //       genreCell.textContent = book.genre;
  //       row.appendChild(genreCell);

  //       var descriptionCell = document.createElement("td");
  //       descriptionCell.textContent = book.description;
  //       row.appendChild(descriptionCell);

  //       var priceCell = document.createElement("td");
  //       priceCell.textContent = book.price;
  //       row.appendChild(priceCell);

  //       var updateCell = document.createElement("td");
  //       updateCell.textContent = "Update";
  //       row.appendChild(updateCell);

  //       var deleteCell = document.createElement("td");
  //       deleteCell.textContent = "Delete";
  //       row.appendChild(deleteCell);

  //       // Append the row to the table body
  //       tableBody.appendChild(row);
  //     }
  //   }
  // }