import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ContextService } from '../context/Context';
const TaskModal = ({ selectedTask }) => {
    let { updateTask } = useContext(ContextService)
    let { name, description, level } = selectedTask || {}
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
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
            {selectedTask ? <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className='flex justify-between'>
                        <h3 className="font-bold text-lg">Update the task</h3>
                        <button className="btn btn-sm btn-primary" onClick={handleCloseModal}>Close</button>
                    </div>
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
            </dialog>
                : <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <div className='flex justify-between'>
                            <h3 className="font-bold text-lg">Update the task</h3>
                            <button className="btn btn-sm btn-primary" onClick={handleCloseModal}>Close</button>
                        </div>
                        <div className="modal-action" >
                            <form method="dialog" className="card-body" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Task name</span>
                                    </label>
                                    <p >{name} </p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Task Description</span>
                                    </label>
                                    <textarea disabled className="textarea textarea-bordered w-full max-w-full" defaultValue={description}
                                    ></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Task Priority lebel </span>
                                    </label>
                                    <p>{level} </p>
                                </div>
                                <button className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            }
        </div>
    );
};
export default TaskModal;