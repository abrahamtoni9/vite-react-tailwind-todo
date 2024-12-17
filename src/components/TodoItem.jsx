import CrossIcon from "./icons/CrossIcon";
import IconCheck from "./icons/IconCheck";

const TodoItem = ( { todo, updateTodo, removeTodo } ) => 
{
  const {id, title, completed} = todo;
    return (
      <article className="flex gap-4 border-b-gray-400 border-b dark:bg-gray-800 transition-all duration-1000">
        <button className= { ` w-5 h-5 flex-none rounded-full border-2 ${ completed ? "grid justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block " } `} onClick={ () => updateTodo(id) }> { completed && <IconCheck/> } </button>

        <p className={`text-gray-600 grow dark:text-gray-400 ${completed && 'line-through'}`}> { title } </p>

        <button className="flex-none" onClick={ () => removeTodo(id) }> <CrossIcon/> </button>
      </article>
    )
}

export default TodoItem;
