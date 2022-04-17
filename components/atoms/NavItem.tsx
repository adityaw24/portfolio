import Link from 'next/link'
import { NavItemProps } from '../../utils/type'

function NavItem({
  activeItem,
  setActiveItem,
  name,
  route
}: NavItemProps) {
  return activeItem !== name ? (
    <Link href={route}>
      <span
        onClick={() => setActiveItem(name)}
        aria-hidden="true"
        className="cursor-pointer dark:hover:text-dark-secondary-light hover:text-light-secondary-dark"
      >
        {name}
      </span>
    </Link>
  ) : null
}

export default NavItem
