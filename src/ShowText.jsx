import React, { useState } from 'react'

function ShowText() {
    const [visible , setVisible] = useState(false);
    function toggle(){
        setVisible(!visible)
    }
  return (
    <div>
        <button  onClick={toggle}>{visible ? 'Hide' :'Show'} Text</button>
        {visible && <p>Text is visible.....</p>}
        
    </div>
  )
}

export default ShowText