const Navbar = () => {
  return (
    <nav className="w-screen h-15 bg-topNav flex py-1">
      <div
        style={{
          padding: '1px 8px 0 6px',
        }}
        className="logoContainer flex border border-transparent hover:border-white"
      >
        <div
          style={{
            backgroundImage:
              'url(https://images-na.ssl-images-amazon.com/images/G/15/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936603_.png)',
            backgroundRepeat: 'repeat-x',
            float: 'left',
            textIndent: '-500px',
            backgroundPosition: '-10px -51px',
            width: '97px',
            height: '30px',
            marginTop: '12px',
          }}
          className="h-full"
        ></div>
        <div style={{ marginTop: '12px' }} className="text-white">
          .ca
        </div>
      </div>

      <div
        style={{
          padding: '5px 9px 5px 9px',
          // margin: '5px 2px 5px 0',
        }}
        className="nav-global-location-slot flex border border-transparent hover:border-white"
      >
        <div
          style={{
            backgroundImage:
              'url(https://images-na.ssl-images-amazon.com/images/G/15/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936603_.png)',
            backgroundRepeat: 'repeat-x',
            backgroundPosition: '-71px -378px',
            width: '15px',
            height: '18px',
            marginTop: '8px',
          }}
        ></div>
        <div style={{ marginLeft: '3px' }} className="text-white flex flex-col">
          <div
            style={{
              fontSize: '12px',
              lineHeight: '14px',
              height: '14px',
              fontWeight: '400',
              whiteSpace: 'nowrap',
              color: '#ccc',
            }}
          >
            Hello
          </div>
          <div
            style={{
              fontSize: '14px',
              lineHeight: '15px',
              fontWeight: '700',
              whiteSpace: 'nowrap',
            }}
          >
            Select Your Address
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
