const Todo = require('../models/todo_model');

const todosController = {};

todosController.index = async (req, res) => {
    try {
        const todo = await Todo.find();     
        res.json(todo);
    } catch (error) {
        res.json(error);
    }
}

todosController.show = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);      
        res.json(todo);
    } catch (error) {
        res.status(404).json({'message': 'Todo not found'});
    }

}

todosController.create = async (req, res) => {
    try {
        todo = new Todo({
            title: req.body.title,
            content: req.body.content, 
            isPublished: true
        });
        data = await todo.save();
        res.json(data);
    } catch (error) {
        res.json(error);
    }
}

todosController.update = async (req, res) => {
    const requestData = {
        title: req.body.title,
        content: req.body.content, 
        isPublished: req.body.isPublished
    }
    try {
        const todo = await Todo.findById(req.params.id);
        if(todo != null){
            todo.set(requestData);
            data = await todo.save();
            res.json(data);
        } 
        else{
            res.json({'message': 'Todo not found!'})
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

todosController.destroy = async (req, res) => {
    try {
        todo = await Todo.findByIdAndDelete(req.params.id);
        res.json({"message": "Deleted"});
    } catch (error) {
        res.status(400).json({"message": "Cannot delete"});
    }
}

module.exports = todosController;