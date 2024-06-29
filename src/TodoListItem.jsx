import React from "react";


function TodoListItem(props) {

    return (
        <li key={props.item.objectID} >
              <span>
                <a href={props.item.url}>{item.title}</a>
              </span>
              <span>{props.item.author}</span>
              <span>{props.item.num_comments}</span>
              <span>{props.item.point}</span>
            </li>
    )
}

export default TodoListItem