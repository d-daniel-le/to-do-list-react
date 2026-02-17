import './ToDoListItems.css'

function ToDoListItems(props){
    return (
        <div className='row-of-todo'>
            <input type="checkbox" className="todo-items"/>
            <p className='item-label'>{props.toDo.title} - {props.toDo.description}</p>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default ToDoListItems