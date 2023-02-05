import { render,fireEvent,getByLabelText, queryByText,queryAllByText } from "@testing-library/react";
import EditableToDo from './EditableTodo';
import React from "react";

describe("EditableToDo component test", function() {
  const todo =
    {
      id: "1",
      title: 'todo1',
      description: 'desc1',
      priority: "3"
    };

  it("renders", function() {
    render(<EditableToDo todo={todo} update = {()=>{}} remove = {()=>{}} />);
  });
  it("matches snapshot", function() {
    const {container} =     render(<EditableToDo todo={todo} update = {()=>{}} remove = {()=>{}} />);
    expect(container).toMatchSnapshot();
  });
  it("todos data and GO feature features to be there", function() {
    const result =  render(<EditableToDo todo={todo} update = {()=>{}} remove = {()=>{}} />);
    expect(result.queryByText("todo1")).toBeInTheDocument();
    expect(result.queryByText("desc1")).toBeInTheDocument();
  });
  it("delete button works", function() {
    const removeMock = jest.fn();
    removeMock.mockClear();
    const { container } = render(<EditableToDo remove={removeMock} todo={todo} update = {()=>{}} />);
    const delBtn = container.querySelector(".EditableTodo-delBtn")!;
    fireEvent.click(delBtn);
    expect(removeMock).toHaveBeenCalledTimes(1);
  })
  it("edit button works", function() {
    const { container } = render(<EditableToDo todo={todo}  update = {()=>{}} remove = {()=>{}}/>);
    const editBtn = container.querySelector(".EditableTodo-toggle")!;
    expect(container.querySelector(".NewTodoForm")).not.toBeInTheDocument();
    fireEvent.click(editBtn);
    expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();
  })
});