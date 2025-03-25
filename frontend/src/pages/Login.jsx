import {useState, useEffect} from 'react'
import {FaSign, FaSignInAlt} from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <>
      <section className='flex flex-col justify-center items-center gap-y-2'>
        <h1 className='flex items-center gap-1 text-6xl mt-16 py-4 font-bold'>
          <FaSignInAlt /> Login
        </h1>
        <p className='font-bold text-3xl text-blue-500 mb-12'>
          Login and Start setting goals
        </p>
      </section>

      <section className='flex items-center justify-center'>
  <form onSubmit={onSubmit} className="space-y-4 w-full max-w-md">
    <div>
      <input
        type="email"
        className="w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
        id='email'
        name='email'
        value={email}
        placeholder='Enter your email'
        onChange={onChange}
      />
    </div>    
    <div>
      <input
        type="password"
        className="w-full border-2 border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
        id='password'
        name='password'
        value={password}
        placeholder='Enter password'
        onChange={onChange}
      />
    </div>       
    <div>
      <button type='submit' className='w-full bg-black text-white rounded-md p-2 hover:bg-gray-400 transition'>
        Submit
      </button>
    </div>       
  </form>
</section>

    </>
  )
}

export default Login