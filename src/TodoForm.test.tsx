import { render,fireEvent,getByLabelText, queryByText } from "@testing-library/react";
import Todo from './Todo';
import TodoForm from './TodoForm';
import TodoApp from './TodoApp';
import React from "react";

describe("TodoForm component test" , function() {
  const initialFormData = {
    id: "",
    title:"test",
    description:"test",
    priority: "1",
  }

  const handleSave = () => {}

  it("renders", function() {
    render(<TodoForm initialFormData={initialFormData} handleSave={handleSave}/>)
  });

  it('passes snapshot test', function () {
    const { container } = render(
    <TodoForm
    initialFormData={initialFormData}
    handleSave={handleSave}/>);
    expect(container).toMatchSnapshot();
  });

  it("submit button works", function() {
    const saveMock = jest.fn();
    saveMock.mockClear();
    const { container } = render(
      <TodoForm
      initialFormData={initialFormData}
      handleSave={saveMock}/>);
    const submitBtn = container.querySelector(".NewTodoForm")!;
    fireEvent.click(submitBtn);
    expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();
  })

  // it("updates on submitButton", function() {


  //   const submitButton = container.querySelector(".NewTodoForm-addBtn");
  //   fireEvent.click(submitButton);
  //   // expect.assertions(1);
  //   expect()
  // })
  // it("updates per change", function() {
  //   const { container } = render(
  //     <TodoForm
  //     initialFormData={initialFormData}
  //     handleSave={ToDoApp.handleSave}/>);

  //     const inputField = container.querySelector("#newTodo-description");
  //     fireEvent.change(inputField,{target:{value:"test123"}})

  //     expect(container.queryByText("test123")).toBeInTheDocument();

  // })

})