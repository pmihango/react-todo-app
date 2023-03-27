import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
  const redirect =  useNavigate()
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    setUserInfo(storedUserInfo);
  }, []);

  function handleLogout() {
    localStorage.removeItem('userInfo');
    setUserInfo(null);
    redirect('/')
    window.location.reload();
  }
  return (
    <>
    
    {userInfo ? ( <nav>
        <div className="navbar-logo">
          <NavLink to="/">📑Todo! </NavLink>
        </div>
        
        <div className="navbar-links">
          {/* <NavLink to="/auth">Currently working<br /> on REACT</NavLink> */}
          <NavLink to="/projects">My Todos</NavLink>
          <NavLink to="/addProject">Add a Todos</NavLink>
          <button className='btn-logout' onClick={handleLogout}>Log Out</button>
        </div>
      </nav>):(  <nav>     <div className="navbar-logo">
          <NavLink to="/">Todo </NavLink>
        </div> </nav> )}
    
    </>
  );
}

export default Header;
