const style={
    width: "800px",
    margin: "auto",
    display: "block",
    marginBottom: "30px"
}

function TodoSearch() {
    return(
        <input style={style} placeholder="Agregar tarea" class="form-control" />
        
    );
}

export {TodoSearch}; 