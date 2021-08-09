const ReturnOrders = () => {
  return (
    <div
      className="text-white flex flex-col border border-transparent cursor-pointer hover:border-white"
      style={{
        paddingRight: '9px',
        paddingLeft: '9px',
      }}
    >
      <span
        style={{
          marginTop: '2px',
          height: '14px',
          fontSize: '12px',
          lineHeight: '14px',
          fontWeight: '400',
        }}
        className="nav-line-1"
      >
        Returns
      </span>
      <span
        style={{
          fontSize: '14px',
          lineHeight: '15px',
          fontWeight: '700',
          whiteSpace: 'nowrap',
        }}
        className="nav-line-2"
      >
        & Orders
      </span>
    </div>
  )
}

export default ReturnOrders
