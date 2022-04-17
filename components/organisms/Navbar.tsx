import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import NavItem from '../atoms/NavItem'

function Navbar() {
  const [activeItem, setActiveItem] = useState<string>('')
  const { route } = useRouter()

  useEffect(() => {
    if (route === '/about') setActiveItem('About')
    if (route === '/project') setActiveItem('Projects')
    if (route === '/resume') setActiveItem('Resume')
  }, [])

  return (
    <div className="grid gap-4 px-6 py-3 my-3 md:grid-cols-2">
      <span className="text-xl font-bold border-b-4 text-light-secondary-dark border-light-secondary-light dark:text-white dark:border-dark-secondary md:text-2xl w-fit">
        {activeItem}
      </span>
      <div className="flex gap-4 text-lg font-bold md:place-content-end text-light-secondary-light dark:text-dark-secondary-dark">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/about"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/project"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  )
}

export default Navbar
