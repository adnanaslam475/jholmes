import React from 'react'

function Warning({ error, className }) {
  return (
    <div className={`warning ${className}`}>{error}</div>
  )
}

export default Warning;