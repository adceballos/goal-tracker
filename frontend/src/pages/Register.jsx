import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
    // putting each field in a single state with type object
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    // destructure fields from formData
    const {name, email, password, password2} = formData

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
                <FaUser /> Register
            </h1>
            <p>
                Please create an account
            </p>
        </section>

        <section>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="text" 
                        className="" 
                        id='name' 
                        name='name' 
                        value={name} 
                        placeholder='Enter your name' 
                        onChange={onChange}
                    />
                </div>    
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
                    <input
                        type="password" 
                        className="" 
                        id='password2' 
                        name='password2' 
                        value={password2} 
                        placeholder='Confirm password' 
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
export default Register