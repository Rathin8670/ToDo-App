const { todo }=require("./db");
const { createTodo,updateTodo }=require("./types");
const cors=require("cors")

// write a basic express boiler plate code
const express=require("express")
const app=express()
app.use(express.json())
app.use(cors())

const port=3000

// body{
//     task:String,
//     des:String
// }


// posting the todos
app.post("/todo",async function(req,res){

    const createPayload=req.body;
    console.log(createPayload)

    const {success}=createTodo.safeParse(createPayload)
    console.log(success)
    if(!success){
        res.status(411).json({
            msg:"You sent wrong inputs."
        })
        return;
    }

    // put in mongodb
    await todo.create({
        task:createPayload.task,
        des:createPayload.des,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })
})

// getting the todos
app.get("/todos",async function(req,res){
    const todos=await todo.find()
    res.json({
        todos
    })
    console.log(todos)
})


// for marking a specific todos
app.put("/completed",async function(req,res){
    const {success}=updateTodo.safeParse(req.body)
    console.log(success)
    if(!success){
        res.status(411).json({
            msg:"You sent wrong bro."
        })
        return;
    }

    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Marked as done"
    })
})

app.delete('/deltodo/:id', async (req, res) => {
    const { id } = req.params;
    console.log({id})
    try {
        const deletedTodo = await todo.findByIdAndDelete(id);
        
        if (!deletedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(port,()=>{
    console.log(`Response is send by port ${port}`)
});