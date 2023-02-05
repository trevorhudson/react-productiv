import React from "react";


interface TodoInterface {
  id: string,
  title: string,
  description: string,
  priority: string
}

interface PropsInterface  {
  todo: TodoInterface | null
}

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/


const Todo: React.FC<PropsInterface> = ({todo}) =>{
  return (
    <div className="Todo">
      <div><b>{todo!.title}</b> <small>{todo!.priority}</small></div>
      <div><small>{todo!.description}</small></div>
    </div>
  );
}

export default Todo;
