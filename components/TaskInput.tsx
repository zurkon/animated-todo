import { useCallback } from "react"

interface TaskInputProps {
  onSubmit: (text: string) => void
}

const NewTaskIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
    </svg>
  )
}

const AddTaskIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
  )
}

const TaskInput = ({ onSubmit }: TaskInputProps) => {

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    onSubmit(e.target[0].value)
    e.target[0].value = ''
  }, [onSubmit])

  return (
    <form
      className="relative mb-8 w-10/12 flex"
      onSubmit={handleSubmit}
    >
      <label htmlFor="new-task" className="sr-only">
        Create a New Task
      </label>
      <input
        id="new-task"
        type="text"
        placeholder="New Task"
        required
        className="peer flex-1 pl-10 rounded-md rounded-r-none border-gray-200  focus:border-cyan-500 focus:ring-cyan-500 bg-white dark:bg-slate-600 dark:border-slate-600 dark:placeholder:text-slate-50"
      />
      <div
        className="peer-focus:border-cyan-500 peer-focus:ring-cyan-500 peer-focus:ring-1 px-3 rounded-md rounded-l-none border border-l-0 border-gray-200 flex items-center bg-white dark:bg-slate-700 dark:border-slate-600"
      >
        <button className="focus-visible:outline-cyan-500" type="submit" aria-label="Add Task">
          <AddTaskIcon />
        </button>
      </div>

      <div className="flex items-center absolute left-0 inset-y-0 pl-3">
        <NewTaskIcon />
      </div>
    </form>
  )
}

export default TaskInput