import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const defaultTodos = [
  {text:'cortar cebolla', completed:true},
  {text:'cortar papas', completed:true},
  {text:'cortar tomates', completed:false},
  {text:'cortar pito', completed:false},
  {text:'cortar pika', completed:true},
]

function App() {
  return (
    <>
      <TodoCounter completed={14} total={8}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map( todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          />
        ))} 
      </TodoList>

      <CreateTodoButton />
    </>
  );
}


export default App;
