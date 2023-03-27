import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Signup() {
    const redirect = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [error, setError] = useState('')
    function handleSubmit(e){
    e.preventDefault()
        fetch('https://port-folio-xtgn.onrender.com/signup',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                email:email,
                first_name:first_name,
                last_name:last_name,
                password:password
            })
        }).then((res)=>{
            if(res.ok){
                redirect('/auth')
                return res.json()
                
            }else{
                throw new Error('Email already exists')
            }
        }).then((info)=>{
            if(info.error === "Email already exists"){
                setError(info.error)
            }
        }).catch(error=>{
            setError(error.message)
        })
    }
  return (
    <div>
        <div className="signup-form">    
        <h1 style={{textAlign:'center'}}>Welcome</h1>
        <form action="" method="post"  onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Email</label>
        <input type="email" name="email" className="form-control"  id="" placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>First Name</label>
            <input type="name" name="first_name" className="form-control"  placeholder='First name' value={first_name} onChange={(e)=>setFirstName(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label>Last Name</label>
            <input type="name" name="last_name" className="form-control"  placeholder="Last name"  value={last_name} onChange={(e)=>setLastName(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label>Password</label>
            <input type="password" name='password' className="form-control"  placeholder='password'value={password} onChange={(e)=>setPassword(e.target.value)}  required />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
        <div className="forgot-password">
        <span><p>Already have an account?</p></span> <p className='link'> <span onClick={()=>redirect('/auth')}>Login!</span></p>
    </div>
        <p style={{color:'red'}}>{error}</p>
        </form>

        </div>
    </div>
  )
}

export default Signup
