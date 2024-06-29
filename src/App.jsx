import * as React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const title = 'Lesson_1_3';


const stories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    point: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    point:5,
    objectID: 0,
  },
];

const Java = [
  {
    title: 'Jave',
    url: 'https://Java.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    point: 4,
    objectID: 0,
  },
  {
    title: 'PHP',
    url: 'https://Php.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    point:5,
    objectID: 0,
  },
];

const prics_list = [
  {
    testgroup:'XRay',
    testname:'xray-leg',
    testnum: 'U0001',
    testprice: '#25000',
    testID: 1,
  },
  {
    testgroup:'XRay',
    testname:'xray-hand',
    testnum: 'U0002',
    testprice: '#25900',
    testID: 2,
  },
  {
    testgroup:'XRay',
    testname:'xray-backleg',
    testnum: 'U0003',
    testprice: '#25300',
    testID: 3,
  }
];

function Testlist(props){

  return(
    <div>
    <ul>
      {props.p_list.map(function(titem){
        return (<Item titem={titem} />)
      })}
    </ul>
    </div>
  )
};
const Item = ({titem}) =>{
  return(
    <li key={titem.testID}>
    <span>{titem.testgroup}</span>
    <span>{titem.testname}</span>
    <span>{titem.testnum}</span>
    <span>{titem.testprice}</span>
  </li>
  )
}

// function List(props){
//   return(
//     <div>
//       <h2>{props.title}</h2>
//       <ul>
//       {props.list.map(function(item) {
//         return(<Item item={item} />);
//       })}
//     </ul>
//     </div>
    
//   );
// }

// const Item =(props) => {
//   return (
//     <li key={props.item.objectID} >
//     <span>
//       <a href={props.item.url}>{props.item.title}</a>
//     </span>
//     <span>{props.item.author}</span>
//     <span>{props.item.num_comments}</span>
//     <span>{props.item.point}</span>
//   </li>
//   );
// }

function App() {
   
  const [newTodo, setNewTodo] = React.useState('');

  return (
    <div>
      <h1>{title}</h1>
        <hr />
        <AddTodoForm onAddTodo={setNewTodo}/>
        <p>
          Todo for <strong>{newTodo}</strong>
        </p>
      {/* <List list={stories} title="React Ecosystem" />
      <List list={Java} title="JavaScrript Libraries" />  */}
      <hr />
       <Testlist p_list={prics_list}/>
    </div>
  );
}

export default App;