const style = {
  position: "fixed",
  bottom: "20px",
  right: "20px"
};

function CreateTodoButton() {
  return (
    <button style={style} className="btn btn-outline-primary">Agregar</button>
  )
}

export {CreateTodoButton};