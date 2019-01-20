import React from 'react'
import PropTypes from 'prop-types'

class LoadingPage extends React.Component {
  render () {
    return <h1>{this.props.message}</h1>
  }
}

LoadingPage.defaultProps = {
  message: 'Loading...'
}

LoadingPage.propTypes = {
  message: PropTypes.string
}

export default LoadingPage
