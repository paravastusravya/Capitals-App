import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onchangeCapital = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const activeCapitalAndcountry = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeId,
    )
    return activeCapitalAndcountry.country
  }

  render() {
    const country = this.getCountry()
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Countries And Capitals List</h1>
          <div className="select-container">
            <div className="select">
              <select onChange={this.onchangeCapital}>
                {countryAndCapitalsList.map(eachCapital => (
                  <option key={eachCapital.id} value={eachCapital.id}>
                    {eachCapital.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p>is capital of which country?</p>
            </div>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
