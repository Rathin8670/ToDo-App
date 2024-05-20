const zod=require("zod")

const createTodo=zod.object({
    task:zod.string(),
    des:zod.string()
})

const updateTodo=zod.object({
    id:zod.string()
})

module.exports={
    createTodo,updateTodo
}