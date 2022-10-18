const express = require("express");
const bookController = require("../controller/bookController");

const router = express.Router();

router.route("/").get(bookController.getBooks).post(bookController.postBook);

router
  .route("/:id")
  .delete(bookController.deleteBook)
  .patch(bookController.updateBook);

module.exports = router;
