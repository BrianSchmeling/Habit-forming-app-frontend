import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";

const Nav = () =>{
    return(
        <div className='nav'>
        <div className="logo">
            <h3 className='text-3xl text-slate-700'>MyHabits</h3>
        </div>
        <nav class="flex justify-center space-x-4">
            <Link to= "/">
                <a href="/" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
            </Link>
            <Link to="/createHabit">
                <a href="/createHabit" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Create Habit</a>
            </Link>
            <Link to="login">
                <a href="/login" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Login</a>
            </Link>
            
            <a href="/explore" class="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Explore</a>
        </nav>
    </div>
    )
}

export default Nav