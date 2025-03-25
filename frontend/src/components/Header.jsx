import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="flex items-center justify-between p-4 text-white border-b border-gray-300 w-full">
        <div className='text-2xl text-black font-bold'>
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul className='flex gap-4'>
            <li>
                <Link to='/login' className='flex items-center gap-1 text-black hover:text-gray-400'><FaSignInAlt />Login</Link>
            </li>
            <li>
                <Link to='/register' className='flex items-center gap-1 text-black hover:text-gray-400'><FaUser />Register</Link>
            </li>
        </ul>
    </header>
  ) 
}
export default Header