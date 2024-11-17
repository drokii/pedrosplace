import { Outlet } from 'react-router-dom'
import './Root.css'
import Navbar from '../../components/navbar/Navbar'

function Root() {

  return (
    <>
      <h1>Pedro's Tower</h1>
      <h2>Spells and ramblings from weary wizards, for weary wizards</h2>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Root
