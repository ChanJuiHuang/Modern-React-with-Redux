import React from 'react'
import PropTypes from 'prop-types'

class VideoItem extends React.Component {
  constructor (props) {
    super(props)
    this.onClickImage = this.onClickImage.bind(this)
  }

  onClickImage (event) {
    this.props.onVideoSelect(this.props.video)
  }

  render () {
    return (
      <div onClick={this.onClickImage} className="item">
        <img
          className="ui image"
          src={this.props.video.snippet.thumbnails.medium.url}
          alt={this.props.video.snippet.title}
        />
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    )
  }
}

VideoItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func
}

export default VideoItem
