import express from "express";
import { getUsers, getUserById, saveUser } from "../controllers/UserController.js";

const router = express.Router();

router.get('/Users', getUsers);
router.get('/Users/:id', getUserById);
router.post('/Users', saveUser);

export default router;