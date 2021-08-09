export const CountrySelection = () => {
  return (
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
  )
}
