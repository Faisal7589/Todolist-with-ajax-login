import Todolist from '../views/Todolist'

let getHomePage = (req,res) => {
    return res.render("homepage.ejs", {
        user: req.user
    })
}

let addTodo = async (req, res) => {
    try {
        myInput = document.querySelector("#myUL")
        console.log(myInput)
        let data = {
            myInput: req.body.myInput,
        }
        console.log(myInput)
        console.log(data)
        alert(data)
        await Todolist.addTodo(data);
         return res.status(200).json({
          message: "a user create succeeds"
      })
    } catch (e) {
        return res.status(500).json(e);
    }
}


module.exports = {
    getHomePage: getHomePage,
    addTodo: addTodo
}