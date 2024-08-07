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

  const handleDelete = (index: number) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index)
    setTodos(newTodos)
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
          <li key={index}>
            {todo} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Addtodo
