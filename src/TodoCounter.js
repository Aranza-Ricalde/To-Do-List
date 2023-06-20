function TodoCounter({total, completed}) {
    return(
        <h1>
            Completaste {completed} de {total}
        </h1>
    );
}

export {TodoCounter};