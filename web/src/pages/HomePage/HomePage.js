import { select, updateBackgroundStart } from 'src/redux/actions/index'
import { connect } from 'react-redux'
import Navbar from './Navbar'

const HomePageOrigin = (props) => {
  const { background, updateBackgroundStart } = props
  /*eslint-disable*/
  return (
    <>
      <Navbar />
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
    </>
  )
}

const HomePage = connect(select, { updateBackgroundStart })(HomePageOrigin)

export default HomePage
