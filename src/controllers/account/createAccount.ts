import { Request, Response } from "express";
import { AccountDto } from "../../models/account/createAccount";
import AccountService from "../../services/account/account.service";
const accountService = new AccountService()
export default async (req: Request, res: Response) => {
    try {
        const bodyDto: AccountDto = req.body
        const createAccount = await accountService.create(bodyDto)
        const findUserByUsername = await accountService.findUserByUsername(bodyDto.username)
        if(findUserByUsername?.username == createAccount.username) {
            return res.status(401).json({
                message: "Username is exist"
            })
        }
        return res.status(200).json({
            message: "Created new account",
            id: createAccount.id,
            name: createAccount.name,
            username: createAccount.username,
            token: createAccount.token
        })
    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error
        })
    }
}