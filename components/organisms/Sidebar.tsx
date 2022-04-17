import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { HiDownload } from 'react-icons/hi'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

const myLoader = () =>
  'https://media-exp1.licdn.com/dms/image/C5603AQFZg2Wp4HM3Uw/profile-displayphoto-shrink_800_800/0/1596866144733?e=1654732800&v=beta&t=oUeM0_j7eS1-QCfdsZbqfarIhQMYwkM66R99OI25Pa8'

const buttonSidebar =
  'w-8/12 px-5 py-2 my-1.5 font-bold text-white rounded-full drop-shadow-xl bg-gradient-to-br from-light-secondary-light to-light-secondary-dark dark:from-dark-secondary-light dark:to-dark-secondary-dark dark:text-black focus-outline-none'

function Sidebar() {
  const { theme, setTheme } = useTheme()
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-h-full dark:text-dark-white">
      <div className="w-40 h-40 mx-auto border-4 rounded-full dark:border-dark-grey">
        <Image
          src="dms/image/C5603AQFZg2Wp4HM3Uw/profile-displayphoto-shrink"
          width={150}
          height={150}
          loader={myLoader}
          alt="profile"
          layout="responsive"
          className="w-32 h-32 mx-auto rounded-full"
        />
      </div>
      <h3 className="my-2 text-2xl font-medium tracking-tight font-montserrat">
        Purwa Aditya Wisnu Wardhana
      </h3>
      <p className="px-2 py-1 my-3 rounded-full bg-light-primary-dark dark:bg-dark-primary-light">
        Full Stack Developer
      </p>
      <a
        href="/CV - Purwa Aditya Wisnu Wardhana.pdf"
        target="_blank"
        download="CV - Purwa Aditya Wisnu Wardhana.pdf"
        className="flex items-center justify-center px-2 py-1 my-3 rounded-full bg-light-primary-dark dark:bg-dark-primary-light"
      >
        <HiDownload className="w-6 h-6 mx-3" />
        Download Resume
      </a>

      {/* social media */}
      <div className="flex w-9/12 py-1 mx-auto text-light-secondary-dark dark:text-dark-secondary justify-evenly md:w-full">
        <motion.a
          href="https://github.com/adityaw24"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <FaGithub className="w-10 h-10" />
          <span className="hidden">Github</span>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/purwa-aditya-wisnu-wardhana/"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <FaLinkedin className="w-10 h-10" />
          <span className="hidden">LinkedIn</span>
        </motion.a>
      </div>

      {/* address */}
      <div className="py-2 my-2 -m-4 bg-light-primary-dark dark:bg-dark-primary-light">
        <div className="flex items-start justify-center my-2">
          <GoLocation className="w-6 h-6 mx-3" />
          <span>Jakarta, Indonesia</span>
        </div>
        <p className="my-2">adityawisnu104@gmail.com</p>
        {/* <p className="my-2">+62 813-4591-6660</p> */}
      </div>

      {/* email button */}
      <div className="grid grid-cols-1 py-2 justify-items-center">
        <motion.button
          className={buttonSidebar}
          onClick={() =>
            window.open('mailto:adityawisnu104@gmail.com')
          }
          type="button"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          Email Me
        </motion.button>
        <motion.button
          className={buttonSidebar}
          type="button"
          onClick={() => changeTheme()}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          Toggle Theme
        </motion.button>
      </div>
    </div>
  )
}

export default Sidebar
