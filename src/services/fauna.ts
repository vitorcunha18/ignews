import { Client } from 'faunadb'


export const fauna = new Client({
    secret: process.env.SECRET_KEY_FAUNA
})