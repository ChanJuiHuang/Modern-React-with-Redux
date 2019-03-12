import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectSong } from '../actions'

class SongList extends React.Component {
  renderList () {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }

  render () {
    return <div className="ui divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectSong: song => {
      return () => dispatch(selectSong(song))
    }
  }
}

SongList.propTypes = {
  songs: PropTypes.array,
  selectSong: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongList)
