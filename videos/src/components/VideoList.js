import React from 'react'
import PropTypes from 'prop-types'
import VideoItem from './VideoItem'

class VideoList extends React.Component {
  constructor (props) {
    super(props)
    this.getVideoItems = this.getVideoItems.bind(this)
  }

  getVideoItems () {
    return this.props.videos.map(video => (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={this.props.onVideoSelect}
        video={video}
      />
    ))
  }

  render () {
    return <div className="ui relaxed divided list">{this.getVideoItems()}</div>
  }
}

VideoList.propTypes = {
  videos: PropTypes.array,
  onVideoSelect: PropTypes.func
}

export default VideoList
