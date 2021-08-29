import { select } from 'src/redux/actions/index'
import { connect } from 'react-redux'
import { setSidebarOverlay } from 'src/redux/actions/index'

const SidebarOverlayOrigin = (props) => {
  const { sidebarOverlay, setSidebarOverlay } = props

  return (
    /* eslint-disable */
    <div
      id="sidebarMainContainer"
      onClick={(e) => {
        e.stopPropagation()
        if (e.target?.id === 'sidebarMainContainer') {
          setSidebarOverlay()
        }
      }}
      style={{
        backgroundColor: 'rgba(0,0,0,.8)',
        opacity: '1',
      }}
      className={`${
        sidebarOverlay ? 'block' : 'hidden'
      } absolute top-0 left-0 h-screen w-screen`}
    >
    <div
      id="hmenu-canvas"
      className="h-screen"
      style={{width: '365px', backgroundColor:"#fff", boxShadow:'4px 0 10px 0 rgb(0 0 0 / 40%)'}}
    >
      {/* top header of sidebar */}
      <div
        id="hmenu-customer-profile"
        style={{
          backgroundColor:'#232f3e',
          height:'50px',
          display:'flex',
          alignItems:'center',
        }}
      >
      {/* head icon */}
      <div
        id="hmenu-customer-avatar-icon"
        style={{
          height:"25px",
          width:'27px',
          margin:'0 10px 0 36px',
          backgroundPosition:'-137px -340px',
          backgroundImage:'url(https://images-na.ssl-images-amazon.com/images/G/15/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936603_.png)',
          color:"#007185",
          fontSize:'14px',
          lineHeight:'20px',
        }}
      >
      </div>

      {/* Sign in message */}
      <div
        id='hmenu-customer-profile-right'
        style={{
          display:'flex',
          flex:"1",
          overflow:'hidden',
          fontSize:"14px",
          lineHeight:'20px',
        }}
      >
        <b
          style={{
            whiteSpace:'nowrap',
            fontSize:'19px',
            lineHeight:'25px',
            color:'#fff',
            fontWeight:'700'
          }}
        >
          Hello, Sign in
        </b>
      </div>
      </div>
    </div>

    {/* eslint-enable */}
      <div
        style={{
          width: '20px',
          height: '20px',
          position: 'fixed',
          left: '380px',
          top: '20px',
          cursor: 'pointer',
          backgroundPosition: '-190px -288px',
          backgroundImage:
            'url(https://images-na.ssl-images-amazon.com/images/G/15/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936603_.png)',
          backgroundRepeat: 'repeat-x',
        }}
        className="nav-sprite hmenu-close-icon"
      ></div>
    </div>
  )
}

const SidebarOverlay = connect(select, { setSidebarOverlay })(
  SidebarOverlayOrigin
)

export default SidebarOverlay
