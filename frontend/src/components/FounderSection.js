import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function FounderSection(){ const nav = useNavigate(); return (<section onClick={()=>nav('/about')} className='text-center p-8'><img src='/images/neboh.jpg' alt='NeboH' className='w-32 h-32 rounded-full'/><h2>NeboH Eliud</h2><p>Founder & CEO</p></section>); }
