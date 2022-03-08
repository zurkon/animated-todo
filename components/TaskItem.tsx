import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import TaskLabel from './TaskLabel'
import { Task } from '../types'

interface TaskItemProps {
  data: Task,
  onRemove: (item: Task) => void
}

const DeleteTaskIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  )
}

const TaskItem = ({ data, onRemove }: TaskItemProps) => {
  const [done, setDone] = useState(false)

  const handleRemove = useCallback(() => {
    onRemove(data)
  }, [onRemove])

  return (
    <motion.div
      className="max-w-xl mx-auto px-4 py-4 bg-white dark:bg-slate-600 rounded-md shadow-lg"
      layout
      initial={{
        y: 46,
        scale: 0.3,
        opacity: 0
      }}
      animate={{
        y: 0,
        scale: 1,
        opacity: 1
      }}
      exit={{
        y: 46,
        scale: 0.3,
        opacity: 0
      }}
      transition={{
        duration: 0.4
      }}
    >
      <label className="flex items-center">
        <input
          className="rounded text-cyan-500 scale-125 focus:ring-cyan-500"
          type="checkbox"
          onChange={() => { setDone(!done) }}
        />
        <TaskLabel isDone={done} label={data.text} />
        <button className="ml-2 focus-visible:outline-cyan-500" aria-label="Remove Task" onClick={handleRemove}>
          <DeleteTaskIcon />
        </button>
      </label>
    </motion.div>
  )
}

export default TaskItem