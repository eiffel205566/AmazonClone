import LocationSlot from 'src/components/NavbarSections/LocationSlot'
import Logo from 'src/components/NavbarSections/Logo'
import { NavForm } from 'src/components/NavbarSections/NavForm'
import { Navtools } from 'src/components/NavbarSections/Navtools'

const Navbar = () => {
  return (
    <nav className="w-screen h-15 bg-topNav flex py-1">
      <Logo />
      <LocationSlot />
      <NavForm />
      <Navtools />
    </nav>
  )
}

export default Navbar
