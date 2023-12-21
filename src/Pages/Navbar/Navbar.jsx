import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {logOut} = useContext(AuthContext);

  // logout
  const handleLogout = ()=>{
    logOut()
    .then(()=>{
      toast.success("LogOut Complete",{
        autoClose: 2000
      });
    })
    .catch(()=>{
      toast.error("problem Occured",{
        autoClose: 2000
      });
    })

  }
  const {user} = useContext(AuthContext);
    return (
<>
<div className="navbar bg-base-50 sticky top-0 hidden lg:block">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl font-bold text-emerald-700">Task<span className='text-red-600 -ml-3'>Swift</span></a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
<div className='space-x-6'>
<NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-600 font-bold underline" : ""
  }
>
  <span className='text-xl font-semibold text-emerald-600'>Dashboard</span>
</NavLink>
          <NavLink
  to="/tasks"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-600 font-bold underline" : ""
  }
>
  <span className='text-xl font-semibold text-emerald-600'>Tasks</span>
</NavLink>
          <NavLink
  to="/todo"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-600 font-bold underline" : ""
  }
>
  <span className='text-xl font-semibold text-emerald-600'>To Do</span>
</NavLink>
          <NavLink
  to="/add"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-600 font-bold underline" : ""
  }
>
 <span className='text-xl font-semibold text-emerald-600'>ADD</span>
</NavLink>
{
  !user && <Link to={'/login'}><button className='btn btn-outline btn-accent ml-[570px]'>LogIn</button></Link>
}
</div>
          </div>
{
  user &&           <div className="dropdown dropdown-end ml-[570px]">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img src={user?.photoURL} />
    </div>
  </label>
  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    <li>
      <button className='btn btn-outline btn-accent mb-2'>{user?.displayName}</button>
    </li>
    <li><button onClick={handleLogout} className='btn btn-secondary text-white text-center font-bold items-center text-xl pt-2'>LogOut</button></li>
  </ul>
</div>
}
        </div>
      </div>

      {/* responsive  */}
      <div className="navbar bg-base-100 lg:hidden">
      <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-600 font-bold underline" : ""
  }
>
  <span className='text-xl font-semibold text-emerald-600'>Dashboard</span>
</NavLink></li>
        <li>          <NavLink
  to="/tasks"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-600 font-bold underline" : ""
  }
>
  <span className='text-xl font-semibold text-emerald-600'>Tasks</span>
</NavLink></li>
        <li>          <NavLink
  to="/todo"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-600 font-bold underline" : ""
  }
>
  <span className='text-xl font-semibold text-emerald-600'>To Do</span>
</NavLink></li>
        <li>          <NavLink
  to="/add"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active text-red-600 font-bold underline" : ""
  }
>
 <span className='text-xl font-semibold text-emerald-600'>ADD</span>
</NavLink></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
  <a className="btn btn-ghost normal-case text-2xl font-bold text-emerald-700">Task<span className='text-red-600 -ml-3'>Swift</span></a>
  </div>
  <div className="navbar-end">
  {
  !user && <Link to={'/login'}><button className='btn btn-outline btn-accent'>LogIn</button></Link>
}
{
  user &&           <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img src={user?.photoURL} />
    </div>
  </label>
  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    <li>
      <button className='btn btn-outline btn-accent mb-2'>{user?.displayName}</button>
    </li>
    <li><button onClick={handleLogout} className='btn btn-secondary text-white text-center font-bold items-center text-xl pt-2'>LogOut</button></li>
  </ul>
</div>
}
  </div>
</div>
</>
    );
};

export default Navbar;