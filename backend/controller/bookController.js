const db = require("../db");

exports.getBooks = (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
};

exports.postBook = (req, res) => {
  const { title, desc, price, cover } = req.body;
  const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";
  const values = [title, desc, price, cover];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been created successfully");
  });
};

exports.deleteBook = (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM books WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json("Book has been deleted successfully");
  });
};

exports.updateBook = (req, res) => {
  const bookId = req.params.id;
  const { title, desc, price, cover } = req.body;
  const q =
    "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?";

  const values = [title, desc, price, cover];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json("Book has been updated successfully");
  });
};
