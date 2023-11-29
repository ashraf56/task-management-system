import React, { createContext, useState } from 'react';
export let ContextService=createContext();
const ContextHome = ({ children }) => {
    let [task,setTask]= useState([])

    const addTask=(tassk)=>{
      
           return setTask([...task,tassk])

    }
const deletTask =(taskName)=>{
    return setTask(task.filter(tsk=> tsk.name !== taskName))
}
const updateTask = (updatedTask) => {
   return setTask((prevTasks) =>
      prevTasks.map((tsk) =>
        tsk.name === taskName ? { ...updatedTask } : tsk
      )
    );
  };

  const taskchecked= (taskName)=>{
    return   setTask((prevTasks) =>
    prevTasks.map((tsk) =>
      tsk.name === taskName ? { ...tsk, checked: !tsk.checked } : tsk
    )
  );
  }

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