import { PrismaClient } from "@prisma/client"
import { v4 } from 'uuid'
import bcrypt from "bcrypt"
import { AccountDto } from "../../models/account/createAccount"
const prisma = new PrismaClient()
export default class AccountService {
    async create(account: AccountDto) {
        const token = v4()
        const saltRounds = 10
        const password = account.password
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return await prisma.account.create({
            data: {
                name: account.name,
                username: account.username,
                password: hashedPassword,
                token: token
            }
        })
    }
    async delete(id: number) {
        return await prisma.account.delete({
            where: {
                id
            }
        })
    }
}