import React from "react";
import image from '../int/img/Happy_cute_girl_chef_holding_bowl_with_whisk_banner_logo_cartoon_art_illustration.png';
import {
    Todocounter,
    Todosearch,
    Todolist,
    Todoitem,
    Todoboton
  } from "./Elements/Todos/Todos";

  //render 
function App_ui ({ 
    totaltodos, 
    complement_todo, 
    searchvalue, 
    setsearchvalue,
    searchdtodo,
    truetodos,
    deletedtodos
  }){
    return(
        <React.Fragment>
        <div className="d-flex d-Father">
          <div className="d-1">
            <Todocounter
              Total={totaltodos}
              complited={complement_todo}
            />
            <Todosearch
              searchvalue={searchvalue}
              setsearchvalue={setsearchvalue}
            />
            <div className="img-1">
              <img src={image} width='60%' alt="hola"/>
            </div>
          </div>
          <div className="d-2">
            <div className="scrol">
              <Todolist>
                {
                  searchdtodo.map(todod =>(
                    <Todoitem 
                    key={todod.text} 
                    text={todod.text}
                    complement ={todod.complement}
                    onComplete={()=> truetodos(todod.text)}
                    onDeleted={()=> deletedtodos(todod.text) }
  
                     />
                  ))
                }
          
              </Todolist>
            </div>
            <Todoboton/>
          </div>
        </div>
      </React.Fragment>
    );
}
  //render end
export{
    App_ui
}