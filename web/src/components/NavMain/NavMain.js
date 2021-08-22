import { select, setSidebarOverlayStart } from 'src/redux/actions/index'
import { connect } from 'react-redux'

const NavMainOrigin = (props) => {
  const { setSidebarOverlayStart } = props

  return (
    <div
      className="nav-main"
      style={{
        paddingLeft: '1px',
        height: '39px',
        paddingTop: '0px',
        backgroundImage: 'none',
        backgroundColor: '#232f3e',
        width: '100%',
      }}
    >
      <div className="nav-left">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: 'auto',
            padding: '8px 9px 8px 9px',
            margin: '0 0 6px 0',
            fontSize: '25px',
            color: '#fff',
            borderRadius: '3px',
          }}
          className="nav-hamburger-menu w-max border border-transparent cursor-pointer hover:border-white"
        >
          <div
            style={{
              width: '17px',
              height: '14px',
              backgroundPosition: '-172px -255px',
              backgroundImage:
                'url(https://images-na.ssl-images-amazon.com/images/G/15/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936603_.png)',
              backgroundRepeat: 'repeat-x',
            }}
          ></div>
          {/* eslint-disable */}
          <div
            onClick={() => setSidebarOverlayStart()}
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: '14px',
              paddingLeft: '5px',
              whiteSpace: 'nowrap',
            }}
          >
            All
          </div>
          {/* eslint-enable */}
        </div>
      </div>
    </div>
  )
}

const NavMain = connect(select, { setSidebarOverlayStart })(NavMainOrigin)

export default NavMain
