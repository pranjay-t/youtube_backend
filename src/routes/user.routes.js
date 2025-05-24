import {Router} from "express";
import {registerUser} from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser);

export default router;//default export helps you to change name during import 
