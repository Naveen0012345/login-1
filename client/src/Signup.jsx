import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
function Signup() {

    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => console.log(result))
        .catch(err=>  console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Register </h2>
                    <form onSubmit={handleSubmit}>
                    
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong> Name  </strong>
                        </label>
                        <input type="text"
                        placeholder="enter name"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => setName(e.target.value)} />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="email">
                            <strong> Email </strong>
                        </label>
                        <input type="email"
                        placeholder="enter email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(e) => setEmail(e.target.value)} />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="email">
                            <strong> Password  </strong>
                        </label>
                        <input type="password"
                        placeholder="enter password"
                        name="password"
                        className="form-control rounded-0" 
                        onChange={(e) => setPassword(e.target.value)}/>
                     </div>
                     <button type="submit" className="btn btn-sucess w-100 rounded-0 bg-primary">
                      Register
                     </button>
                     </form>
                     <p>Already have an account?</p>
                     <p>
                        <Link to='/Login' className="btn btn-default border w-100 bg-success rounded-0  text-decoration-none">login</Link>                     

</p>

                    
                
            </div>
        </div>
    );
}

export default Signup;
