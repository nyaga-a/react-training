import { useState } from 'react'
import Users from './Users'

function App() {
  const [show, setShow] = useState(true)
  
  return (
    <div>
      <h1>ユーザー一覧</h1>
      <button onClick={() => setShow(!show)}>
        表示切り替え
      </button>

      {show && <Users />}
    </div>
  )
}

export default App
