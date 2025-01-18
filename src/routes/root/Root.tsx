import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

function Root() {

  return (
    <>
      <Outlet />
      <Navbar />
    </>
  )
}

export default Root
