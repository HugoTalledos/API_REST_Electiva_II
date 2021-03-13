const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.post("/", bookController.add);
router.put("/update", bookController.update);
router.get("/:id", bookController.getById);
router.get("/", bookController.getAll);
// router.get("*", bookController.notFound);

module.exports = router;
