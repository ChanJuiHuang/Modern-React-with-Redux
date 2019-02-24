import axios from 'axios'

const KEY = '<google API key>'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    maxResults: 5,
    part: 'snippet',
    key: KEY
  }
})
