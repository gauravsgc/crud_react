import React from 'react'
import { Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function Navi() {
  return (
    <div>

<Nav>
  <Nav.Item>
    <Link to="/">home</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/about">aboutus</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to="/contact">contactus</Link>
  </Nav.Item>
  <Nav.Item>
    {/* <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link> */}
  </Nav.Item>
</Nav>
    </div>
  )
}
