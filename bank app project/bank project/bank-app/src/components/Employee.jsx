import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
const Customer = () => {

    const [acc, setAcc] = useState("");
    const [pass, setPass] = useState("");
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        const getData = async () => {
            try {
                const result = await fetch(`http://localhost:4000/login1/${acc}/${pass}`);
                const resp = await result.json();
                const data = JSON.stringify(resp[0])
                if (resp.length) {
                    sessionStorage.setItem("customer", data);
                    navigate("/employeeAccess");
                }
                else {
                    setErr("Invalid Account Number and Password !")
                }

            }
            catch (error) {
                console.log(error);
            }
        }
        getData();
    }
    return (
        <div>
            <Nav />
            <div className="container w-60 bg-new p-5 mt-3 b-radius-50">

                <h1 className="text-center text-success mb-2">Login Here..</h1>
                <form onSubmit={handleLogin} className="form shadow p-3 form  bg-body rounded">
                    <div class="mb-3">
                        <label for="account" className="form-label"> Username</label>
                        <input type="text" className="form-control" id="account" aria-describedby="emailHelp" onChange={(e) => setAcc(e.target.value)} />

                    </div>
                    <div class="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={(e) => setPass(e.target.value)} />
                    </div>

                    <button type="submit" className="btn btn-success px-3">Login</button>
                    <div className='text-danger text-center mb-2'>{err}</div>
                </form>
            </div>
        </div>
    )
}

export default Customer