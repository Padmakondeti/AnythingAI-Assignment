import { useState } from "react"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

function App() {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("token")
  )

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>

      {!loggedIn ? (
        <>
          <Register />
          <Login setLoggedIn={setLoggedIn} />
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  )
}

export default App
