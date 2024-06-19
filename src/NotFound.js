import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function NotFound() {
  return (
    <div className='not-found'>
        <h2>Sorry That Page Does Not Exist</h2>
        <Link to='/'>Back to homepage...</Link>
    </div>
    
  )
}

export default NotFound