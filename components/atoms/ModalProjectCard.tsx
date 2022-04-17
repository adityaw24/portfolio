import React from 'react'
import ReactModal from 'react-modal'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../../utils/animation'
import Image from 'next/image'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'

const socialMediaModal =
  'flex items-center px-4 py-2 space-x-3 text-lg rounded bg-light-primary-dark dark:bg-dark-primary-light'

function ModalProjectCard(props: any) {
  return (
    <ReactModal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      shouldCloseOnOverlayClick={true}
      contentLabel="Project Detail Modal"
      className="w-3/4 mx-auto border-0 my-14 lg:my-12 h-fit sm:w-2/4"
      ariaHideApp={false}
    >
      <motion.div
        className="flex flex-col w-full h-full gap-6 p-6 overflow-auto text-black rounded bg-light-primary dark:bg-dark-primary dark:text-white"
        variants={stagger}
        animate="animate"
        initial="initial"
      >
        {/* <button
            //   onClick={() => setShowDetail(false)}
            onClick={() => closeModal()}
            className="col-span-1 p-2 rounded-full place-self-end max-w-fit focus:outline-none bg-gray-50 dark:bg-black"
          >
            <MdClose size={30} />
          </button> */}
        {/* <div className="mx-auto"> */}
        <motion.div variants={fadeInUp}>
          <Image
            src={props.image}
            alt={props.name}
            width={1920}
            height={1080}
            layout="responsive"
            className="rounded"
          />
        </motion.div>
        {/* <img src={image} alt={name} /> */}
        {/* </div> */}
        <motion.div
          className="flex flex-col justify-center"
          variants={fadeInUp}
        >
          <h1 className="mb-3 text-xl font-medium md:text-2xl">
            {props.name}
          </h1>
          <p className="mb-3 font-medium ">{props.description}</p>
          <motion.div
            className="flex flex-wrap gap-2 text-sm"
            variants={fadeInUp}
          >
            {props.techStack.map((tech: any) => (
              <span
                key={tech}
                className="px-2 py-1 rounded bg-light-primary-dark dark:bg-dark-primary-light"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          <motion.div
            className="flex flex-wrap justify-center gap-4 pt-10"
            variants={stagger}
            animate="animate"
            initial="initial"
          >
            <motion.a
              href={props.github}
              target="_blank"
              className={socialMediaModal}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              variants={fadeInUp}
            >
              <AiFillGithub className="w-6 h-6" />
              <span>Github</span>
            </motion.a>
            <motion.a
              href={props.deployed}
              target="_blank"
              className={socialMediaModal}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              variants={fadeInUp}
            >
              <AiFillProject className="w-6 h-6" />
              <span>Deployed</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </ReactModal>
  )
}

export default ModalProjectCard
