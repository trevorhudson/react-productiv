import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * State
 * - editable (true/false)
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  console.log('EditableTodo>>', todo);
  // editable state
  const [editable, setEditable] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setEditable(editable === true ? false : true);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    const updatedToDo = {...todo, ...formData};
    console.log("handleSave",formData);
    console.log("toDo", todo);
    toggleEdit();
    update(formData,todo);
  }


  return (
    <div className="EditableTodo">
      {(editable) && <TodoForm handleSave={handleSave} initialFormData={todo}/>}

      {(!editable) && <div className="mb-3">
        <div className="float-end text-sm-end">
          <button
            className="EditableTodo-toggle btn-link btn btn-sm"
            onClick={toggleEdit}>
            Edit
          </button>
          <button
            className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
            onClick={handleDelete}>
            Del
          </button>
        </div>
        <Todo todo={todo} />
      </div>
      }
    </div>
  );
}

export default EditableTodo;
