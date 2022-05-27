import React from "react";

function Todocounter({Total, complited}){
    return(
        <div>
            <h2 className='title'> Yor completed<br></br><strong> {complited} of {Total}  elements</strong> </h2>
        </div>
    );
}

function Todosearch({searchvalue,setsearchvalue}){
    
    const OnSearch = (event)=>{
        console.log(event.target.value);
        setsearchvalue(event.target.value); 
    }

    return[
        <input className="search" placeholder="Busca los ingredientes para tu receta" onChange={OnSearch}></input>,
    ];
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
    //funtion
    // funtion end

    return(
        <React.Fragment>
            <li className="d-flex">
                <p><i onClick={props.onComplete} className={`icon ${props.complement && 'icon-active'}`} >!</i></p>
                <p className={`${props.complement && 'todo-completed'}`} >{props.text}</p>
                <p><i onClick={props.onDeleted}>x</i></p>
            </li>
        </React.Fragment>
    );
}
function Todoboton(){
    // var
    const a = (msg)=>{
        alert(msg);
    }
    //var end

    //render
    return(
        <button 
        onClick={()=>{a('En esta seccion se tiene que abrir el modal') }}
        className="btn-todos">+</button>
    );
    //render end
}
export {
    Todocounter,
    Todosearch,
    Todoitem,
    Todolist, 
    Todoboton
};