import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'


function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className="flex items-center justify-between p-4 text-white border-b border-gray-300 w-full">
            <div className='text-2xl text-black font-bold'>
                <Link to='/'>GoalSetter</Link>
            </div>
            <ul className='flex gap-4'>
                {user ? (
                    <li>
                        <button onClick={onLogout} className='flex items-center gap-1 bg-black text-white rounded-md p-2 hover:bg-gray-400 transition px-4'><FaSignOutAlt />Logout</button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to='/login' className='flex items-center gap-1 text-black hover:text-gray-400'><FaSignInAlt />Login</Link>
                        </li>
                        <li>
                            <Link to='/register' className='flex items-center gap-1 text-black hover:text-gray-400'><FaUser />Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
  ) 
}
export default Header