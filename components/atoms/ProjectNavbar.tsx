import React, { FunctionComponent } from 'react'
import { category } from '../../utils/data'
import { Category } from '../../utils/type'

// const NavItem = ({
//   value,
//   handlerFilterCategory,
//   active
// }: {
//   value: Category
//   handlerFilterCategory: Function
//   active: string
// }) => {
//   let className =
//     'font-bold capitalize cursor-pointer hover:text-green-500'
//   if (active === value) {
//     className += 'text-green-500'
//   }
//   return (
//     <li
//       className={className}
//       onClick={() => handlerFilterCategory(value)}
//     >
//       {value}
//     </li>
//   )
// }

const NavItem: FunctionComponent<{
  value: Category
  handlerFilterCategory: Function
  active: string
}> = ({ value, handlerFilterCategory, active }) => {
  let className =
    'font-bold capitalize cursor-pointer hover:text-light-secondary-dark'
  if (active === value) {
    className += ' text-light-secondary-dark dark:text-dark-secondary'
  } else {
    className +=
      ' text-light-secondary-light dark:text-white dark:hover:text-dark-secondary'
  }
  return (
    <ol>
      <li
        className={className}
        onClick={() => handlerFilterCategory(value)}
      >
        {value}
      </li>
    </ol>
  )
}

const ProjectNavbar: FunctionComponent<{
  handlerFilterCategory: Function
  active: string
}> = (props) => {
  return (
    <div className="flex gap-3 py-2 overflow-x-auto list-none px-7">
      {category.map((item) => (
        <NavItem value={item} key={item} {...props} />
      ))}
      {/* <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="nextjs" {...props} />
      <NavItem value="go" {...props} />
      <NavItem value="HTML" {...props} /> */}
    </div>
  )
}

export default ProjectNavbar
