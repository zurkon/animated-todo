import { motion } from 'framer-motion'

interface TaskLabelProps {
  isDone: boolean,
  label: string
}

const TaskLabel = ({ isDone, label }: TaskLabelProps) => {
  return (
    <motion.div
      className="ml-4 flex-1 whitespace-nowrap overflow-hidden text-clip"
      animate={isDone ? { x: [0, 5, 0] } : undefined}
      transition={{
        duration: 0.3
      }}
    >

      <motion.span
        className="relative px-1"
        animate={isDone ? { opacity: 0.3 } : { opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.4
        }}
      >
        {label}
        <motion.div
          className="absolute left-0 top-1/4 w-full h-2 border-b-[1px] border-black dark:border-slate-50"
          initial={{
            width: 0
          }}
          animate={isDone ? { width: '100%' } : { width: 0 }}
          transition={{
            duration: 0.3
          }}
        ></motion.div>
      </motion.span>
    </motion.div>
  )
}

export default TaskLabel