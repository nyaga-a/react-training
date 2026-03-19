import { useUsers } from './hooks/useUsers'

function App() {
  const { data, isLoading, error } = useUsers()
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error occurred</p>

  return (
    <div>
      <h1>ユーザー一覧</h1>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name} / {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
