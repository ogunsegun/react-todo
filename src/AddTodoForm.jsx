import React from "react";


// const Search = () => {
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
//        Searching for <strong>{searchTerm}</strong>
//     </p>
//     </form>
//     </div>
//   );

// };

function AddTodoForm(props){

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    console.log(todoTitle); //Log the value of todoTitle in the console
    props.onAddTodo(todoTitle) 
    event.target.reset(); //Reset the from
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Search: </label>
      <input id='todoTitle' type="text" name="title"></input>
      <button type="submit"> Submit </button>
  
    </form>
    </div>
  )

    
}


export default AddTodoForm