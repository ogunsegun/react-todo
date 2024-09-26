import React from 'react'
import TodoListItem from "./TodoListItem"
import propTypes from 'prop-types'

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

//console.log('todoList', todoList)

const TodoList = ({todoList, onRemoveTodo}) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  )
};

TodoList.propTypes = {
  
  todoList:propTypes.any.isRequired,
};


export default TodoList;














// LESSON_1_7

// const TodoList = ({todoList, onRemoveTodo}) => {
//   return (
//     <ul>
//       {todoList.map((todo) => (
//         <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
//       ))}
//     </ul>
//   )
// }

// export default TodoList;




// const title ='Lession_1_6';
// import React from 'react'
// import TodoListItem from "./TodoListItem";

// const todoList = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     point: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     point:5,
//     objectID: 1,
//   },
// ];

// console.log('todoList', todoList)

// const TodoList = ({todoList, onRemoveTodo}) => {
//   return (
//     <ul>
//       {todoList.map((todo) => (
//         <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
//       ))}
//     </ul>
//   )
// }

// export default TodoList;

