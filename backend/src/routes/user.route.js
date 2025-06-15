import { Router } from "express";
import { login } from "../controllers/user/login.controller.js";
import { signup } from "../controllers/user/signup.controller.js";
import { users } from "../controllers/user/users.controller.js";

const router = Router();

router.post("/signup", signup);

router.post("/login", login);

router.get("/all", users)

export default router;
