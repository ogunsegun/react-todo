import {useState} from "react";


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
    onAddTodo({
      title: todoTitle,
      id: Date.now()
    });
    setTodoTitle('');
  } 
  return (
    <div>
      <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Search: </label>
      <input id='todoTitle' type="text" 
      name="title" value={todoTitle} onChange={handleTitleChange}></input>
      <button type="submit"> Submit </button>
  
    </form>
    </div>
  );

    
};

export default AddTodoForm
