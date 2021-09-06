import NavListSingleList from './NavListSingleList'
import { select, setSecondLevelMenu } from 'src/redux/actions/index'
import { connect } from 'react-redux'

const NavListOrigin = (props) => {
  const { setSecondLevelMenu, secondLevelMenu } = props
  return (
    <div
      className="flex"
      id="hmenu-content"
      style={{
        position: 'relative',
        overflowX: 'hidden',
        height: '100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: '0',
          left: '0',
          top: '0',
          bottom: '0',
        }}
        className={`myHmenuContainer w-screen flex transform transition-all duration-500 -translate-x-${
          secondLevelMenu ? '1' : '0'
        }/2`}
      >
        <NavListSingleList setSecondLevelMenu={setSecondLevelMenu} />
        <NavListSingleList />
      </div>
    </div>
  )
}

const NavList = connect(select, { setSecondLevelMenu })(NavListOrigin)

export default NavList
