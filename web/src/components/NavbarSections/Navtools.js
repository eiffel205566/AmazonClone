import { CountrySelection } from './Navtools/CountrySelection'
import { NavtoolsSignIn } from './Navtools/NavtoolsSignIn'
import ReturnOrders from './Navtools/ReturnOrders'
import ShoppingCart from './Navtools/ShoppingCart'

export const Navtools = () => {
  return (
    <div
      className="nav-tools flex"
      style={{
        marginTop: '2px',
        padding: '3px 0 0 0',
      }}
    >
      <CountrySelection />
      <NavtoolsSignIn />
      <ReturnOrders />
      <ShoppingCart />
    </div>
  )
}
