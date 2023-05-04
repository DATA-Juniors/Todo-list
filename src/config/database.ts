import {Client} from "pg"
const connectionString = process.env.DATABASE_URL
export const client = new Client({
    connectionString
})

client.connect((err: Error) => {
    if(err != null) {
        console.log('Cannot connect to database');
    }
    console.log('Connected to database');
})