import { render,fireEvent,getByLabelText } from "@testing-library/react";
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

  it("updates on handleChange", function() {
    const { container } = render(
      <TodoForm
      initialFormData={initialFormData}
      handleSave={ToDoApp.handleSave}/>);
      console.log("getbylabeltext",getByLabelText("title"))
      debug(getByLabelText("title"))
    fireEvent.change(getByLabelText("title"),{target:{value:"newTitle"}});
    expect(container.getByLabelText("title")).toContainHTML("newTitle")
  })

})