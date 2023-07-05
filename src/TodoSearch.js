import React from 'react';

const style={
    width: "600px",
    margin: "auto",
    display: "block",
    marginBottom: "30px",
}

function TodoSearch({
    searchValue,
    setSearchValue,
}) {
    
    return(
        <input style={style} 
        placeholder="Buscar tareas" 
        class="form-control" 
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}
        />
        
    );
}

export {TodoSearch}; 