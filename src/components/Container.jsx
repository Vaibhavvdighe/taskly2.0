import React from 'react'
import { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


//randomize the colors of task blocks
// const colors1 = ["#cdb4db","#bde0fe","#a2d2ff","#c7f9cc"];
// const colors2 = ["#ffc8dd","#e0e1dd","#ffc2d1","#a0c4ff"];

// console.log(Math.floor(Math.random() * colors1.length));

const Container = () => {

  const savetoLS = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }  

//   useEffect(() => {
//     let tasks = JSON.parse(localStorage.getItem("tasks"))
//     setTasks(tasks)
//   }, [])
  
  useEffect(() => {
    let todoString = localStorage.getItem("tasks")
    if(todoString){
      let tasks = JSON.parse(localStorage.getItem("tasks")) 
      setTasks(tasks)
    }
  }, [])
  

  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  const toggleFinished = () => {
    setshowFinished(!showFinished); 
  }
  

  const handleAdd = () => {
    if(todo=="") {
      alert("Cannot add empty task! Try again");
      return;
    }
    setTasks([...tasks, {id:uuidv4(), todo, isCompleted:false}]);
    setTodo("");
    savetoLS();
  }

  const handleEdit = (e) => {
    let currenttask = e.todo;
    setTodo(currenttask);

    let currentTaskid = e.id;

    let newTasks = tasks.filter(item => {
        return item.id !== currentTaskid;
    }); 
    setTasks(newTasks);
    savetoLS();
  }

  const handleDelete = (e,id) => {
    if(confirm(`Are you sure to Delete?`)) {
      let newTasks = tasks.filter(item => {
        return item.id !== id
      }); 
      setTasks(newTasks);
      savetoLS();
    } else {
      return
    }  
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  } 

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = tasks.findIndex(item => {
      return item.id == id
    })

    let newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
    savetoLS();
  }
  

  return (
    <div className='container1 bg-zinc-300 rounded-xl w-full md:w-3/4 m-auto h-fit p-2 md:px-5 '>
        	<h2 className='my-2 font-bold md:text-xl text-sm'>Got some Task?</h2>
        	<div className="addContainer flex justify-evenly m-auto w-full">
        		<input type="text" name="" id="" onChange={handleChange} value={todo} className='bg-white md:rounded-xl w-2/3 md:h-10 md:p-2 p-1 h-6 rounded-lg'/>
          		<button className='md:bg-zinc-200 hover:bg-white hover:scale-105 cursor-pointer transition-all duration-100 md:py-2 md:px-10 px-2 md:rounded-xl rounded-lg bg-white text-xs md:text-base' onClick={handleAdd}> + Add</button>
        	</div>

        	<h1 className='font-bold md:text-2xl text-lg md:mt-6 mt-4 '>Your Todos</h1>
        	<div className="my-4 md:text-md text-xs">
            	<input type="checkbox" checked={showFinished} onChange={toggleFinished} /> Show Completed Tasks
        	</div>
        	<div className="tasks md:text-base text-xs">

          		{tasks.length == 0 && <div className='m-4'>No Todos to display</div>}

         		{tasks.map(item => {
            		return (showFinished || !item.isCompleted) && <div key={item.id} className="flex justify-between my-3 bg-gradient-to-r from-[#ad98f4] to-[#fda7c1] md:rounded-xl rounded-lg w-full md:p-1">
					<div className="flex gap-2">
                    	<input type="checkbox" onChange={handleCheckbox} name={item.id} id="" checked={item.isCompleted} className='ml-2'/>
                    	<div className={item.isCompleted?"line-through w-fit pt-2":"w-fit pt-2"}>{item.todo}</div>
                	</div>
                	<div className="buttons flex md:h-10 h-fit w-fit">
                    	<button className="edit m-1 bg-zinc-200 hover:bg-white hover:scale-105 p-1 md:px-3 px-2 md:rounded-lg rounded-md cursor-pointer transition-all duration-100" onClick={() => {handleEdit(item)}}>Edit</button>
                    	<button className="delete m-1 bg-zinc-200 hover:bg-white hover:scale-105 p-1 md:px-3 px-2 md:rounded-lg rounded-md cursor-pointer transition-all duration-100" onClick={(e) => {handleDelete(e,item.id)}}>Delete</button>
                	</div>
            	</div>
         		})} 
        	</div>
      
    </div>
  )
}

export default Container