import React from 'react'
import ServiceCard from '../components/atoms/ServiceCard'
import { service } from '../utils/data'
import axios from 'axios'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation, stagger } from '../utils/animation'

function index() {
  return (
    <motion.div
      className="flex flex-col flex-grow pt-1 overflow-y-clip lg:h-75vh"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="px-6 my-3 font-medium">
        I am B.Eng Degree in Electrical Engineering from Kalimantan
        Institute of Technology (ITK).
        <br />
        I have been working as a Web Developer for 1 year with tech
        stack Reactjs and Nextjs for Frontend and Golang for Backend.
        Commonly used frameworks for styling are TailwindCSS,
        Bootstrap and Material UI.
        <br />
        Another skill in UI Design with Figma.
      </h5>
      <div className="flex-grow px-6 py-8 mt-5 bg-light-primary-dark dark:bg-dark-primary-light">
        <h6 className="mb-2 font-bold">What I Offer</h6>
        <motion.div
          className="grid gap-6 xl:grid-cols-2"
          variants={stagger}
          animate="animate"
          initial="initial"
        >
          {service.map((item) => (
            <motion.div
              className="rounded-lg bg-light-primary dark:bg-dark-primary lg:col-span-1 dark:bg-dark"
              key={item.id}
              variants={fadeInUp}
            >
              <ServiceCard service={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/services', {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*'
    }
  })
  const data = JSON.stringify(res.data)

  console.log('SERVER', service)
  return { props: { service: data } }
}

// export const getStaticProps = async () => {
//   const res = await axios.get('http://localhost:3001/api/services', {
//     headers: {
//       Accept: 'application/json, text/plain, */*',
//       'User-Agent': '*'
//     }
//   })
//   const data = JSON.stringify(res.data)

//   console.log('SERVER', service)
//   return { props: { service: data } }
// }