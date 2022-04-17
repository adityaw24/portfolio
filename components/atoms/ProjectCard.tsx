import Image from 'next/image'
import React, { useState } from 'react'
import { ProjectType } from '../../utils/type'
import { motion } from 'framer-motion'
import ModalProjectCard from './ModalProjectCard'

function ProjectCard({
  name,
  image,
  description,
  github,
  deployed,
  techStack
}: ProjectType) {
  // const [showDetail, setShowDetail] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  return (
    <motion.div
      className="p-4 rounded-lg bg-light-primary-dark dark:bg-dark-primary-light"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      <div
        className="flex flex-col"
        //   onClick={() => setShowDetail(true)}
        onClick={() => openModal()}
      >
        <Image
          src={image}
          alt={name}
          width={1920}
          height={1080}
          layout="responsive"
          className="rounded-lg cursor-pointer"
        />
        <p className="my-2 text-center">{name}</p>
      </div>
      <ModalProjectCard
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        image={image}
        name={name}
        description={description}
        techStack={techStack}
        github={github}
        deployed={deployed}
      />
      {/* {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-6 text-black bg-white rounded-lg md:grid-cols-2 gap-x-12 dark:bg-black dark:text-dark-white">
          <div>
            <Image
              src={image}
              alt={name}
              width={400}
              height={250}
              className="rounded"
            />
            <div className="flex justify-center pt-4 space-x-3">
              <Link href={github}>
                <a
                  target="_blank"
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-100 rounded dark:bg-dark-grey"
                >
                  <AiFillGithub className="w-6 h-6" />
                  <span>Github</span>
                </a>
              </Link>
              <Link href={deployed}>
                <a
                  target="_blank"
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-100 rounded dark:bg-dark-grey"
                >
                  <AiFillProject className="w-6 h-6" />
                  <span>Deployed</span>
                </a>
              </Link>
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-lg font-medium md:text-2xl">
              {name}
            </h2>
            <p className="mb-3 font-medium ">{description}</p>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-200 rounded dark:bg-dark-grey"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              onClick={() => setShowDetail(false)}
              className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-gray-50 dark:bg-black"
            >
              <MdClose size={30} />
            </button>
          </div>
        </div>
      )} */}
    </motion.div>
  )
}

export default ProjectCard
