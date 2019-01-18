import React from 'react'
import ReactDOM from 'react-dom'

// function getButtonText () {
//   return 'Click On Me!'
// }

const App = () => {
  const style = { backgroundColor: 'blue', color: 'white' }
  const buttonText = 'Click Me!'
  // const buttonText /= { text: 'aaa' }

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText}
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
