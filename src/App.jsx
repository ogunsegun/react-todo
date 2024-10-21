import { useEffect, useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import Myapi from './Myapi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styles from './components/TodoListItem.module.css';

const title = 'Lesson_5_1';

const App = () => {
  const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList')) || [];

  const [todoList, setTodoList] = useState(savedTodoList);
  const [isLoading, setIsLoading] = useState(true);
  const [isAscending, setAscending] = useState(true);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();
      console.log(data);

      // Sorting logic based on createdTime and toggle button's state
      const sortedTodos = data.records.sort((objectA, objectB) => {
        const timeA = new Date(objectA.createdTime);
        const timeB = new Date(objectB.createdTime);
        return isAscending ? timeA - timeB : timeB - timeA;
      });

      const todos = sortedTodos.map((record) => ({
        id: record.id,
        title: record.fields.Title,
        createdTime: record.createdTime
      }));

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isAscending]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    const updatedTodoList = [...todoList, newTodo];
    const sortedUpdatedTodos = updatedTodoList.sort((a, b) => {
      const timeA = new Date(a.createdTime);
      const timeB = new Date(b.createdTime);
      return isAscending ? timeA - timeB : timeB - timeA;
    });
    setTodoList(sortedUpdatedTodos);
  };

  const toggleSortOrder = () => {
    setAscending(!isAscending);
  };

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/react-todo'
            element={
              <div>
                <h1>{title}</h1>
                <h6>
                  Find Your Phone Here With API
                  <a className={styles.Linkapp} href='/react-todo/new'>
                    Click Here
                  </a>
                </h6>
                <hr />
                <button onClick={toggleSortOrder}>
                  Sort by {isAscending ? 'Descending' : 'Ascending'} Order
                </button>
                <AddTodoForm onAddTodo={addTodo} />
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                )}
              </div>
            }
          />
          <Route
            path='/react-todo/new'
            element={
              <div>
                <h1>New path for Lesson_1_9</h1>
                <Myapi />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;




