export const NavForm = () => {
  return (
    <div
      style={{
        // minWidth: '360px',
        padding: '5px 4px 10px 3px',
        // height: '60px',
        whiteSpace: 'nowrap',
        borderRadius: '4px 4px 4px 4px',
      }}
      className="nav-search flex flex-grow"
    >
      <form
        action=""
        className="flex-grow"
        style={{
          display: 'flex',
          height: '40px',
          fontSize: '14px',
          whiteSpace: 'nowrap',
          borderRadius: '4px 4px 4px 4px',
        }}
      >
        <div
          className="nav-left"
          style={{
            color: '#0F1111',
            whiteSpace: 'nowrap',
            fontSize: '14px',
            width: 'auto',
            height: 'auto',
          }}
        >
          <div
            className="nav-search-scope nav-sprite h-full"
            style={{
              display: 'flex',
              position: 'relative',
              backgroundColor: '#f3f3f3',
              // borderLeft: '1px solid #f3f3f3',
              // borderTop: '1px solid #f3f3f3',
              // borderBottom: '1px solid #f3f3f3',
              // height: '40px',
              paddingLeft: '-5px',
              // borderRadius: '4px 4px 4px 4px',
              borderTopLeftRadius: '4px',
              borderBottomLeftRadius: '4px',
            }}
          >
            <span
              className="nav-search-label"
              style={{
                display: 'block',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                color: '#555',
                fontSize: '12px',
                lineHeight: '33px',
                marginRight: '21px',
                marginLeft: '5px',
                minWidth: '19px',
              }}
            >
              <span className="h-full flex flex-col justify-center">All</span>
            </span>
            <i
              style={{
                position: 'absolute',
                top: '18px',
                right: '8px',
                borderStyle: 'solid',
                borderWidth: '4px',
                borderColor: 'transparent',
                borderTop: '4px solid #666',
                backgroundImage:
                  'url(https://images-na.ssl-images-amazon.com/images/G/15/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936603_.png)',
                backgroundPosition: '0 1000px',
                backgroundRepeat: 'repeat-x',
              }}
            ></i>
          </div>
        </div>

        <div
          className="nav-fill bg-white flex-grow h-full"
          style={{
            minWidth: '305px',
            // maxWidth: '700px',
            padding: '7px 10px 10px 0',
          }}
        ></div>
        <div
          className="nav-search-submit nav-sprite h-full"
          style={{
            width: '45px',
            backgroundColor: '#febd69',
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px',
          }}
        >
          <span
            className="h-full w-full block"
            style={{
              color: '#111',
              backgroundImage:
                'url(https://images-na.ssl-images-amazon.com/images/G/15/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936603_.png)',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: '2px -280px',
            }}
          ></span>
        </div>
      </form>
    </div>
  )
}
