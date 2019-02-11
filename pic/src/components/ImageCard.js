import React from 'react'
import PropTypes from 'prop-types'

class ImageCard extends React.Component {
  constructor (props) {
    super(props)
    this.imageRef = React.createRef()
    this.setImageHeight = this.setImageHeight.bind(this)
    this.state = { height: 500 }
  }

  setImageHeight () {
    const height = this.imageRef.current.clientHeight / 2
    this.setState({ height })
  }

  componentDidMount () {
    this.imageRef.current.addEventListener('load', this.setImageHeight)
  }

  render () {
    return (
      <img
        ref={this.imageRef}
        src={this.props.urls.regular}
        alt={this.props.description}
        height={`${this.state.height}px`}
      />
    )
  }
}

ImageCard.propTypes = {
  urls: PropTypes.object,
  description: PropTypes.string
}

export default ImageCard
