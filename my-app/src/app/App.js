import React from "react";
import { App_ui } from "./appUI";

function App( props) {

  // const
  const default_todo = [
    {text: 'manzana', complement: false}
  ] ;
  const local_storage = localStorage.getItem('Todos');
  const [todod, settodod ] = React.useState(default_todo);
  const [searchvalue,setsearchvalue] = React.useState('');
  const complement_todo = todod.filter(todos => !!todos.complement).length;
  const Totaltodos = todod.length;
  let searchdtodo =[]; 
  //const end

  //function
  const TrueTodos = (text)=>{
    const todoIndex = todod.findIndex(todo =>  todo.text === text );
    const newtodos = [...todod];
    todod[todoIndex].complement = true;
    settodod(newtodos);
  }
  const saveTodo = (newTodos)=>{
    const stringify = JSON.stringify(newTodos);
    localStorage.setItem('Todod',stringify);
    settodod(newTodos);
  }

  const deletedTodos = (text)=>{
    const todoIndex = todod.findIndex(todo =>  todo.text === text );
    const newtodos = [...todod];
    newtodos.splice(todoIndex,1);
    settodod(newtodos);
  }
  //function en
    // if
    if(!searchvalue.length > 0){ 
      searchdtodo = todod;
    } else{
      searchdtodo = todod.filter(todo => {
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchvalue.toLocaleLowerCase();
        return todoText.includes(searchText);
      });
    }
  if(!local_storage){
      localStorage.setItem('Todod', JSON.stringify(todod));
    }else{
      var parse = JSON.stringify(local_storage);
    }
  //if end
  
  //render 
  return (
    <App_ui
    todod={todod}
    settodos={settodod}
    totaltodos = {Totaltodos}
    complement_todo = {complement_todo}
    searchvalue={searchvalue}
    setsearchvalue={setsearchvalue} 
    searchdtodo={searchdtodo}
    truetodos = {TrueTodos}
    deletedtodos={deletedTodos}
    />
  );
  //render end
}

export default App;
