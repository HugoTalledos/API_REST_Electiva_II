const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const BookValidator = require("../middlewares/bookValidator");

router.post("/", BookValidator.validateSchema, bookController.add);
router.put("/update", bookController.update);
router.put("/lend", bookController.lend);
router.get("/:id", bookController.getById);
router.get("/", bookController.getAll);
router.delete("/", bookController.delete);
// router.get("*", bookController.notFound);

module.exports = router;
