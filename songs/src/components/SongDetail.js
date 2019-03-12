import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class SongDetail extends React.Component {
  render () {
    if (this.props.song === null) {
      return <div>Select the song</div>
    }

    const { title, duration } = this.props.song

    return (
      <div>
        <h3>Details for:</h3>
        <p>
          Title: {title}
          <br />
          Duration: {duration}
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  }
}

SongDetail.propTypes = {
  song: PropTypes.object
}

export default connect(mapStateToProps)(SongDetail)
