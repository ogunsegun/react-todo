import {useEffect, useState} from 'react'
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList'

const title ='Lession_1_7';


const App = () => {

  //const [todoList, setTodoList] = useSemiPersistentState(); /DELET
  const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList')) || [];

  const [todoList, setTodoList] = useState([]);

  const [isLoading, setIsLoading] =useState(true)

  useEffect(() => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: { todoList: savedTodoList} });
        }, 2000);
    }).then((result) => {
      setTodoList(result.data.todoList); 
      setIsLoading(false);
    });
}, []);

  useEffect (() => {
    if(!isLoading) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  });

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !==id);
    setTodoList(updatedTodoList);
  }
  return (
    <div>
      <h1>{title}</h1>
      <hr/>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </div>
  )
}

export default App;





// import {useEffect, useState} from 'react'
// import AddTodoForm from './AddTodoForm';
// import TodoList from './TodoList'

// const title ='Lession_1_6';

// const useSemiPersistentState = () => {

//   const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList')) || [];

//   const [todoList, setTodoList] = useState(savedTodoList);

//    // Effect to save todoList to localStorage whenever it changes
//   useEffect (() => {
//     localStorage.setItem('savedTodoList', JSON.stringify(todoList));
//   });

//   return [todoList, setTodoList]
// }

// const App = () => {

//   const [todoList, setTodoList] = useSemiPersistentState();

//   const addTodo = (newTodo) => {
//     setTodoList([...todoList, newTodo]);
//   }

//   const removeTodo = (id) => {
//     const updatedTodoList = todoList.filter((todo) => todo.id !==id);
//     setTodoList(updatedTodoList);
//   }
//   return (
//     <div>
//       <h1>{title}</h1>
//       <hr/>
//       <AddTodoForm onAddTodo={addTodo} />
//       <TodoList todoList={todoList}  onRemoveTodo={removeTodo}/>
//     </div>
//   )
// }

// export default App;











// import * as React from 'react';
// import AddTodoForm from './AddTodoForm';
// import TodoList from './TodoList';


// const title = 'Lesson_1_4';


// function App() {
  
//   const [todoList, setTodoList] = React.useState([
//     {
//       title: 'React',
//       url: 'https://reactjs.org/',
//       author: 'Jordan Walke',
//       num_comments: 3,
//       point: 4,
//       objectID: 0,
//     },
//     {
//       title: 'Redux',
//       url: 'https://redux.js.org/',
//       author: 'Dan Abramov, Andrew Clark',
//       num_comments: 2,
//       point:5,
//       objectID: 1,
//     },
//   ]);

//   const addTodo =(newTodo) => {
//     setTodoList([...todoList, newTodo]);
//   }
//   return (
//     <div>
//       <h1>{title}</h1>
      
//         <hr />
//         <AddTodoForm onAddTodo={addTodo}/>
//         <p>
//           Todo for <strong>{todoList}</strong>  
//         </p> 
//       <hr />
//       <TodoList pList={todoList} />
//     </div>
//   );
// }

// export default App;











// import {useEffect, useState} from 'react'
// import AddTodoForm from './AddTodoForm';
// import TodoList from './TodoList'

// const title ='Lession_1_5';

// const useSemiPersistentState = () => {

//   const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList')) || [];

//   const [todoList, setTodoList] = useState(savedTodoList);

//    // Effect to save todoList to localStorage whenever it changes
//   useEffect (() => {
//     localStorage.setItem('savedTodoList', JSON.stringify(todoList));
//   });

//   return [todoList, setTodoList]
// }

// const App = () => {

//   const [todoList, setTodoList] = useSemiPersistentState();

//   const addTodo = (newTodo) => {
//     setTodoList([...todoList, newTodo]);
//   }
//   return (
//     <div>
//       <h1>{title}</h1>
//       <hr/>
//       <AddTodoForm onAddTodo={addTodo} />
//       <TodoList todoList={todoList} />
//     </div>
//   )
// }

// export default App;