import { useContext } from 'react'
import { OverlayBackgroundContext } from 'src/components/ContextApi/index'

export const NavtoolsSignIn = () => {
  const [overlay, setOverlay] = useContext(OverlayBackgroundContext)

  const onHandleMouseEnter = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setOverlay((state) => {
      return {
        ...state,
        isOverlay: true,
      }
    })
  }

  const onHandleMouseLeave = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setOverlay(() => {
      return {
        isOverlay: false,
      }
    })
  }

  return (
    <div
      onMouseEnter={onHandleMouseEnter}
      onMouseLeave={onHandleMouseLeave}
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
  )
}
