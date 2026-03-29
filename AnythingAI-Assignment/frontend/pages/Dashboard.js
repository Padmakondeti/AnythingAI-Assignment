import {useEffect, useState} from 'react'
import {getTasks, createTask, deleteTask} from '../services/api'

export default function Dashboard() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')

  const loadTasks = async () => {
    const data = await getTasks()
    setTasks(data)
  }

  useEffect(() => {
    loadTasks()
  }, [])

  const handleAdd = async () => {
    await createTask({title})
    setTitle('')
    loadTasks()
  }

  const handleDelete = async id => {
    await deleteTask(id)
    loadTasks()
  }

  return (
    <div>
      <h2>Dashboard</h2>

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='New Task'
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title}
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
