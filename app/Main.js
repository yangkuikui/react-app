import React from "react"
import ReactDOM from "react-dom"

function Example() {
  return (
    <div>
      <h1>Hello React!</h1>
    </div>
  )
}

ReactDOM.render(<Example />, document.querySelector("#app"))

if (module.hot) module.hot.accept()
