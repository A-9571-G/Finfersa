import React from "react";

function Todocounter(){
    return(
        <div>
            <h2 className='title'> Yor completed<br></br><strong> 2 of 3 elements</strong> </h2>
        </div>
    );
}

function Todosearch(){
    return(
        <input className="search" placeholder="Busca los ingredientes para tu receta"></input>
    );
}
function Todolist(props){
    return(
        <section>
        <ul>
            {props.children}
        </ul>
    </section>
    );
}
function Todoitem(props){
    return(
        <React.Fragment>
            <li>{props.text} </li>
        </React.Fragment>
    );
}

export {
    Todocounter,
    Todosearch,
    Todolist,
    Todoitem
};