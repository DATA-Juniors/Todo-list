import { Router } from "express";
import createAccount from "../../controllers/account/createAccount";

const router = Router()
.post("/account", createAccount)

export default router;