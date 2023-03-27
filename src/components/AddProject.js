import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddProject() {
    const userId = localStorage.getItem('userId');
    const redirect = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
   // const [repo_url, setRepo_url] = useState('')
    

    function handleSubmit(e){
        e.preventDefault()
        
        fetch(`https://port-folio-xtgn.onrender.com/project/${userId}`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            }, 
             body: JSON.stringify({
                title:title,
                description:description
              //  repo_url:repo_url
            })
        }).then((res)=>{
            if(res.ok){
               
                redirect('/projects')
                return res.json()
            }
        })
    }

  return (
    <div className="addProject-form">
        <h2>Add a Todo</h2>
                <form action="" method="post"  onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Title</label>
        <input type="text" name="title" className="form-control"  id="" placeholder='Enter title' value={title} onChange={e=>setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" name='description' value={description} onChange={(e) => setDescription(e.target.value)} required ></textarea>
            
        </div>
        {/* <div className="form-group">
            <label>Project Url (MUST BE URL)</label>
            <input type="name" name="repo_url" className="form-control"  placeholder="project Url(PROVIDE A URL)"  value={repo_url} onChange={(e)=>setRepo_url(e.target.value)} required/>
        </div> */}
        <button type="submit" className="btn btn-primary">Add Todo</button>
        {/* <div className="forgot-password">
        <span><p>Already have an account?</p></span> <p> <span onClick={()=>redirect('/auth')}>Login!</span></p>
    </div> */}
        {/* <p style={{color:'red'}}>{error}</p> */}
        </form>
    </div>
  )
}

export default AddProject
