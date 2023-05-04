import { Request, Response } from "express"
import AccountService from "../../services/account/createAccount.service"
const accountService = new AccountService()
export default async (req: Request, res: Response) => {
    try {
        const id = +req.params.id
        await accountService.delete(id)
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