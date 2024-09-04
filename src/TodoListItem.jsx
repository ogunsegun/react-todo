import React from "react";
import styles from './TodoListItem.module.css'


function TodoListItem({todo, onRemoveTodo}) {
    // console.log('item', props.item.url)
    return (
        <li className={styles.ListItem} key={todo.objectID} >
              <span>
                <a href={todo.url}>{todo.title}</a>
              </span>
              <span>{todo.author}</span>
              <span>{todo.num_comments}</span>
              <span>{todo.point}</span>
              <button className={styles.ButtonItem} type="button" onClick={() => 
                onRemoveTodo(todo.id)}>Remove</button>
            </li>
    )
}

export default TodoListItem




// LESSON_1_7

// import React from "react";


// function TodoListItem({todo, onRemoveTodo}) {
//     // console.log('item', props.item.url)
//     return (
//         <li key={todo.objectID} >
//               <span>
//                 <a href={todo.url}>{todo.title}</a>
//               </span>
//               <span>{todo.author}</span>
//               <span>{todo.num_comments}</span>
//               <span>{todo.point}</span>
//               <button type="button" onClick={() => 
//                 onRemoveTodo(todo.id)}>Remove</button>
//             </li>
//     )
// }

// export default TodoListItem





// const title ='Lession_1_6';

// import React from "react";


// function TodoListItem({todo, onRemoveTodo}) {
//     // console.log('item', props.item.url)
//     return (
//         <li key={todo.objectID} >
//               <span>
//                 <a href={todo.url}>{todo.title}</a>
//               </span>
//               <span>{todo.author}</span>
//               <span>{todo.num_comments}</span>
//               <span>{todo.point}</span>
//               <button type="button" onClick={() => 
//                 onRemoveTodo(todo.id)}>Remove</button>
//             </li>
//     )
// }

// export default TodoListItem