import React, { useContext, useState } from 'react';
import  { ContextService } from '../context/Context';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Alltask = () => {

   let {task,deletTask ,taskchecked,updateTask}= useContext(ContextService)
   const [selectedTask, setSelectedTask] = useState([]);
console.log(selectedTask?.level);
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
   console.log(data);
   let updateinfo= {
    name:data.name, description:data.description,level:data.newlevel
   }
   if (selectedTask) {
    updateTask(selectedTask.name,updateinfo); 
    handleCloseModal();
  }
  
  }
  const handleCloseModal = () => {
    const modal = document.getElementById('my_modal_1');
    if (modal) {
      modal.close();
    }
  };
    return (
        <div>
            
            <div className='grid grid-cols-1 gap-3 mx-auto px-14  items-center pt-14'>
                {
                    task.map(t=>(
                        <div  className={`alert ${t.checked ? 'checked line-through text-slate-400' : ''}`}>
                       <input type="checkbox"  className="checkbox"  checked={t.checked} onChange={()=> taskchecked(t.name)}/>
                      <div>
                      <p >{t.name}</p>
                        <span className='tex-sm'><span className='font-bold text-sm'>Description:</span> {t.description}</span>
                        <p className='text-xs'><span className='font-bold'>Priority</span> {t.level}</p>
                       {t.checked ? <button className='text-green-500'>Completed</button> : <button className='text-red-800'>Not completed</button> }
                      </div>
                        <div>
                          
                          <button className="btn" onClick={()=>   
                           { document.getElementById('my_modal_1').showModal(); setSelectedTask(t);}}>
                            open modal
                            </button>

                         
                          <button className="btn btn-sm btn-primary mx-2" onClick={()=> deletTask(t.name)} >Delete</button>
                        </div>
                      </div>
                    ))
                }


            </div>
            <dialog id="my_modal_1" className="modal">
  <div className="modal-box ">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
   
     <form method="dialog" className="card-body" onSubmit={handleSubmit(onSubmit)}>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Task name</span>
         </label>
         <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full"  {...register("name", {required:true})} defaultValue={selectedTask?.name} required />
                 </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Task Description</span>
         </label>
         <textarea className="textarea textarea-bordered w-full max-w-full" placeholder="type here"  {...register("description")}
         defaultValue={selectedTask?.description}
         ></textarea>
                 </div>
       <div className="form-control">
       <label className="label">
           <span className="label-text">Task Priority lebel <span className='font-bold'> {selectedTask?.level}</span></span>
         </label>
       <label className="label">
           <span className="label-text">Update Task Priority lebel </span>
         </label>
       <select className="select select-bordered w-full max-w-full" {...register("newlevel")} 
        required
       >
        <option value="">select the task</option>
       <option value="high">high</option>
       <option value="medium">medium</option>
       <option value="low">low</option>
</select>
       </div>
       <div className="form-control mt-6">
         <button className="btn btn-primary">Add</button>
       </div>
 <button className="btn" onClick={handleCloseModal}>Close</button>
     </form>
   
      
    
    </div>
  </div>
</dialog>
        </div>
    );
};

export default Alltask;