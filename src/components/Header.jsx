import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 left ">
                <Link to='/'>FORM.AZ</Link>

              </div>
             <div className="col-lg-10 text-end right">
                <Link to='/'>Home</Link>
                <Link to='/add'>Add User</Link>



             </div>
            </div>
        </div>
    </header>
  )
}

export default Header