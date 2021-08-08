export const Navtools = () => {
  return (
    <div
      className="nav-tools flex"
      style={{
        marginTop: '2px',
        padding: '3px 0 0 0',
      }}
    >
      <div
        className="border border-transparent cursor-pointer hover:border-white"
        style={{
          marginRight: '0px',
          marginLeft: '1px',
          paddingLeft: '9px',
          paddingRight: '9px',
          paddingBottom: '5px',
          display: 'flex',
          flexFlow: 'column nowrap',
          justifyContent: 'center',
        }}
      >
        <div className="flex relative">
          <div
            style={{
              width: '24px',
              height: '18px',
              backgroundImage:
                'url(https://m.media-amazon.com/images/S/sash/rzrQQdi0aRm6Dap.png)',
              backgroundPosition: '0 -184px',
            }}
          ></div>
          <span className="h-full flex flex-col justify-end">
            <span
              style={{
                borderStyle: 'solid',
                borderWidth: '4px',
                borderColor: 'transparent',
                borderTop: '4px solid #666',
                backgroundImage:
                  'url(https://images-na.ssl-images-amazon.com/images/G/15/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936603_.png)',
                backgroundPosition: '0 1000px',
                backgroundRepeat: 'repeat-x',
              }}
            ></span>
          </span>
        </div>
      </div>

      <div
        className="border border-transparent cursor-pointer hover:border-white"
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          // height: '50px',
          paddingLeft: '9px',
          paddingRight: '9px',
          // paddingBottom: '10px',
        }}
      >
        <div
          className="nav-line-1-container text-white"
          style={{
            width: '100%',
            height: '14px',
            marginTop: '2px',
            fontSize: '12px',
            lineHeight: '14px',
            fontWeight: '400',
          }}
        >
          Hello, Sign in
        </div>

        <div
          className="nav-line-2 text-white"
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '14px',
            lineHeight: '15px',
            fontWeight: '700',
            whiteSpace: 'nowrap',
          }}
        >
          <span>Account & Lists</span>

          <span
            style={{
              marginTop: '4px',
              marginLeft: '4px',
              borderStyle: 'solid',
              borderWidth: '4px',
              borderColor: 'transparent',
              borderTop: '4px solid #666',
              backgroundImage:
                'url(https://images-na.ssl-images-amazon.com/images/G/15/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936603_.png)',
              backgroundPosition: '0 1000px',
              backgroundRepeat: 'repeat-x',
            }}
          ></span>
        </div>
      </div>

      <div
        className="text-white flex flex-col border border-transparent cursor-pointer hover:border-white"
        style={{
          paddingRight: '9px',
          paddingLeft: '9px',
        }}
      >
        <span
          style={{
            marginTop: '2px',
            height: '14px',
            fontSize: '12px',
            lineHeight: '14px',
            fontWeight: '400',
          }}
          className="nav-line-1"
        >
          Returns
        </span>
        <span
          style={{
            fontSize: '14px',
            lineHeight: '15px',
            fontWeight: '700',
            whiteSpace: 'nowrap',
          }}
          className="nav-line-2"
        >
          & Orders
        </span>
      </div>

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
    </div>
  )
}
