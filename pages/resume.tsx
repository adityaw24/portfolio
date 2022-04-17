import React from 'react'
import Bar from '../components/atoms/Bar'
import { language, tools } from './api/data'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from '../utils/animation'

function resume() {
  return (
    <motion.div
      className="px-6 py-2 overflow-auto"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Education & Experience */}
      <div className="grid gap-6 xl:grid-cols-2">
        <motion.div
          variants={fadeInUp}
          animate="animate"
          initial="initial"
        >
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="mt-4 mb-2 text-xl font-bold">
              Electrical Engineering
            </h5>
            <p className="-mt-2 font-semibold">
              Kalimantan Institute of Technology (2015-2020)
            </p>
            <p className="my-1">
              I am graduated B.Eng in Electronic Engineering from
              Kalimantan Institute of Technology
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          animate="animate"
          initial="initial"
        >
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="grid grid-cols-1 gap-6 mt-3 ">
            <div>
              <h5 className="mb-2 text-xl font-bold">
                Web Developer
              </h5>
              <p className="-mt-2 font-semibold">
                PT. Solusi Media Ravel Teknologi (2021-2021)
              </p>
              <p className="my-1">
                Build frontend ERP and Corporate Web Event with PHP,
                jQuery and Bootstrap.
              </p>
            </div>
            <div>
              <h5 className="mb-2 text-xl font-bold">
                Fullstack Developer
              </h5>
              <p className="-mt-2 font-semibold">
                PT. Pro Sigmaka Mandiri (2022-on)
              </p>
              <p className="my-1">
                Placement at Xapiens Teknologi Indonesia
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Language & Tools */}
      <div className="grid gap-6 mt-6 xl:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">
            Languages & Frameworks
          </h5>
          <div className="my-2">
            {language.map((lang) => (
              // <Bar key={lang.name} data={lang} />
              <Bar
                key={lang.name}
                Icon={lang.Icon}
                level={lang.level}
                name={lang.name}
              />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">
            Tools & Software
          </h5>
          <div className="my-2">
            {tools.map((tool) => (
              // <Bar key={tool.name} data={tool} />
              <Bar
                key={tool.name}
                Icon={tool.Icon}
                level={tool.level}
                name={tool.name}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default resume
