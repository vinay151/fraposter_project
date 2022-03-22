import React,{useState} from "react";

const TableData = () => {
  const [todos,setTodos]= useState([]);
  const [text,setText] = useState("");
  const [error,setError] = useState(false);

  function addTodo(event){
    event.preventDefault();
    if(text !== ""){
      let canAddTodo = true;
      if(todos.some(t=> t.text === text)){
        canAddTodo = window.confirm(
          "Todo" + text + "Hello This is the webPage"
        );
      }
      if(canAddTodo){
        setTodos(todos.concat({ id: Math.random(), text: text, check: false }));
        setText("");
        setError(false);
      }

    }
    else{
      setError(true);
    }
  }
  function removeTodo(idTodoToRemove){
    let newTodos = todos.filter(t=>{
      return t.id !== idTodoToRemove;
    });
    setTodos(newTodos);
  }
  function handleText(e){
    setText(e.target.value);
  }
  function handleCheck(toCheck){
   setTodos(
     todos.map(t => {
       if(t.id === toCheck.id){
         t.check = !t.check
       }
       return t;
     })
   );
  }
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="lg:w-3/5 w-full bg-white rounded-md p-10 m-10 shadow-md ">
          HEllo
        </div>
        <div className="lg:w-1/3 w-full bg-white rounded-md p-10 m-10 shadow-md ">
          <div className="">
    
          <form action="" className="flex items-center space-x-4">
          <input
              type="text"
              className=" text-xl rounded-md py-5 w-full px-4 border border-gray-400 outline-none"
              value={text}
              placeholder="What do you need to do today"
             onChange={handleText}
            />{" "}

            <button className="border border-purple-500 text-2xl bg-purple-500 rounded-md px-12 py-5"
            onClick={addTodo}
            >
              {" "}
              Add{" "}
            </button>
          </form>
          {error && <div className="text-red-500 text-2xl mt-1">Please Enter Text</div>}
          </div>
      
          <div className="">
          {
            todos.map(t=>(
              <Todo 
              todo={t}
              removeTodo={()=>removeTodo(t.id)}
              handleCheck={()=>{
                handleCheck(t);
              }}
              />
            ))
          }
          </div>
        </div>
      </div>
    </>
  );
};
function Todo(props){
  return(
    <>
    <div className="flex items-center justify-between mt-5 ">
    <span
        style={{ textDecoration: props.todo.check ? "line-through" : "none" }}
        className="flex items-center text-red-400  text-2xl w-1/2"
      >
        <input type="checkbox" onClick={props.handleCheck}  />
        &nbsp;
        {props.todo.text}
      </span>
      <button className="px-4 py-4 text-2xl rounded-md bg-red-500" onClick={props.removeTodo}> Remove </button>
    </div>
    </>
  )
}

export default TableData;
