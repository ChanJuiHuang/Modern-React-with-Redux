import React from 'react'
import PropTypes from 'prop-types'
import ImageCard from './ImageCard'

class ImageList extends React.Component {
  constructor (props) {
    super(props)
    this.state = { images: [] }
  }

  getImages (images) {
    return images.map(({ id, urls, description }) => (
      <ImageCard key={id} urls={urls} description={description} />
    ))
  }

  render () {
    return <div>{this.getImages(this.props.images)}</div>
  }
}

ImageList.propTypes = {
  images: PropTypes.array
}

export default ImageList
