import { Router } from "express";
import createAccount from "../../controllers/account/createAccount";
import deleteAccount from "../../controllers/account/deleteAccount";

const router = Router()
.post("/account", createAccount)
.delete("/account", deleteAccount)

export default router;