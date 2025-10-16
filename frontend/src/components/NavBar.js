import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar(){ return (<nav className='p-4 bg-gray-200 dark:bg-gray-800'><Link to='/'>Kifaru Tours</Link> | <Link to='/about'>About Us</Link></nav>); }
