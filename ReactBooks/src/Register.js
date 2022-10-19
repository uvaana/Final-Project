import {useState} from 'react';

import loginImage from './Images/books.png';
const Register = () => {
    const [userName,SetUserName]=useState("");
    const [password,SetPassword]=useState("");
    const handleSubmit=async (e) => {
        e.preventDefault();
        var requestData={
            userName:userName,
            password:password
        };
        //console.log(requestData);
        const data = await fetch("https://localhost:44350/api/Login/register-user", {
            method: "post",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(requestData),
          });
          const response = await data.json();
          console.log(response);
    }

    return (
        <div >
            <div className="container" style={{marginTop:"40px"}}>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={loginImage} className="img-fluid rounded-start" alt="..." style={{height: "100%"}}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Register</h5>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Email address</label>
                                        <input type="email" value={userName} onChange={(e)=>SetUserName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" value={password}  onChange={(e)=>SetPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;