import React from 'react'
import PropTypes from 'prop-types'

class VideoDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videoSrc: 'https://www.youtube.com/embed/'
    }
    this.getVideoDetail = this.getVideoDetail.bind(this)
  }

  getVideoDetail (video) {
    if (video === null) {
      return <div />
    }
    return (
      <div>
        <div className="ui embed">
          <iframe
            title="video player"
            src={`${this.state.videoSrc}${video.id.videoId}`}
            frameBorder="0"
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    )
  }
  render () {
    return this.getVideoDetail(this.props.video)
  }
}

VideoDetail.propTypes = {
  video: PropTypes.object
}

export default VideoDetail
