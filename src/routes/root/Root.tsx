import { Outlet } from 'react-router-dom'
import './Root.css'
import Navbar from '../../components/navbar/Navbar'

function Root() {

  return (
    <>
      <h1>Pedro's Tower</h1>
      <h2>This is my domain.</h2>
      <h4>I'm an aspiring wizard with about 5 years of experience in the school of software engineering, and this is my website.</h4>
      <h4>Welcome.</h4>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Root
