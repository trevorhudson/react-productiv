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

function EditableTodoList({ todos, update, remove }) {
  console.log('EditableTodoList', todos);

  return (
    <div>
      {todos.map(todo => <EditableTodo todo={todo} update={update} remove={remove} />)}
    </div>
  );
}

export default EditableTodoList;
