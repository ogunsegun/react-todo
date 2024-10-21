import React from "react";
import styles from './TodoListItem.module.css';
import propTypes from 'prop-types';


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

TodoListItem.propTypes = {
  
  onRemoveTodo:propTypes.func.isRequired,
};

export default TodoListItem



