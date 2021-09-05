import NavListSingleItemNoLink from './NavListSingleItemNoLink'
import NavListSingleItemWithLink from './NavListSingleItemWithLink'

const NavListSingleList = () => {
  return (
    <ul
      style={{
        fontSize: '14px',
        lineHeight: '16px',
        paddingTop: '7px',
        paddingBottom: '30px',
        margin: '0',
        // position: 'absolute',
        // right: '0',
        // left: '0',
        // top: '0',
        // bottom: '0',
        willChange: 'transform',
      }}
      className="NavList hmenu hmenu-translateX hmenu-visible"
    >
      <li
        style={{
          listStyle: 'none',
          paddingBottom: '2px',
          margin: '0',
          display: 'list-item',
          textAlign: 'match-parent',
          fontSize: '14px',
          lineHeight: '16px',
          color: '#0F1111',
        }}
      >
        <div
          style={{
            paddingBottom: '5px',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '24px',
            color: '#111',
            textTransform: 'capitalize',
            display: 'inline-block',
            paddingRight: '20px',
            paddingLeft: '36px',
            paddingTop: '13px',
            alignItems: 'center',
          }}
        >
          trending
        </div>
      </li>
      <NavListSingleItemNoLink content={'Best Sellers'} />
      <NavListSingleItemNoLink content={'New Releases'} />
      <NavListSingleItemNoLink content={'Movers & Shakers'} />
      <li
        style={{
          borderBottom: '1px solid #d5dbdb',
          padding: '0',
          margin: '5px 0',
          listStyle: 'none',
        }}
        className="hmenu-separator"
      ></li>
      <li
        style={{
          listStyle: 'none',
          paddingBottom: '2px',
          margin: '0',
          display: 'list-item',
          textAlign: 'match-parent',
          fontSize: '14px',
          lineHeight: '16px',
          color: '#0F1111',
        }}
      >
        <div
          style={{
            paddingBottom: '5px',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '24px',
            color: '#111',
            textTransform: 'capitalize',
            display: 'inline-block',
            paddingRight: '20px',
            paddingLeft: '36px',
            paddingTop: '13px',
            alignItems: 'center',
          }}
        >
          Digital Content And Devices
        </div>
        <NavListSingleItemWithLink content={'Echo & Alexa'} />
      </li>
    </ul>
  )
}

export default NavListSingleList
