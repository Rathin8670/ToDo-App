import { useState } from "react";
export function CreateTodo(){
    // react-query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input style={{margin:10,padding:10}} type="text" placeholder="title" onChange={function(e){
                const value=e.target.value;
                setTitle(e.target.value);
            }}></input><br></br>

            <input style={{margin:10,padding:10}} type="text" placeholder="description" onChange={function(e){
                const value=e.target.value;
                setDescription(e.target.value)
            }
            }></input><br></br>
            
            <button style={{margin:10,padding:10}} onClick={async()=>{
                try{
                    await fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        task: title,
                        des: description
                    }),
                    headers:{ 
                        "Content-Type": "application/json",    
                    }
                    })
                    .then(async function(res) {
                        const data= await res.json();
                        console.log(data)
                        alert("Todo added");
                    })
                }catch(err){
                        console.log("Error in")
                    }
            } }>Add todo</button>
        </div>
    )
}