import axious from 'axios'

export type User = {
    id: number
    name: string
    email: string
}

export const fetchUsers = async () : Promise<User[]> => {
    const res = await axious.get(
        'https://jsonplaceholder.typicode.com/users'
    )
    return res.data
}