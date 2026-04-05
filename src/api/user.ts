import axious from 'axios'
import { type User } from '../types/User'

export const fetchUsers = async () : Promise<User[]> => {
    const res = await axious.get<User[]>(
        'https://jsonplaceholder.typicode.com/users'
    )
    return res.data
}