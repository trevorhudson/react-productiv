import React from "react";
import Todo from "./Todo";

interface TopToDoInterface {
  id: string,
  title: string,
  description: string,
  priority: string
}

interface PropsInterface {
  todos: TopToDoInterface[]
}

/** Shows the top todo.
 *
 * Props:
 * - todos: array of [ {id, title, description, priority}, ...]
 *
 * TodoApp -> TopTodo
 */

const TopTodo: React.FC<PropsInterface>= ({todos}) =>{
  // lowest-priority # is the highest priority
  let top = todos.reduce(
    (acc, cur) => Number(cur.priority) < Number(acc.priority) ? cur : acc, todos[0]);

  return <Todo todo={top} />;
}

export default TopTodo;