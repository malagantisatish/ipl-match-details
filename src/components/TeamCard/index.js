// Write your code here

import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails
  return (
    <li>
      <h1>{name}</h1>
    </li>
  )
}

export default TeamCard
