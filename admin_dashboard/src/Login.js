
import React from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {emailORUsername,login, password} from "./store/actions/loginAction";
import './index.css';

function Login(){
  
    const dispatch=useDispatch();
    
    const errorLog=useSelector(state=>state.login);
    const Fun=(e)=>{
        e.preventDefault();
        dispatch(login());
    }

    return(
    <div className='container'>
<form onSubmit={(e)=>Fun(e)}>
  <div className="imgcontainer">
    <img src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png" alt="Avatar"  className="avatar" />
  </div>
  <div className="container">
  <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form3Example3">
              Email address
            </label>
            <input
              type="email"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid email address"
              onChange={(e)=>dispatch(emailORUsername(e.target.value))}
            />
          </div>
          <div className="form-outline mb-3">
          <label className="form-label" htmlFor="form3Example4">
              Password
            </label>
            <input
              type="password"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter password"
              onChange={(e)=>dispatch(password(e.target.value))}
            /> 
          </div>
    
    <button type="submit">Login</button>
    
  </div>
  
</form>

</div>
    )

}

export default Login;