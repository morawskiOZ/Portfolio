import React from 'react'
import "./Footer.scss"


const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="Footer">
      &#169; All rights reserved Piotr Morawski {year}
    </div>
  )
}

export default Footer
