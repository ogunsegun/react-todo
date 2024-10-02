import { render, screen, cleanup } from '@testing-library/react';
import AddTodoForm from '../AddTodoForm';
import '@testing-library/jest-dom';
// const AddTodoForm = require('./AddTodoForm')

test('renders AddTodoForm properly', () => {
    render(<AddTodoForm />);
    const todoElement = screen.queryByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
}); 
