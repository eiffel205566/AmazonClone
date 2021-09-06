import { select, updateBackgroundStart } from 'src/redux/actions/index'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { OverlayBackgroundContext } from 'src/components/ContextApi/index'
import { useState } from 'react'
import NavMain from 'src/components/NavMain/NavMain'
import SidebarOverlay from 'src/layouts/Overlay/SidebarOverlay'

const HomePageOrigin = (props) => {
  const { background, updateBackgroundStart } = props
  const [overlay, setOverlay] = useState({
    isOverlay: false,
  })

  /*eslint-disable*/
  return (
    <>
      <OverlayBackgroundContext.Provider value={[overlay, setOverlay]}>
        <Navbar />
        <NavMain />
        <SidebarOverlay />
      </OverlayBackgroundContext.Provider>
    </>
  )
}

const HomePage = connect(select, { updateBackgroundStart })(HomePageOrigin)

export default HomePage
