import { Link } from 'react-router-dom'
import { Navbar } from '../../Components'
import useSignout from '../../Hooks/useSignout'
import './Home.css'

export default function Home() {
  return (
    <div>
      {/* Signout
      <button onClick={logout}>
        <Link to={'/login'} onClick={useSignout}>Signout</Link>
      </button> */}
      <Navbar />
    </div>
  )
}
