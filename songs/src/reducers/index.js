import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'song1', duration: '1:00' },
    { title: 'song2', duration: '2:00' },
    { title: 'song3', duration: '3:00' },
    { title: 'song4', duration: '4:00' }
  ]
}

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
