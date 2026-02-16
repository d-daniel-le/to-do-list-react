import './Message.css'

function Message(props){

    const showToDo = () =>{
        props.setMessageHidden(true);
        props.setLogRegHidden(true);
        props.setToDoHidden(false);
    }

    return(
        <div className="message-container" hidden={props.messageHidden}>
            <p>{props.message}</p>
            <button onClick={showToDo}>Back to ToDo page</button>
        </div>
    )
}

export default Message