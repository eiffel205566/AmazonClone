const NavListSingleItemWithLink = (props) => {
  return (
    <li
      style={{
        listStyle: 'none',
        paddingBottom: '2px',
        margin: '0',
        display: 'list-item',
        textAlign: 'match-parent',
        fontSize: '14px',
        lineHeight: '16px',
      }}
    >
      <a
        style={{
          display: 'flex',
          paddingRight: '20px',
          paddingLeft: '36px',
          paddingTop: '13px',
          paddingBottom: '13px',
          alignItems: 'center',
          textDecoration: 'none',
          color: '#111',
        }}
        href="#home"
      >
        <div
          style={{
            display: 'flex',
            color: '#111',
          }}
        >
          {props.content}
        </div>
        <i
          style={{
            backgroundPosition: '-137px -288px',
            marginLeft: 'auto',
            width: '10px',
            height: '14px',
            backgroundImage:
              'url(https://images-na.ssl-images-amazon.com/images/G/15/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936603_.png)',
            backgroundRepeat: 'repeat-x',
          }}
        ></i>
      </a>
    </li>
  )
}

export default NavListSingleItemWithLink
