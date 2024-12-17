import { useState } from "react";

const TodoCreate = ({createTodo}) => 
{
  const [title, setTitle] = useState("");

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    // console.log(title);
    if (!title.trim()) {
      return setTitle("");
    }
    createTodo(title);
    setTitle("");
  }
    return (
      <form onSubmit={ handleSubmitAddTodo } className=" dark:bg-gray-800 bg-white rounded-t-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8 transition-all duration-1000">
        <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
        <input 
          type="text" 
          className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-1000" 
          placeholder="Create a new todo..." 
          value={title}
          onChange={(e) => {setTitle(e.target.value)}}/>
      </form>
    )
}

export default TodoCreate;
