import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Registerpage() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const { registerUser } = useContext(AuthContext)

  const handleSubmit = async e => {
    e.preventDefault()
    registerUser(email, username, password, password2)
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <h5 className="card-title text-center mb-4">Sign Up</h5>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      onChange={e => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      onChange={e => setPassword2(e.target.value)}
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-lg"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div className="text-center mt-3">
                  <Link to="/login">Already have an account? Login Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registerpage
