import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 875dbe3946fc8e24c9811f6c4e9dc9c1ebe6b2fd5d0ed7408d371a35a31ed23b'
  }
})
