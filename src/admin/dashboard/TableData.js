import React,{useState} from "react";

const TableData = () => {
  const [list,setList] = useState();
  function handleSubmit(event){
    event.preventDefault();
   
  }
  function handleChange(event){
    setList(event.target.value);

  }
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="lg:w-3/5 w-full bg-white rounded-md p-10 m-10 shadow-md ">
          HEllo
        </div>
        <div className="lg:w-1/3 w-full bg-white rounded-md p-10 m-10 shadow-md ">
          <div className="flex items-center space-x-4">
    
           <input
              type="text"
              className=" text-xl rounded-md py-5 w-full px-4 border border-gray-400 outline-none"
              onChange={handleChange}
              placeholder="What do you need to do today"
            />{" "}
            <button className="border border-purple-500 text-2xl bg-purple-500 rounded-md px-12 py-5" onSubmit={handleSubmit}>
              {" "}
              Add{" "}
            </button>
     
          </div>
          <div className="">
            <p> {list} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableData;
