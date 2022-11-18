import { render,fireEvent,getByLabelText, queryByText } from "@testing-library/react";
import Todo from './Todo.js';
import TodoForm from './TodoForm.js';
import ToDoApp from './ToDoApp.js';


describe("TodoForm component test" , function() {
  const initialFormData = {
    title:"test",
    description:"test",
    priority: "1",
  }

  it("renders", function() {
    render(<TodoForm initialFormData={initialFormData} handleSave={ToDoApp.handleSave}/>)
  });

  it('passes snapshot test', function () {
    const { container } = render(
    <TodoForm
    initialFormData={initialFormData}
    handleSave={ToDoApp.handleSave}/>);
    expect(container).toMatchSnapshot();
  });

  // it("updates on submitButton", function() {
  //   const { container } = render(
  //     <TodoForm
  //     initialFormData={initialFormData}
  //     handleSave={ToDoApp.handleSave}/>);

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