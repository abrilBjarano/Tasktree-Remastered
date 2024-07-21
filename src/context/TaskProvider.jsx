import { useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "../taskReducer";


const initialState = {
   incomplete: [
      { id: new Date().getTime() * 3, description: 'Crear Tasktree', done: false },
      { id: new Date().getTime() * 2, description: 'Ir a correr', done: false }
   ],
   completed: [
      { id: new Date().getTime() * 5, description: 'Lavar mi Miata', done: true },
      { id: new Date().getTime() * 4, description: 'Prepara viaje a Bra', done: true }
   ]
}


export const TaskProvider = ({ children }) => {

   const [ tasks, dispatch ] = useReducer( taskReducer, initialState );


   const addTask = ( newTask ) => {
      dispatch({
         type: 'Add task',
         payload: newTask
      })
   };

   const deleteTask = ( id ) => {
      dispatch({
         type: 'Delete task',
         payload: id
      })
   };

   const deleteCompleted = () => {
      dispatch({
         type: 'Delete completed'
      })
   };


   return (
      <TaskContext.Provider value={{ tasks, addTask, deleteTask, deleteCompleted }}>
         { children }
      </TaskContext.Provider>
   )
}
