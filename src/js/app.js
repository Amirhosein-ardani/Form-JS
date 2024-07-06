let form = document.getElementById("information-form");
let users = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userBook = {
    nameBook: e.target.book.value,
    theWriter: e.target.writer.value,
    genre: e.target.genre.value,
    Price: e.target.Price.value,
  };

  users.push(userBook);
  console.log(users);
  updateTable();
});
function updateTable() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  users.forEach((userBook) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${userBook.nameBook}</td>
            <td>${userBook.theWriter}</td>
            <td>${userBook.genre}</td>
            <td>${userBook.Price}</td>
        `;

    tableBody.appendChild(row);
  });
}
