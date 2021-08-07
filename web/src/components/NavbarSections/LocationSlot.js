const LocationSlot = () => {
  return (
    <div
      style={{
        padding: '5px 9px 5px 9px',
        // margin: '5px 2px 5px 0',
      }}
      className="nav-global-location-slot flex border border-transparent cursor-pointer hover:border-white"
    >
      <div
        style={{
          backgroundImage:
            'url(https://images-na.ssl-images-amazon.com/images/G/15/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405936603_.png)',
          backgroundRepeat: 'repeat-x',
          backgroundPosition: '-71px -378px',
          width: '15px',
          height: '18px',
          marginTop: '8px',
        }}
      ></div>
      <div style={{ marginLeft: '3px' }} className="text-white flex flex-col">
        <div
          style={{
            fontSize: '12px',
            lineHeight: '14px',
            height: '14px',
            fontWeight: '400',
            whiteSpace: 'nowrap',
            color: '#ccc',
          }}
        >
          Hello
        </div>
        <div
          style={{
            fontSize: '14px',
            lineHeight: '15px',
            fontWeight: '700',
            whiteSpace: 'nowrap',
          }}
        >
          Select Your Address
        </div>
      </div>
    </div>
  )
}

export default LocationSlot
