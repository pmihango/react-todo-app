import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Auth() {
  const redirect = useNavigate()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')

  function handleLogin(e){
    e.preventDefault(); 

    fetch('https://port-folio-xtgn.onrender.com/login',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then((res)=>{
      if(res.ok){
        return res.json()
      }else{
        throw new Error('Invalid email or Password')
      }
    }).then((info)=>{
     
      localStorage.setItem('userId', info.data.user.id)
      localStorage.setItem('userInfo', info.data.user.first_name)
      localStorage.setItem('userLastName', info.data.user.last_name)

      redirect('/')
      window.location.reload();
    }).catch(error=>{
      setError(error.message)
    })
  }
  return (
    <>
        <div className="login-form">
            <form action="" method='post' onSubmit={handleLogin}>
            <h1 style={{textAlign:'center'}}>Welcome back! 🤝🏽</h1>
            <div className="form-group">
            <label>Email</label>
        <input type="email" name="email" className="form-control"  id="" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control"  name="password" id="" placeholder='password' value={password} onChange={e=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Log In</button>
        <div className="forgot-password">
        <span><p>Don't have an account?</p></span> <p className='link'> <span onClick={()=>redirect('/signup')}>Create!</span></p>
    </div>
        <p style={{color:'red'}}>{error}</p>
        
        </form>
        </div>



    </>
  )
}

export default Auth

