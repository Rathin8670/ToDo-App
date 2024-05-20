function Todos({todos}){
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo._id}>
                    <h1>{todo.task}</h1>
                    <h2>{todo.des}</h2>
                    <button>{todo.completed ? "Completed" : "Mark as complete"}</button>
                </div>
            ))}
        </div>
    ); 
}
export default Todos
