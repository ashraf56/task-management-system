import React, { useContext } from 'react';
import  { ContextService } from '../context/Context';
import { Link } from 'react-router-dom';

const Alltask = () => {

   let {task,deletTask ,taskchecked}= useContext(ContextService)


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
                          <button className="btn btn-sm">
                            <Link to={`/update/${t.name}`} >

                            </Link>
                          </button>
                          <button className="btn btn-sm btn-primary" onClick={()=> deletTask(t.name)} >Delete</button>
                        </div>
                      </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Alltask;