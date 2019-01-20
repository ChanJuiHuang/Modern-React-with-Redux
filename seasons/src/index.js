import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDetail from './SeasonDisplay'
import LoadingPage from './LoadingPage'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      lat: null,
      errorMessage: ''
    }
  }

  componentDidMount () {
    console.log('after mount')
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({
        lat: position.coords.latitude
      }),
      (err) => this.setState({
        errorMessage: err.message
      })
    )
  }

  componentDidUpdate () {
    console.log('after update')
  }

  renderContent () {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDetail lat={this.state.lat} />
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    return <LoadingPage />
  }

  render () {
    console.log('render')
    return (
      // This is a faker class that cannot work.
      // It just a sample.
      <div className="exampleClass">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
