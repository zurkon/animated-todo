import { AnimatePresence } from "framer-motion"
import { Task } from "../types"
import TaskItem from "./TaskItem"

interface TaskListProps {
  data: Task[],
  onDelete: (item: Task) => void
}

const TaskList = ({ data, onDelete }: TaskListProps) => {

  return (
    <div className="w-full space-y-5">
      <AnimatePresence>
        {
          data.map(item => {
            return (
              <TaskItem key={item.id} data={item} onRemove={onDelete} />
            )
          })
        }
      </AnimatePresence>
    </div>
  )
}

export default TaskList