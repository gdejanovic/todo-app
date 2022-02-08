import { Todo } from "./components/todo-list/todo-list.js";

(function(){
    const options = {
        taskInput: '#taskInput',
        addBtn: '#addTask',
        list: '#todoList',
        saveBtn: '#saveList',
        deleteBtn: '#deleteList'
    };

    const todo = new Todo(options);

    todo.init();

    //console.log(todo);

})();