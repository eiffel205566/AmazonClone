import { select, updateBackgroundStart } from 'src/redux/actions/index'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import { OverlayBackgroundContext } from 'src/components/ContextApi/index'
import { useState } from 'react'

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
      </OverlayBackgroundContext.Provider>
      <div
        onClick={(e) => {
          e.preventDefault()
          updateBackgroundStart()
        }}
        className={`bg-${
          background === 'dark' ? 'gray' : 'green'
        }-300 w-40 select-none border hover:border-gray-300 cursor-pointer`}
      >
        AmazonClone
      </div>
      {overlay.isOverlay && <div className="h-screen w-screen bg-gray-300 z-30 "></div>}
    </>
  )
}

const HomePage = connect(select, { updateBackgroundStart })(HomePageOrigin)

export default HomePage
