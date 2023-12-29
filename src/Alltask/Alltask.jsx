import React, { useContext, useState } from 'react';
import { ContextService } from '../context/Context';
import { useForm } from 'react-hook-form';

const Alltask = () => {

  let { task, deletTask, taskchecked, updateTask } = useContext(ContextService)
  const [selectedTask, setSelectedTask] = useState(null);
  let { name, description, level } = selectedTask || {}
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const openModal = (tsk) => {
    setSelectedTask(tsk);
    const modal = document.getElementById('my_modal_1');
    if (!modal) {
      return
    }
    else {
      modal.showModal();
    }

  };
  const onSubmit = (data) => {

    if (selectedTask) {
      updateTask(selectedTask.name, data);
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
      <h1 className='text-5xl font-bold uppercase py-5 text-center'>Task List</h1>

      <div className='grid grid-cols-1 gap-3 mx-auto px-14  items-center pt-14'>
        {
          task.map(t => (
            <div className={`alert ${t.checked ? 'checked line-through text-slate-400' : ''}`}>
              <input type="checkbox" className="checkbox" checked={t.checked} onChange={() => taskchecked(t.name)} />
              <div>

                <p >{t?.name}</p>
                <span className='tex-sm'><span className='font-bold text-sm'>Description:</span> {t?.description?.slice(0, 6)}...</span>
                <p className='text-xs'><span className='font-bold'>Priority</span> {t?.level}</p>
                {t.checked ? <button className='text-green-500'>Completed</button> : <button className='text-red-800'>Not completed</button>}
              </div>
              <div>

                <button className="btn" onClick={() => openModal(t)}>
                  Update Now
                </button>


                <button className="btn btn-sm btn-primary mx-2" onClick={() => deletTask(t.name)} >Delete</button>
              </div>
            </div>
          ))
        }


      </div>
      {selectedTask ? (<dialog id="my_modal_1" className="modal">

        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <button className="btn btn-sm btn-primary" onClick={handleCloseModal}>Close</button>

          <div className="modal-action" >

            <form method="dialog" className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task name</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered  w-full max-w-full" defaultValue={name}  {...register("name", { required: true })} />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task Description</span>
                </label>
                <textarea className="textarea textarea-bordered w-full max-w-full" placeholder="type here" defaultValue={description} {...register("description")}

                ></textarea>
              </div>
              <div className="form-control">

                <label className="label">
                  <span className="label-text">Update Task Priority lebel </span>
                </label>
                <select className="select select-bordered w-full max-w-full" defaultValue={level} {...register("level", { required: true })}

                >

                  <option value="high">high</option>
                  <option value="medium">medium</option>
                  <option value="low">low</option>
                </select>
              </div>

              <button className="btn btn-primary">Update</button>


            </form>



          </div>
        </div>
      </dialog>)
        : <dialog id="my_modal_1" className="modal">

          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <button className="btn btn-sm btn-primary" onClick={handleCloseModal}>Close</button>

            <div className="modal-action" >

              <form method="dialog" className="card-body">

                <h1>loadig...</h1>
              </form>



            </div>
          </div>
        </dialog>
      }
    </div>
  );
};

export default Alltask;