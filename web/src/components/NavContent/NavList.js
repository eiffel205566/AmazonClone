import NavListSingleList from './NavListSingleList'

const NavList = () => {
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
        className="myHmenuContainer w-screen flex transform transition-all duration-500 translate-x-1/2"
      >
        <NavListSingleList />
        <NavListSingleList />
      </div>
    </div>
  )
}

export default NavList
