import { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'

export default function Login() {
    const showPassword = useRef();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleShowPassword = (e) => {
        (e.target.checked == !true) ?
            showPassword.current.type = "password"
            :
            showPassword.current.type = "username"
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(username, password);
    }
    return (
        <div>
            <main>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                                                <p className="text-center small">Enter your username &amp; password to login</p>
                                            </div>
                                            <form className="row g-3 needs-validation" onSubmit={handleFormSubmit}>
                                                <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Username</label>
                                                    <div className="input-group has-validation">
                                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        <input type="email" name="username" className="form-control" id="yourUsername" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                                        <div className="invalid-feedback">Please enter your username.</div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <label className="form-label">Password</label>
                                                    <input ref={showPassword} type="password" name="password" className="form-control" id="yourPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                                    <div className="invalid-feedback">Please enter your password!</div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input onChange={handleShowPassword} className="form-check-input" type="checkbox" name="remember" id="rememberMe" />
                                                        <label className="form-check-label" htmlFor="rememberMe">Show Password</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="submit">Login</button>
                                                </div>
                                                <div className="col-12">
                                                    <p className="small mb-0">Don't have account? <Link to="/registration">Create an account</Link></p>
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
        </div>
    )
}
