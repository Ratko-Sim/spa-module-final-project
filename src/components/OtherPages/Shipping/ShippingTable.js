import React from 'react'
import { useSelector } from "react-redux"

function ShippingTable() {

  const delivery = useSelector((state) => state.delivery)

  const renderDelivery = delivery.map((delivery) => {
    const { Country, Delivery } = delivery;
    return (
      <tr>
        <th>{Country}</th>
        <th>{Delivery}</th>
      </tr>
    )
  })
  return (
    <>
      {renderDelivery}
    </>
  )

}

export default ShippingTable
