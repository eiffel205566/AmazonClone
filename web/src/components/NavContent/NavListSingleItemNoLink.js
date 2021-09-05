const NavListSingleItemNoLink = (props) => {
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
        color: '#0F1111',
      }}
    >
      <div
        style={{
          paddingBottom: '5px',
          fontSize: '14px',
          lineHeight: '16px',
          color: '#111',
          textTransform: 'capitalize',
          display: 'inline-block',
          paddingRight: '20px',
          paddingLeft: '36px',
          paddingTop: '13px',
          alignItems: 'center',
        }}
      >
        {props.content}
      </div>
    </li>
  )
}

export default NavListSingleItemNoLink
