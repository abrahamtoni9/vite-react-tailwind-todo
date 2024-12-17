
const TodoComputed = ( {computedItemList, clearCompleted} ) => 
{
    return (
      <section className="flex justify-between py-4 px-4 bg-white rounded-b-md dark:bg-gray-800 transition-all duration-1000">
          <span className="text-gray-400"> {computedItemList} items left</span>
          <button className="text-gray-400" onClick={ clearCompleted } >Clear completed</button>
      </section>
    )
}

export default TodoComputed;
