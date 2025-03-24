import {useState, useEffect} from 'react'
import {FaSign, FaSignInAlt} from 'react-icons/fa'

function Login() {
    // putting each field in a single state with type object
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    // destructure fields from formData
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
        <section>
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>
                Login and Start setting goals
            </p>
        </section>

        <section>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="email" 
                        className="" 
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
                        className="" 
                        id='password' 
                        name='password' 
                        value={password} 
                        placeholder='Enter password' 
                        onChange={onChange}
                    />
                </div>       
                <div>
                    <button type='submit' className='btn-block'>Submit</button>
                </div>       
            </form>
        </section>
    </>
    )
}
export default Login