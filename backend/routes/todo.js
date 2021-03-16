const express = require("express");
const router = express.Router();

const { create, update, remove, list } = require("../controllers/todo");

router.post("/todo", create);
router.put("/todo/:id", update);
router.delete("/todo/:id", remove);
router.get("/todos", list);

module.exports = router;
