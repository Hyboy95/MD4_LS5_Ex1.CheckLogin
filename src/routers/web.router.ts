import express from "express";
import { GeneralController } from "../controllers/general.controller";
import { checkLogin } from "../middlewares/checkLogin";
export const router = express.Router();

router.post('/login',checkLogin , GeneralController.loginAccount);