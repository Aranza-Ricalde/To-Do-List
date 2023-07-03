const style = {
    padding: "30px",
    textAlign: "center",
    fontWeight: "bolder",
    color: "#2e475d",
    letterSpacing: "1px"
};

function TodoCounter({total, completed}) {
    return(
        <h1 style={style}>
            Completaste {completed} de {total}
        </h1>
    );
}

export {TodoCounter};