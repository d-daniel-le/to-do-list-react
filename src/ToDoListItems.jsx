import { useState } from 'react'
import './ToDoListItems.css'

function ToDoListItems(props){
    const [deleteHidden, setDeleteHidden] = useState(false);
    const [editHidden, setEditHidden] = useState(false);
    const [editFormHidden, setEditFormHidden] = useState(true);
    const [itemLabelHidden, setItemLabelHidden] = useState(false);
    const [newTitle, setNewTitle] = useState(props.toDo.title);
    const [newDescription, setNewDescription] = useState(props.toDo.description);

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

    const editBtn = () =>{
        setDeleteHidden(true);
        setEditHidden(true);
        setItemLabelHidden(true);
        setEditFormHidden(false);
        setNewTitle(props.toDo.title);
        setNewDescription(props.toDo.description)
    }

    const cancelBtn = () => {
        setDeleteHidden(false);
        setEditHidden(false);
        setItemLabelHidden(false);
        setEditFormHidden(true);
    }

    const editToDoItem = async (event)=>{
        event.preventDefault();
        try{
            const responseAPI = await fetch(`http://localhost:3000/todos/${props.id}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${props.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "title": newTitle,
                    "description": newDescription
                })

            })

            const responseDataAPI = await responseAPI.json();
            if(!responseAPI.ok){
                console.log(responseDataAPI.error)
            }
            else{
                props.loadToDo();
                setDeleteHidden(false);
                setEditHidden(false);
                setItemLabelHidden(false);
                setEditFormHidden(true);        
            }
            

        }
        catch (error){
            console.log(error);
        }

    }

    const completeToDoItem  = async (complete) =>{

        try{
            const responseAPI = await fetch(`http://localhost:3000/todos/${props.id}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${props.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "completed": complete
                })

            })

            const responseDataAPI = await responseAPI.json();
            if(!responseAPI.ok){
                console.log(responseDataAPI.error);
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
            <input type="checkbox" className="todo-items" checked={props.toDo.completed} onChange={(event) => {
                const complete = event.target.checked;
                completeToDoItem(complete);
            }}/>
            <p className='item-label' hidden={itemLabelHidden}>{props.toDo.title} - {props.toDo.description}</p>
            <form className='edit-form' onSubmit={(event)=> {editToDoItem(event)}} hidden={editFormHidden}>
                <input type="text" className='edit-text' value={newTitle} onChange={(event) => {setNewTitle(event.target.value)}}/>
                -
                <input type="text" className='edit-text' value={newDescription} onChange={(event) => {setNewDescription(event.target.value)}}/>
                <button type='submit'>Save</button>
                <button type='button'onClick={cancelBtn}>Cancel</button>
            </form>
            <button type='button' onClick={deleteToDoItem} hidden={deleteHidden}>Delete</button>
            <button type='button' onClick={editBtn} hidden={editHidden}>Edit</button>
        </div>
    )
}

export default ToDoListItems