import express from "express";
import { getUsers, getUserById, saveUser, updateUser, deleteUser } from "../controllers/UserController.js";

const router = express.Router();

router.get('/Users', getUsers);
router.get('/Users/:id', getUserById);
router.post('/Users', saveUser);
router.patch('/Users/:id', updateUser);
router.delete('/Users/:id', deleteUser);

export default router;