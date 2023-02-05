import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ {id, title, description, priority}, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

type TodoInterface = {
  id: number,
  title: string,
  description: string,
  priority: number
}

type PropsInterface = {
  todos: TodoInterface[],
  update: (todo: TodoInterface) => void,
  remove: (id: number) => void
}

const EditableTodoList: React.FC<PropsInterface> = ({todos, update, remove}) =>{
  return (
    <div>
      {todos.map(
        todo => <EditableTodo
          key={todo.id}
          todo={todo}
          update={update}
          remove={remove} />)}
    </div>
  );
}

export default EditableTodoList;
