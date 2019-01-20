import React from 'react'

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  let season = getSeason(props.lat, new Date().getMonth())
  return <h1>{season}</h1>
}

export default SeasonDisplay
