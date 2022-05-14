import connection from "../config/connectDB";

let addTodo = (Todo) => {
    return new Promise(async (resolve, reject) => {
        try {
                let data = {
                    text: Todo.text,
                };
                console.log(data)

                connection.query("INSERT INTO loginajax.todo set ? ", data, function(error, rows) {
                    if (error) reject(error);
                    resolve("created a new todo successfully");
                })
                
            }catch (e) {
                reject(e);
            }
        }) ;
        
        };


        
        
module.exports= {
    addTodo:addTodo
}