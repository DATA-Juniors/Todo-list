import { Request, Response } from "express"
import AccountService from "../../services/account/account.service"
const accountService = new AccountService()
export default async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization
        if(!token) {
            return res.status(401).json({
                message: "Token didn't provide"
            })
        }
        const oldUser = await accountService.findUserByToken(token)
        if(oldUser == null) {
            return res.status(401).json({
                message: "User isn't exist"
            })
        }
        await accountService.deleteAccount(token)
        return res.status(200).json({
            message: "Account and todos has been deleted",
            todos: "todos"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error
        })
    }
}