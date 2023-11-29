import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ContextService } from '../context/Context';
import { useParams } from 'react-router-dom';

const Updatetask = () => {
    const { task  } = useContext(ContextService);
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
       console.log(data);
     
      
      }
    
    return (
        <div>
             <div className="  hero-content min-h-screen  ">
   
   <div className="card  w-full max-w-2xl shadow-2xl bg-base-100">
     <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Task name</span>
         </label>
         <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full"  {...register("name", {required:true})} defaultValue={task.name} required />
                 </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text">Task Description</span>
         </label>
         <textarea className="textarea textarea-bordered w-full max-w-full" placeholder="type here"  {...register("description")}></textarea>
                 </div>
       <div className="form-control">
       <label className="label">
           <span className="label-text">Task Priority level</span>
         </label>
       <select className="select select-bordered w-full max-w-full" {...register("level")}>
       <option value="high">high</option>
       <option value="medium">medium</option>
       <option value="low">low</option>
</select>
       </div>
       <div className="form-control mt-6">
         <button className="btn btn-primary">Add</button>
       </div>
     </form>
   </div>
 </div>
</div>
       
    );
};

export default Updatetask;