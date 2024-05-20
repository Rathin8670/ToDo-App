import { useState,useEffect } from 'react';
import  Todos  from './components/Todos';
import { CreateTodo } from './components/CreateTodo';


function App(){
    
    const [todos, setTodos] = useState([]);
    useEffect(() =>{
            try {
                fetch("http://localhost:3000/todos")
                .then(async(res)=>{
                    const data=await res.json();
                    setTodos(data.todos)
                    console.log(data.todos)
                })
            } catch (err) {
                console.log("Error in fetching Todos:", err);
            }
        },[]);

    return(
        <div>
            <CreateTodo/>
            <Todos todos={todos}></Todos>
        </div>
    )
}
export default App



