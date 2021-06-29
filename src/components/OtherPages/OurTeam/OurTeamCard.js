import React from 'react'
import { useSelector } from "react-redux"

function OurTeamCard() {

  const users = useSelector((state) => state.users)

  const renderUsers = users.map((user) => {
    const { name, title, img } = user;

    const style = {
      backgroundImage: "url(" + img + ")",
    }
    console.log(img);

    return (
      <div style={style} className="Team-Card">
        <div className="Team-content">
          <div className="Team-underline"></div>
          <span className="Team-name">
            {name}
          </span>
          <span className="Team-title">{title}</span>
        </div>
      </div>
    )
  })
  return (
    <>
      {renderUsers}
    </>
  )

}

export default OurTeamCard
