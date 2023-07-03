const style = {
    width: "800px",
};

const container = {
    display: "grid",
    placeItems: "center"
}

function TodoList(props) {
    return(
        <div style={container}>
       <ul class="list-group" style={style}>
        {props.children}
       </ul>
       </div>
    );
}

export {TodoList};