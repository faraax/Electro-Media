import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../../Hooks/useSignup';
import './Registration.css'

export default function Registration() {
  const showPassword = useRef();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [signup, isPending, error, message] = useSignup()


  const handleShowPassword = (e) => {
    (e.target.checked == !true) ?
      showPassword.current.type = "password"
      :
      showPassword.current.type = "username"
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const name = firstName + " " + lastName;
    signup(name, username, password)
    console.log(name);
  }

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                      <p className="text-center small">Enter your personal details to create account</p>
                    </div>
                    <form className="row g-3 needs-validation" onSubmit={handleFormSubmit}>
                      <div className="col-12">
                        <label htmlFor="yourName" className="form-label">Your First Name</label>
                        <input type="text" name="name" className="form-control" id="yourFirstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        <div className="invalid-feedback">{'Please, enter your name!'}</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourName" className="form-label">Your Last Name</label>
                        <input type="text" name="name" className="form-control" id="yourLastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        <div className="invalid-feedback">{'Please, enter your name!'}</div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourUsername" className="form-label">Email</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                          <input type="text" name="username" className="form-control" id="yourUsername" value={username} onChange={(e) => setUsername(e.target.value)} required />
                          <div className="invalid-feedback">{'Please choose a username.'}</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="yourPassword" className="form-label">Password</label>
                        <input ref={showPassword} type="password" name="password" className="form-control" id="yourPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <div className="invalid-feedback">{"Please enter your password!"}</div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" name="terms" type="checkbox" onChange={handleShowPassword} />
                          <label className="form-check-label" > Show Password</label>
                          {/* <div className="invalid-feedback">You must agree before submitting.</div> */}
                        </div>
                      </div>
                      {
                        !isPending && (
                          <div className="col-12">
                            <button className="btn btn-primary w-100" type="submit">Create Account</button>
                          </div>
                        )
                      }
                      {
                        isPending && (
                          <div className="col-12">
                            <button className="btn btn-primary w-100" type="submit">Loading</button>
                          </div>
                        )
                      }
                      {/* <div className="invalid-feedback">You must agree before submitting.</div> */}
                      <div className="col-12">
                        <p className="small mb-0">Already have an account? <Link to={'/login'}>Log in</Link></p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
