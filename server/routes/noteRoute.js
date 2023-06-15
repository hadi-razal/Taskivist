import express from "express";
import { requireSignIn } from "../middleware/authMiddleware.js"
import { addNoteController, getAllNotes } from "../controllers/noteController.js";

const router = express.Router()

// Add Note
router.post('/add-note', requireSignIn, addNoteController)
// Get Note
router.get('/get-notes', requireSignIn, getAllNotes)

export default router;