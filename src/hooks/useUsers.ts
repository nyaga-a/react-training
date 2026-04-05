import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/user";
import { type User } from "../types/User"

export const useUsers = () => {
    return useQuery<User[]>({
        queryKey: ['users'],
        queryFn: fetchUsers,
        staleTime: 10000,
    })
}