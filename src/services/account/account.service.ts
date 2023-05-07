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
    async findUserByUsername(username: string) {
        return await prisma.account.findFirst({
            where: {
                username
            }
        })
    }
    async findUserByToken(token: string) {
        return await prisma.account.findUnique({
            where: {
                token
            }
        })
    }
    async deleteAccount(token: string) {
        return await prisma.account.delete({
            where: {
                token
            }
        })
    }
}