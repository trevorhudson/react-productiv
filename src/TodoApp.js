import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm.js";
/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ {id, title, description, priority}, ...]
 *
 * State:
 * - todos: array of [ {id, title, description, priority}, ...]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    const todo = { ...newTodo, id: uuid() };
    setTodos(todos => [...todos, todo]);

  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos => todos.map(t => t.id === updatedTodo.id ? updatedTodo : t));
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => todos.filter(t => t.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          <h3 className="mb-3">Todos</h3>
          <div className="col-md-6">
            <EditableTodoList
              todos={todos}
              update={update}
              remove={remove} />
            {todos.length === 0 &&
              <span className="text-muted">You have no todos.</span>}
          </div>
        </div>

        <div className="col-md-6">
          {todos.length !== 0 &&
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
          }
          <section>
            <h3 className="mb-3">Add Nü</h3>
            {<TodoForm
              handleSave={create}
              initialFormData={
                {
                  title: "",
                  description: "",
                  priority: "1"
                }} />}
          </section>

        </div>
      </div>
    </main>
  );
}

export default TodoApp;