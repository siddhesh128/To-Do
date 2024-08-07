import { useState } from "react"

const Addtodo = () => {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo.trim()) {
      setTodos([...todos, todo])
      setTodo("")
    }
  }

  return (
    <div className="todo-container">
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Addtodo
