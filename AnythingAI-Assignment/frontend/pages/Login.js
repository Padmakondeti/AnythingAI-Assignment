import {useState} from 'react'
import {loginUser} from '../services/api'

export default function Login({setLoggedIn}) {
  const [form, setForm] = useState({email: '', password: ''})

  const handleLogin = async () => {
    const res = await loginUser(form)

    if (res.token) {
      localStorage.setItem('token', res.token)
      setLoggedIn(true)
    } else {
      alert(res.message)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder='Email'
        onChange={e => setForm({...form, email: e.target.value})}
      />
      <input
        placeholder='Password'
        type='password'
        onChange={e => setForm({...form, password: e.target.value})}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
