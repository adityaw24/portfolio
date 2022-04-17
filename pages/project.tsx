import React, { useState } from 'react'
import ProjectCard from '../components/atoms/ProjectCard'
import ProjectNavbar from '../components/atoms/ProjectNavbar'
import { fadeInUp, routeAnimation, stagger } from '../utils/animation'
import { projects as projectData } from '../utils/data'
import { Category } from '../utils/type'
import { motion } from 'framer-motion'

function Project() {
  const [projects, setProjects] = useState(projectData)
  const [active, setActive] = useState('all')

  const handlerFilterCategory = (category: Category) => {
    if (category === 'all') {
      setProjects(projectData)
      setActive(category)
      return
    } else {
      const newArrayCategory = projectData.filter(
        (item) => item.category.includes(category) === true
      )

      setProjects(newArrayCategory)
      setActive(category)
    }
  }

  return (
    <motion.div
      className="h-full"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ProjectNavbar
        handlerFilterCategory={handlerFilterCategory}
        // onClick={() => handlerFilterCategory('react')}
        active={active}
      />
      <motion.div
        className="relative grid grid-cols-12 gap-10 mx-5 mt-1 overflow-auto mb-7"
        variants={stagger}
        animate="animate"
        initial="initial"
        // style={{ height: '67vh' }}
      >
        {projects.map((project) => (
          <motion.div
            className="col-span-12 sm:col-span-6 lg:col-span-4"
            key={project.name}
            variants={fadeInUp}
          >
            <ProjectCard
              name={project.name}
              category={project.category}
              deployed={project.deployed}
              description={project.description}
              image={project.image}
              github={project.github}
              techStack={project.techStack}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Project
