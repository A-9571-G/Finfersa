import React from "react";
import image from './int/img/Happy_cute_girl_chef_holding_bowl_with_whisk_banner_logo_cartoon_art_illustration.jpg';
import {
  Todocounter,
  Todosearch,
  Todolist,
  Todoitem
} from "./Archivos/Todos";

const Content_todos = [
  {text: 'Cortar Cebolla', complement: false},
  {text: 'Cortar naranja', complement: false},
  {text: 'Cortar Mango', complement: false},
  {text: 'Cortar Gurana', complement: false},
]


function App( props) {
  return (
    <React.Fragment>
      <div className="d-flex d-Father">
        <div className="d-1">
          <Todocounter/>
          <Todosearch/>
          <div className="img-1">
            <img src={image} width='60%' alt="hola"/>
          </div>
        </div>
        <div className="d-2">
          <div className="scrol">
            <Todolist>
              {
                Content_todos.map(Content_todos =>(
                  <Todoitem key="text" text={Content_todos.text} />
                ))
              }
        
            </Todolist>
          </div>

          <button className="btn-todos">+</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
