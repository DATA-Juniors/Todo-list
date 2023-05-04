import { Router } from "express";
import AccountRoute from "../v1/account"

const router = Router()
.use("/", AccountRoute)

export default router;