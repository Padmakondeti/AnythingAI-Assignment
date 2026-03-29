const express = require("express")
const router = express.Router()

const {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController")

const { protect } = require("../middleware/authMiddleware")
const { authorize } = require("../middleware/roleMiddleware")

router.use(protect);

router.post("/", createTask)
router.get("/", getTasks)
router.get("/:id", getTask)
router.put("/:id", updateTask)

// Only admin can delete
router.delete("/:id", authorize("admin"), deleteTask)

module.exports = router

