import { render } from "@testing-library/react";
import Todo from './Todo.js';


describe('Todo Component tests', function () {
  const testTodo = {
    id: 0,
    title: 'title',
    description: 'description',
    priority: 1
  };

  it('renders without crashing', function () {
    render(<Todo todo={testTodo} />);
  });

  it('passes snapshot test', function () {
    const { container } = render(<Todo todo={testTodo} />);
    expect(container).toMatchSnapshot();

  });

});
