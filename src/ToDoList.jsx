import './ToDoList.css'

function ToDoList(){
    return (
        <form className="to-do" hidden>
            <h2>To Do List</h2>

            <div className="title">
                <p>Title</p>
                <input type="text" placeholder="Title"/>                
            </div>

            <div className="description">
                <p>Description</p>                
                <input type="text" placeholder="Description"/>
            </div>

            <button className="create-btn">Create</button>

            <div className="list-of-todo" hidden>

            </div>
        </form>
    )
}

export default ToDoList