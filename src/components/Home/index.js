// Write your code here
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardList: ''}

  componentDidMount() {
    this.getTeamCardData()
  }

  getTeamCardData = async () => {
    const url = 'https://apis.ccbp.in/ipl'
    const response = await fetch(url)
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamCardList: formattedData})
  }

  render() {
    const {teamCardList} = this.state
    return (
      <div className="bg-container">
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <ul>
          {teamCardList.map(each => (
            <TeamCard key={each.id} cardDetails={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
