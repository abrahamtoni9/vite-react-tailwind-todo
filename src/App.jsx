// import CrossIcon from "./components/icons/CrossIcon";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

import { DragDropContext } from "@hello-pangea/dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = [...list]; // Crea una copia de la lista original.
  const [removed] = result.splice(startIndex, 1); // Remueve un elemento de la posición `startIndex` y lo guarda en `removed` desestructurado.
  result.splice(endIndex, 0, removed); // Inserta el elemento removido en la posición `endIndex`.
  return result; // Retorna la lista reordenada.
};

// const initialStateTodos = [
//   { id: 1, title: "Buy milk", completed: true },
//   { id: 2, title: "Complete online JS Blueweb curse", completed: false},
//   { id: 3, title: "10 minutes meditation", completed: false},
//   { id: 4, title: "Go to the gym", completed: false},
//   { id: 5, title: "Complete todo app on frontend", completed: false},
// ]

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


  const handleDragEnd = (result) => {

    const { destination, source } = result;

    if (!destination) return;

    if ( source.index === destination.index && source.droppableId === destination.droppableId)return;

    setTodos((prevTasks) => reorder(prevTasks, source.index, destination.index));
    
  };


  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(), 
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const updateTodo = (id) => {
    setTodos( todos.map( todo => todo.id == id ? { ...todo, completed: !todo.completed } : todo ) )
  }

  const removeTodo = (id) => {
    setTodos( todos.filter((todo) => todo.id !== id) )
  }

  const computedItemList = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {setTodos(todos.filter((todo) => !todo.completed))};

  const [filter, setFilter] = useState('all');

  const filteredTodo = () => {
    switch (filter) 
    {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };
  
  const changeFilter = (filter) => setFilter(filter);

  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]"  >
      <Header/>
      <main className="container mx-auto px-4 mt-8 md:max-w-xl">
        
        <TodoCreate createTodo = { createTodo } />

        <DragDropContext onDragEnd={handleDragEnd}>

          <TodoList todos= { filteredTodo() } updateTodo = { updateTodo } removeTodo = { removeTodo }/>
          
        </DragDropContext>
        

        <TodoComputed computedItemList = {computedItemList} clearCompleted = {clearCompleted}/>
        
        <TodoFilter changeFilter = {changeFilter} filter = {filter} />
      </main>
      <footer className="text-center mt-8 dark:text-gray-300">Drap and drop to reorder list</footer>
    </div>
  )
} 

export default App;