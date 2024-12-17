import TodoItem from "./TodoItem";

const TodoList = ( { todos, updateTodo, removeTodo } ) => 
{
    // console.log("todos = ",todos);
    return (
      <div className="bg-white [&>article]:p-4 transition-all duration-1000">
        
        {Array.isArray(todos) && todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo} />
        ))}
        {/* <TodoItemm/> */}

      </div>
    )
}

export default TodoList;
