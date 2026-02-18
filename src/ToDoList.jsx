import { useState, useEffect } from 'react'
import './ToDoList.css'
import ToDoListItems from './ToDoListItems';

function ToDoList(props){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [listOfToDoHidden, setListOfToDoHidden] = useState(true)
    const [toDo, setToDo] = useState([]);
    const [itemMessage, setItemMessage] = useState("");
    const [itemMessageHidden, setItemMessageHidden] = useState(true);
    const loadToDo = async () =>{

        try{
            const responseAPI = await fetch ("http://localhost:3000/todos",{
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${props.token}`,
                    "Content-Type": "application/json"
                }
            })

            const responseDataAPI = await responseAPI.json();
            if(!responseAPI.ok){
                console.log(responseDataAPI.error)
                return
            }
            else{
                if (!responseDataAPI || responseDataAPI.length === 0){
                    setToDo([])
                    setItemMessage("Nothing in your list at the moment!");
                    setItemMessageHidden(false);
                    setListOfToDoHidden(false);
                }
                else{
                    setToDo(responseDataAPI);
                    setItemMessageHidden(true);
                    setListOfToDoHidden(false);
                }

            }
        }
        catch(error){
            console.log(error);
        }
    }
    
    useEffect(()=>{
        if (props.token){
            loadToDo();
        }
    }, [props.token]);
    

    const createToDo = async (event) => {
        event.preventDefault();

        try{
            const responseAPI = await fetch("http://localhost:3000/todos", {
                method:"POST",
                headers: {
                    "Authorization": `Bearer ${props.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "title": `${title}`,
                    "description": `${description}`
                })
            })

            const responseDataAPI = await responseAPI.json();

            if(!responseAPI.ok){
                console.log(`Couldn't create item: ${responseDataAPI.error}`);
                return;
            }
            else{
                setToDo((obj) => {return [...obj,responseDataAPI]})
                setTitle("");
                setDescription("");
                setListOfToDoHidden(false)
            }
        }
        catch (error){
            console.log(error);
        }
    }

    return (
        <div className="to-do" hidden={props.toDoHidden}>
            <form className='create-to-do' onSubmit={createToDo}>
                <h2>To Do List</h2>

                <div className="title">
                    <p>Title</p>
                    <input type="text" placeholder="Title" value={title} onChange={(event)=>{setTitle(event.target.value)}}/>                
                </div>

                <div className="description">
                    <p>Description</p>                
                    <input type="text" placeholder="Description" value={description} onChange={(event)=>{setDescription(event.target.value)}}/>
                </div>

                <button className="create-btn">Create</button>

            </form>

            <div className="list-of-todo" hidden={listOfToDoHidden}>
                <p className='item-message' hidden={itemMessageHidden}>{itemMessage}</p>
                {toDo.map(toDoItem => {return<ToDoListItems key={toDoItem.id} id={toDoItem.id} toDo={toDoItem} token={props.token} loadToDo={loadToDo}/>})}
            </div>
        </div>
    )
}

export default ToDoList