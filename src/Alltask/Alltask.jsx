import React, { useContext, useState } from 'react';
import { ContextService } from '../context/Context';
import TaskModal from '../TaskModal/TaskModal';
const Alltask = () => {
  let { task, deletTask, taskchecked } = useContext(ContextService)
  const [selectedTask, setSelectedTask] = useState(null);
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
  return (
    <div>
      <div className='flex items-center justify-between mx-auto px-20'>
        <h1 className='text-xl font-bold uppercase py-5 text-center text-sky-600'>Task List</h1>
        <p className='text-4xl text-sky-600'>{task.length}</p>
      </div>
      {task.length === 0 ? <div className='text-center font-bold uppercase text-lg text-amber-900'>Add your task</div> : <div className='grid grid-cols-1 gap-3 mx-auto px-14  items-center pt-14'>
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
                {t.checked ? <button className="btn disabled" disabled >
                  Update Now
                </button> : <button className="btn " onClick={() => openModal(t)}>
                  Update Now
                </button>}
                <button className="btn btn-sm btn-primary mx-2" onClick={() => deletTask(t.name)} >Delete</button>
              </div>
            </div>
          ))
        }
      </div>

      }
      {/* Modal for update the  task */}
      <TaskModal selectedTask={selectedTask}  ></TaskModal>
    </div>
  );
};
export default Alltask;