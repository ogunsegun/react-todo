import React from 'react'
import TodoListItem from "./TodoListItem";

const todoList = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    point: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    point:5,
    objectID: 1,
  },
];

console.log('todoList', todoList)

const TodoList = ({todoList}) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.objectID} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList;
