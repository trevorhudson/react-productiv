import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

type TodoInterface = {
  id: string,
  title: string,
  description: string,
  priority: string

}

type PropsInterface = {
  todo: TodoInterface,
  update: (todo: TodoInterface) => void,
  remove: (id: string) => void
}


/** Show editable todo item.
 *
 * Props
 * - todo: like { id, title, description, priority }
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * State
 * - isEditing (true/false)
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

const EditableTodo: React.FC<PropsInterface> = ({todo, update, remove}) => {
  // editable state
  const [isEditing, setisEditing] = useState<boolean>(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setisEditing(setisEditing => setisEditing ? false : true);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData: TodoInterface) {
    const updatedToDo = { ...todo, ...formData };
    toggleEdit();
    update(updatedToDo);
  }


  return (
    <div className="EditableTodo">
      {(isEditing) && <TodoForm handleSave={handleSave} initialFormData={todo} />}

      {(!isEditing) && <div className="mb-3">
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
