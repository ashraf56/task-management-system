import React, { createContext, useEffect, useState } from 'react';
import toast, { ToastBar, Toaster } from 'react-hot-toast';
export let ContextService=createContext();
const ContextHome = ({ children }) => {
    let [task,setTask]= useState([])

    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      setTask(storedTasks);
    }, []); 

    const addTask=(tassk)=>{
      
            const updatedTasks = [...task, tassk];
           setTask(updatedTasks);
           updateLocalStorage(updatedTasks)

    }
const deletTask =(taskName)=>{
  const updatedTasks = task.filter((tsk) => tsk.name !== taskName);

 setTask(updatedTasks);
 updateLocalStorage(updatedTasks);

 }

const updateTask = (taskName,newdata) => {
  console.log(newdata);
  const updatedTasks = task.map((tsk) => (tsk.name === taskName ? { ...tsk, ...newdata} : tsk));
  setTask(updatedTasks) 
  updateLocalStorage(updatedTasks);
  };


  const taskchecked= (Task)=>{
    setTask((prevTasks) =>
    prevTasks.map((tsk) =>
      tsk.name === Task ? { ...tsk, checked: !tsk.checked } : tsk
    )
  );

  const updatedTasks = task.map((tsk) =>
    tsk.name === Task ? { ...tsk, checked: !tsk.checked } : tsk
  );
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  const updateLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
let value= {
    addTask, task ,deletTask,updateTask,taskchecked
}

   return(
    <ContextService.Provider value={value}>
    {children}
</ContextService.Provider>
   )
};

export default ContextHome;