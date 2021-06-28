import React from 'react'
import OurTeamCard from "./OurTeamCard"
import "./OurTeam.scss"


function OurTeam() {


  return (
    <div className="OurTeam">
      <h1>Meet our team</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus rerum nemo, blanditiis hic voluptate voluptates ut expedita harum minima aliquam libero consequatur eius incidunt ipsam? Rem pariatur laudantium odio animi quasi tempora perspiciatis quisquam perferendis rerum architecto impedit voluptatibus, quam eos assumenda beatae. Nihil ipsam tempore!</p>
      <div className="Team-cards-wrapper">
        <OurTeamCard />
      </div>
    </div>
  )
}

export default OurTeam
