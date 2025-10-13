import React, { useState } from 'react'

function ToggleButton() {
    const [isOn , seton] = useState(true);
    function togle(){
        seton(!isOn)
    }
  return (
    <div>
        <p>The button is {isOn ? 'On' : 'Off'} </p>
        <button onClick={togle}>Turn {isOn ? 'Off' : 'On'} </button>
    </div>
  )
}

export default ToggleButton