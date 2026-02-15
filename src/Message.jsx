import './Message.css'

function Message(props){
    return(
        <div className="message-container" hidden={props.messageHidden}>
            <p>{props.message}</p>
            <button>Back to ToDo page</button>
        </div>
    )
}

export default Message