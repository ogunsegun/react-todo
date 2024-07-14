import React from "react";


function TodoListItem({todo}) {
    // console.log('item', props.item.url)
    return (
        <li key={todo.objectID} >
              <span>
                <a href={todo.url}>{todo.title}</a>
              </span>
              <span>{todo.author}</span>
              <span>{todo.num_comments}</span>
              <span>{todo.point}</span>
            </li>
    )
}

export default TodoListItem