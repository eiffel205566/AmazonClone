const Logo = () => {
  return (
    <div
      style={{
        padding: '1px 8px 0 6px',
      }}
      className="logoContainer flex border border-transparent cursor-pointer hover:border-white"
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
  )
}

export default Logo
