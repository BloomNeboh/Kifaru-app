import React, {useState,useEffect} from 'react';
export default function ThemeToggle(){ const [d,setD]=useState(false); useEffect(()=>document.documentElement.classList.toggle('dark',d),[d]); return (<button onClick={()=>setD(!d)} className='fixed right-4 top-4'>Toggle</button>); }
