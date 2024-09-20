import React, { useRef, useEffect } from 'react';
import styles from './TodoListItem.module.css'
import propTypes from 'prop-types'

function InputWithLabel(props) {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    }, []);
  return (
    <>
      <label htmlFor="todoTitle">{props.children}</label>
      <input className={styles.InputLabel} id='todoTitle' type="text" 
      name="title" value={props.todoTitle} onChange={props.handleTitleChange}
      ref={inputRef} />      
    </>
  )
};


InputWithLabel.propTypes = {
  
  todoTitle:propTypes.any.isRequired,
};

export default InputWithLabel










// LESSON_1_7
// import React, { useRef, useEffect } from 'react';

// function InputWithLabel(props) {
//     const inputRef = useRef(null);

//     useEffect(() => {
//         inputRef.current.focus()
//     }, []);
//   return (
//     <>
//       <label htmlFor="todoTitle">{props.children}</label>
//       <input id='todoTitle' type="text" 
//       name="title" value={props.todoTitle} onChange={props.handleTitleChange}
//       ref={inputRef} />      
//     </>
//   )
// }

// export default InputWithLabel










// const title ='Lession_1_6';

// import React, { useRef, useEffect } from 'react';

// function InputWithLabel(props) {
//     const inputRef = useRef(null);

//     useEffect(() => {
//         inputRef.current.focus()
//     }, []);
//   return (
//     <>
//       <label htmlFor="todoTitle">{props.children}</label>
//       <input id='todoTitle' type="text" 
//       name="title" value={props.TodoTitle} onChange={props.handleTitleChange}
//       ref={inputRef} />      
//     </>
//   )
// }

// export default InputWithLabel
