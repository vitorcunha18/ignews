import { NextApiRequest, NextApiResponse} from 'next'

export default (request:NextApiRequest, response:NextApiResponse) => {
    const users = [
        {id:1, name:'vitor'},
        {id:1, name:'vitor'},
        {id:1, name:'vitor'}
    ]

    return response.json(users)
}


