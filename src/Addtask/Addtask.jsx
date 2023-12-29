
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import ContextHome, { ContextService } from '../context/Context';
import toast, { Toaster } from 'react-hot-toast';

const Addtask = () => {
  let { addTask } = useContext(ContextService)

  const {
    register,
    handleSubmit,
    watch, reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {


    let info = {
      name: data.name, description: data.description, level: data.level, checked: false
    }
    addTask(info)

    toast.success('added')

    reset()
  }



  return (
    <div>
      <div >
        <div className="  hero-content min-h-screen  ">

          <div className="card  w-full max-w-2xl shadow-2xl bg-white">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Task name</span>
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full"  {...register("name", { required: true })} required />
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
                <select className="select select-bordered w-full max-w-full" {...register("level")} required>
                  <option value="">select the task</option>
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
        <Toaster></Toaster>
      </div>
    </div>
  );
};

export default Addtask;