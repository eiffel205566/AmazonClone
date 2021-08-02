import { select, updateBackgroundStart } from 'src/redux/actions/index'
import { connect } from 'react-redux'

const HomePageOrigin = (props) => {
  const { background, updateBackgroundStart } = props
  return (
    /*eslint-disable*/
    <div
      onClick={(e) => {
        e.preventDefault()
        updateBackgroundStart()
      }}
      className={`bg-${
        background === 'dark' ? 'gray' : 'green'
      }-300 w-40 select-none border border-gray-300 cursor-pointer`}
    >
      AmazonClone
    </div>
  )
}

const HomePage = connect(select, { updateBackgroundStart })(HomePageOrigin)

export default HomePage
