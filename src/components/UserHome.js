import React from 'react'
import { useNavigate } from 'react-router-dom'

function UserHome() {

  const redirect = useNavigate()
  const userInfo = localStorage.getItem('userInfo')
  const userLastName = localStorage.getItem('userLastName')

 
  console.log(userInfo)
  return (
    <>
    <div className='homeContainer'>
    <div className='currentJob'>
    {userInfo ? (<h1> <span style={{color:'Green'}}>{userInfo}</span>, <br /></h1>):(<><h1>The Best<br /> Todo App <span className='access' onClick={()=>redirect('/auth')}>Login Here</span></h1> 
    
    </>
    )}
        
    </div>
    <div className='userImage'>
        {/* <img style={{height:'25vh'}} src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" srcSet="" /> */}
    </div>
    <div  className='userSummary'>
        
        {/* <p style={{marginTop:'80px'}}>With Todo....<br /> You can plan your Todos </p> */}
        {userInfo ?(<h1><span style={{color:'green'}}>{userInfo}</span> <br /> {userLastName}</h1>):(<h1>Welcome to our Todo App<br /> Application</h1>)}
        
    </div>
    </div>
    </>
  )
}

export default UserHome