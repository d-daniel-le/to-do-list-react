import './ToDoListItems.css'

function ToDoListItems(props){

    const deleteToDoItem = async () => {
        try{
            const responseAPI = await fetch(`http://localhost:3000/todos/${props.id}`, {
                method: "DELETE",
                headers:{
                    "Authorization": `Bearer ${props.token}`
                }
            })

            if(!responseAPI.ok){
                console.log("Delete was unsuccessful")
            }
            else{
                props.loadToDo();
            }

        }
        catch(error){
            console.log(error);
        }

    }

    return (
        <div className='row-of-todo'>
            <input type="checkbox" className="todo-items"/>
            <p className='item-label'>{props.toDo.title} - {props.toDo.description}</p>
            <button type='button' onClick={deleteToDoItem}>Delete</button>
            <button type='button'>Edit</button>
        </div>
    )
}

export default ToDoListItems