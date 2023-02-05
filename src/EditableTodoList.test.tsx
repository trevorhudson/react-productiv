import { render,fireEvent,getByLabelText, queryByText,queryAllByText } from "@testing-library/react";
import EditableToDoList from './EditableTodoList';
import React from 'react'

describe("EditableToDoList component test", function() {
  const todos = [
    {
      id: "1",
      title: 'todo1',
      description: 'desc1',
      priority: "3"
    },
  ];
  it("renders", function() {
    render(<EditableToDoList todos={todos} update = {()=>{}}  remove = {()=>{}}/>);
  });
  it("matches snapshot", function() {
    const {container} = render(<EditableToDoList todos={todos} update = {()=>{}}  remove = {()=>{}}/>);
    expect(container).toMatchSnapshot();
  });

  it("todos data , and delete/edit features to be there", function() {
    const result = render(<EditableToDoList todos={todos} update = {()=>{}}  remove = {()=>{}}/>);
    expect(result.queryByText("todo1")).toBeInTheDocument();
    expect(result.queryByText("desc1")).toBeInTheDocument();
    expect(result.queryByText("Edit")).toBeInTheDocument();
    expect(result.queryByText("Del")).toBeInTheDocument();
  })
})
