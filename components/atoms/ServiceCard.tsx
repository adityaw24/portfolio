import React, { FunctionComponent } from 'react'
import { ProfileService } from '../../utils/type'
// import { motion } from 'framer-motion'

const ServiceCard: FunctionComponent<{
  service: ProfileService
}> = ({ service: { title, about, Icon } }) => {
  const createMarkup = () => {
    return {
      __html: about
    }
  }

  return (
    <div className="grid items-center content-start h-full grid-cols-12 p-2 space-x-4">
      <Icon className="w-12 h-12 col-span-2 text-light-secondary justify-self-center dark:text-dark-secondary" />
      <div className="col-span-10">
        <h4 className="mb-2 font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  )
}

export default ServiceCard
