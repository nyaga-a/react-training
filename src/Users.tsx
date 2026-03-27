import { useUsers } from "./hooks/useUsers";

function Users() {
    const { data, isLoading, error, refetch } = useUsers()

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error occurred</p>
    
    return (
        <>
            <button onClick={() => refetch()}>
                再取得
            </button>
            <ul>
                {data?.map((user) => (
                    <li key={user.id}>
                    {user.name} / {user.email}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Users