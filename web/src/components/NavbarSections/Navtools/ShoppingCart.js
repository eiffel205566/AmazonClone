const ShoppingCart = () => {
  return (
    <div
      style={{
        paddingRight: '8px',
        paddingLeft: '8px',
        paddingBottom: '10px',
        // height: '50px',
      }}
      className="flex border border-transparent cursor-pointer hover:border-white"
    >
      <div
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
          // justifyContent: 'flex-end',
          // alignItems: 'flex-start',
          height: '100%',
          position: 'relative',
        }}
      >
        <span
          className="text-center"
          style={{
            position: 'absolute',
            left: '13px',
            right: 'auto',
            top: '3px',
            color: '#f08804',
            fontSize: '16px',
            width: '19px',
            fontWeight: '700',
            lineHeight: '16px',
          }}
        >
          0
        </span>
        <span
          style={{
            display: 'block',
            width: '38px',
            height: '26px',
            backgroundImage:
              'url(https://images-na.ssl-images-amazon.com/images/G/15/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936603_.png)',
            backgroundRepeat: 'repeat-x',
            lineHeight: '44px',
            backgroundPosition: '-10px -340px',
          }}
        ></span>
      </div>
      <div
        id="Cart"
        className="text-white"
        style={{
          paddingTop: '20px',
          fontSize: '14px',
          lineHeight: '15px',
          fontWeight: '700',
        }}
      >
        Cart
      </div>
    </div>
  )
}

export default ShoppingCart
