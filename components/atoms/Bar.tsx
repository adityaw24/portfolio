import React, { FunctionComponent } from 'react'
import { Skill } from '../../utils/type'
import { motion } from 'framer-motion'

// const Bar: FunctionComponent<{ data: Skill }> = ({
//   data: { Icon, level, name }
// }) => {
//     const barWidth = `${level}%`
//   return (
//     <div className="my-2 text-white bg-gray-100 rounded-full dark:bg-dark-grey">
//       <div
//         className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-300 dark:from-green-600 dark:to-blue-500"
//         style={{ width: barWidth }}
//       >
//         <Icon className="mr-3" />
//         {name}
//       </div>
//     </div>
//   )
// }

function Bar({ Icon, name, level }: Skill) {
  const barWidth = `${level}%`
  const variants = {
    initial: {
      width: 0
    },
    animate: {
      duration: 2,
      width: barWidth,
      type: 'spring',
      damping: 30,
      stiffness: 300
    }
  }
  return (
    <div className="my-2 text-white rounded-full bg-light-primary-dark dark:bg-dark-primary-light">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-br from-light-secondary-light to-light-secondary-dark dark:from-dark-secondary-light dark:to-dark-secondary-dark dark:text-black"
        style={{ width: barWidth }}
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  )
}

export default Bar
