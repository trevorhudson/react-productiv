import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";


interface InitialToDosInterface {
  id: string,
  title: string,
  description: string,
  priority: string
}

interface PropsInterface {
  initialTodos: InitialToDosInterface[];

}

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


const TodoApp: React.FC<PropsInterface> = ({initialTodos}) =>{
  const [todos, setTodos] = useState<InitialToDosInterface[]>(initialTodos);

  /** add a new todo to list */
  function create(newTodo:InitialToDosInterface) {

    const todo = { ...newTodo, id: uuid() };
    setTodos(todos => [...todos, todo]);

  }

  /** update a todo with updatedTodo */
  function update(updatedTodo: InitialToDosInterface) {
    setTodos(todos => todos.map(t => t.id === updatedTodo.id ? updatedTodo : t));
  }

  /** delete a todo by id */
  function remove(id: string) {
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
                  id: "",
                  title: "",
                  description: "",
                  priority: "",
                }} />}
          </section>

        </div>
      </div>
    </main>
  );
}

export default TodoApp;