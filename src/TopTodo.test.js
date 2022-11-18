
import { render } from "@testing-library/react";
import Todo from './Todo.js';
import TopTodo from './TopTodo.js';

describe('TopTodo Component tests', function () {
  const todos = [
    {
      id: 1,
      title: 'todo1',
      description: 'desc1',
      priority: 3
    },
    {
      id: 2,
      title: 'todo2',
      description: 'desc2',
      priority: 1
    },
    {
      id: 3,
      title: 'todo3',
      description: 'desc3',
      priority: 1
    }
  ];

  it('renders without crashing', function () {
    render(<TopTodo todos={todos} />);
  });

  it('passes snapshot test', function () {
    const { container } = render(<TopTodo todos={todos} />);
    expect(container).toMatchSnapshot();
  });

  it('expects single todo', function () {
    const { container } = render(<TopTodo todos={todos} />);
    expect(container.querySelectorAll('.Todo').length).toBe(1);
  });

  it('expects highest priority todo', function () {
    const { container } = render(<TopTodo todos={todos} />);
    expect(container.querySelector('.Todo')).toContainHTML('todo2');
  });
});
