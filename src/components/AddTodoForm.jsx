import {useState} from "react";
import InputWithLabel from './InputWithLabel'
import styles from './TodoListItem.module.css'
// import propTypes from 'prop-types'


// const Search = (props) => {
//   const [searchTerm, setSearchTerm] = React.useState('');

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//     console.log(event.target.value);
//   }

//   const handleMouseOver = (event) => {
//     console.log(event);
//   }

//   return(
//     <div>
//     <form>
//       <label htmlFor="todoTitle">Search: </label>
//       <input id='todoTitle' type="text" onChange={handleChange} onMouseOver={handleMouseOver}></input>
//       <button>  </button>
    
//     <p>
//        Searching for <strong>{props.searchTerm}</strong>
//     </p>
//     </form>
//     </div>
//   );

// };

function AddTodoForm({onAddTodo}){

  const [todoTitle, setTodoTitle] = useState("");
  
  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    // console.log('Form submitted with title:', todoTitle);
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
    setTodoTitle(''); 
    // console.log('Form cleared, current title:', todoTitle);
  } 
  return (
    <div data-testid="todo-1">
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
        // id = {todoTitle}
        // label={Title}
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange} >
          Title: 
        </InputWithLabel>
         
      <button className={styles.ButtonItemsubmit} type="submit"> Submit </button>    
  
    </form>
    </div>
  );

    
};


// AddTodoForm.propTypes = {
  
//   onAddTodo:propTypes.func.isRequired,
// };

export default AddTodoForm




















// LESSON_1_7

// function AddTodoForm({onAddTodo}){

//   const [todoTitle, setTodoTitle] = useState("");
  
//   const handleTitleChange = (event) => {
//     setTodoTitle(event.target.value);
//   };

//   const handleAddTodo = (event) => {
//     event.preventDefault();
//     console.log('Form submitted with title:', todoTitle);
//     onAddTodo({
//       title: todoTitle,
//       id: Date.now()
//     });
//     setTodoTitle(''); 
//     console.log('Form cleared, current title:', todoTitle);
//   } 
//   return (
//     <div>
//       <form onSubmit={handleAddTodo}>
//         <InputWithLabel
//         // id = {todoTitle}
//         // label={Title}
//         todoTitle={todoTitle}
//         handleTitleChange={handleTitleChange} >
//           Title: 
//         </InputWithLabel>
         
//       <button type="submit"> Submit </button>    
  
//     </form>
//     </div>
//   );

    
// };

// export default AddTodoForm








// const title ='Lession_1_6';

// import {useState} from "react";
// import InputWithLabel from './InputWithLabel'


// const Search = (props) => {
//   const [searchTerm, setSearchTerm] = React.useState('');

//   const handleChange = (event) => {
//     setSearchTerm(event.target.value);
//     console.log(event.target.value);
//   }

//   const handleMouseOver = (event) => {
//     console.log(event);
//   }

//   return(
//     <div>
//     <form>
//       <label htmlFor="todoTitle">Search: </label>
//       <input id='todoTitle' type="text" onChange={handleChange} onMouseOver={handleMouseOver}></input>
//       <button>  </button>
    
//     <p>
//        Searching for <strong>{props.searchTerm}</strong>
//     </p>
//     </form>
//     </div>
//   );

// };

// function AddTodoForm({onAddTodo}){

//   const [todoTitle, setTodoTitle] = useState("");
  
//   const handleTitleChange = (event) => {
//     setTodoTitle(event.target.value);
//   };

//   const handleAddTodo = (event) => {
//     event.preventDefault();
//     onAddTodo({
//       title: todoTitle,
//       id: Date.now()
//     });
//     setTodoTitle(''); 
//   } 
//   return (
//     <div>
//       <form onSubmit={handleAddTodo}>
//         <InputWithLabel
//         // id = {todoTitle}
//         // label={Title}
//         todoTitle={todoTitle}
//         handleTitleChange={handleTitleChange} >
//           Title: 
//         </InputWithLabel>
         
//       <button type="submit"> Submit </button>    
  
//     </form>
//     </div>
//   );

    
// };

// export default AddTodoForm