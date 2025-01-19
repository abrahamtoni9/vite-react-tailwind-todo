import { Droppable, Draggable} from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ( { todos, updateTodo, removeTodo } ) => 
{
    // console.log("todos = ",todos);
    return (
      <Droppable droppableId="todos">
        {
          (droppableProvided) => (
            <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps} className="bg-white [&>article]:p-4 transition-all duration-1000">
              {Array.isArray(todos) && todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={`${todo.id}`} index={index}>
                  {
                    (draggableProvided) => (
                      <TodoItem key={todo.id} 
                            todo={todo} 
                            updateTodo={updateTodo} 
                            removeTodo={removeTodo}
                            ref={draggableProvided.innerRef}
                            {...draggableProvided.draggableProps}
                            // {...draggableProvided.dragHandleProps}
                            {...draggableProvided.dragHandleProps}
                      />
                    )
                  }
                </Draggable>
              ))}

              {droppableProvided.placeholder}
              
            </div>
          )
        }
      </Droppable>
    )
}
export default TodoList;
