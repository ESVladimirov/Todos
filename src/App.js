import './App.css';

function Todo(props) {
  return (
    <div className="Todo">
      <label>
        <input type="checkbox"/>
        {props.value}
      </label>
    </div>
  );
}

function Todos(props) {
  const convertedTodos = props.todos.map((todo) => 
    <Todo key={todo.toString()} value={todo} />
  )
  
  return (
    <div className="Todos">
      {convertedTodos}
    </div>
  );
}

function Card(props) {
  let names = ["Хлеб", "Соль", "Молоко", "Сахар", "Колбаса"];
  return (
    <div className="Card">
      <div className="Card-top">
        <div className="Card-top-title">
          {props.title}
        </div>
        <div className="Card-top-date">
          {props.date}
        </div>
      </div>
      <div className="Card-bot">
        <div className="Card-bot-content">
          <Todos todos={names}/>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Card title="Покупки" date="26.04"/>
    </div>
  );
}

export default App;
