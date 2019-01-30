import React from 'react'
import PropTypes from 'prop-types'

class ImageList extends React.Component {
  constructor (props) {
    super(props)
    this.state = { images: [] }
  }

  componentWillReceiveProps (nextProps) {
    this.setImages(nextProps.images || [])
  }

  setImages (images) {
    images = images.map(({ id, urls, description }) => (
      <img key={id} src={urls.regular} alt={description} />
    ))
    this.setState({ images })
  }

  render () {
    return <div>{this.state.images}</div>
  }
}

ImageList.propTypes = {
  images: PropTypes.array
}

export default ImageList
