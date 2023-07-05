import './TodoItem.css';

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between", 
  cursor: "pointer",
  color: "#2e475d"
}

function TodoItem(props) {
    return (
      <li style={style} class="list-group-item">
        <span 
        id="check" 
        className={`material-symbols-outlined ${props.completed && "itemCheckComplete"}`}
        onClick={props.onComplete}
        >
          check_circle
        </span>
        <p className={`${props.completed && "itemComplete"}`}>{props.text}</p>
        <span 
        id="delete" 
        className={`material-symbols-outlined ${props.completed && "itemDeleteComplete"}`}
        onClick={props.onDelete}
        >
          delete
        </span>
      </li>
    );
}

export {TodoItem};
