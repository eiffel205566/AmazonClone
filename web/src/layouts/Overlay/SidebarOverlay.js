import { select } from 'src/redux/actions/index'
import { connect } from 'react-redux'
import { setSidebarOverlay } from 'src/redux/actions/index'

const SidebarOverlayOrigin = (props) => {
  const { sidebarOverlay } = props

  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,.8)',
        opacity: '1',
      }}
      className={`${
        sidebarOverlay ? 'block' : 'hidden'
      } z-30 fixed h-screen w-screen`}
    ></div>
  )
}

const SidebarOverlay = connect(select, { setSidebarOverlay })(
  SidebarOverlayOrigin
)

export default SidebarOverlay
