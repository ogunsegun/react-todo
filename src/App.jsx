import {useEffect, useState} from 'react'
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList'
import Myapi from './Myapi';
import  {BrowserRouter, Routes, Route} from "react-router-dom"
import styles from './TodoListItem.module.css'

const title ='Lession_3_1';


const App = () => {

  
  const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList')) || [];

  const [todoList, setTodoList] = useState([]);

  const [isLoading, setIsLoading] =useState(true)

  const fetchData = async (todos) => {
    
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      },
    };

    const url =`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);

      if(!response.ok){
         const message = ` Error: ${response.status}`;
         throw new Error(message);
      }
      const data = await response.json();
      console.log(data)

      const todos = data.records.map((record)=>({
        id: record.id,
        title: record.fields.Title,
      }));
      setTodoList(todos);
      setIsLoading(false);
      //return data;
      
    } catch (error) {
      //console.log(error.message);
      return null;
    }

  };

  useEffect(() => {
    fetchData();
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ data: { todoList: savedTodoList} });
//         }, 2000);
//     }).then((result) => {
//       setTodoList(result.data.todoList); 
//       setIsLoading(false);
//     });
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
    <div className={styles.container}>
    <BrowserRouter >
    <Routes>
      <Route path='/react-todo' element={
    <div>
      <h1>{title}</h1>
      <h6>Find Your Phone Here With API
      <a className={styles.Linkapp} href='/react-todo/new' >Click Here</a>
      </h6>
      <hr/>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </div>
    } />
    <Route path='/react-todo/new' element={
      <div>
        <h1>New path for Lession_1_9</h1>
        <Myapi />
        </div>
    } />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;













































































// import {useEffect, useState} from 'react'
// import AddTodoForm from './AddTodoForm';
// import TodoList from './TodoList'
// import  {BrowserRouter, Routes, Route} from "react-router-dom"

// const title ='Lession_1_9';


// const App = () => {

  
//   const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList')) || [];

//   const [todoList, setTodoList] = useState([]);

//   const [isLoading, setIsLoading] =useState(true)

//   const fetchData = async (todos) => {
    
//     const options = {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
//       },
//     };

//     const url =`https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;

//     try {
//       const response = await fetch(url, options);

//       if(!response.ok){
//          const message = ` Error: ${response.status}`;
//          throw new Error(message);
//       }
//       const data = await response.json();
//       console.log(data)

//       const todos = data.records.map((record)=>({
//         id: record.id,
//         title: record.fields.Title,
//       }));
//       setTodoList(todos);
//       setIsLoading(false);
//       //return data;
      
//     } catch (error) {
//       //console.log(error.message);
//       return null;
//     }

//   };

//   useEffect(() => {
//     fetchData();
// //     new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve({ data: { todoList: savedTodoList} });
// //         }, 2000);
// //     }).then((result) => {
// //       setTodoList(result.data.todoList); 
// //       setIsLoading(false);
// //     });
// }, []);

//   useEffect (() => {
//     if(!isLoading) {
//     localStorage.setItem('savedTodoList', JSON.stringify(todoList));
//     }
//   });

//   const addTodo = (newTodo) => {
//     setTodoList([...todoList, newTodo]);
//   }

//   const removeTodo = (id) => {
//     const updatedTodoList = todoList.filter((todo) => todo.id !==id);
//     setTodoList(updatedTodoList);
//   }
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/react-todo' element={
//     <div>
//       <h1>{title}</h1>
//       <hr/>
//       <AddTodoForm onAddTodo={addTodo} />
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
//       )}
//     </div>
//     } />
//     <Route path='/react-todo/new' element={
//       <div>
//         <h1>New path for Lession_1_9</h1>

//         </div>
//     } />
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;









































// const title ='Lession_1_7';


// const App = () => {

  
//   const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList')) || [];

//   const [todoList, setTodoList] = useState([]);

//   const [isLoading, setIsLoading] =useState(true)

//   useEffect(() => {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ data: { todoList: savedTodoList} });
//         }, 2000);
//     }).then((result) => {
//       setTodoList(result.data.todoList); 
//       setIsLoading(false);
//     });
// }, []);

//   useEffect (() => {
//     if(!isLoading) {
//     localStorage.setItem('savedTodoList', JSON.stringify(todoList));
//     }
//   });

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
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
//       )}
//     </div>
//   )
// }

// export default App;




















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

// export default 











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